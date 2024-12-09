// // import React, { useRef } from "react";
// // import EmailForm from "./componentemail/EmailForm";
// // import "./App.css";
// // import EmailRestApi from "./componentemail/EmailRestApi";
// // import Caffeine from "./componentemail/Caffeine";

// // const App = () => {
// //   return (
// //     <div className="App">
// //       <EmailForm />
// //       <EmailRestApi />
// //       <Caffeine />
// //     </div>
// //   );
// // };
// // export default App;

// import React, { useEffect } from "react";
// import { auth } from "./config/firebaseConfig";
// import { useAuthState } from "react-firebase-hooks/auth";
// import Login from "./componentForGoogle/Login";
// import Mainpage from "./componentForGoogle/MainPage";
// import { io } from "socket.io-client";
// // console.log(auth);
// function App() {
//   // const [user] = useAuthState(auth);
//   useEffect(() => {
//     const socket = io("http://localhost:3001/real_time"); // Connect to the backend

//     // Log successful connection
//     socket.on("connect", () => {
//       console.log("Connected to server:", socket.id);
//     });

//     // Emit a message to the server
//     socket.emit("message", { text: "Hello from React!" });

//     // Listen for server responses
//     socket.on("response", (data) => {
//       console.log("Server response:", data);
//     });

//     // Cleanup on component unmount
//     return () => {
//       socket.disconnect();
//       console.log("Socket disconnected");
//     };
//   }, []);
//   //return user ? <Mainpage /> : <Login />
//   return <>Test</>;
// }

// export default App;
import React, { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    // Connect to the backend server using the custom path `/real_time`
    const socket = io("http://localhost:3001/real_time");

    // Log successful connection
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    // Emit a message to the server
    socket.emit("message", { text: "Hello from React!" });

    // Listen for server responses
    socket.on("response", (data) => {
      console.log("Server response:", data);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
      console.log("Socket disconnected");
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO with React</h1>
      <p>Check your browser console for Socket.IO events.</p>
    </div>
  );
}

export default App;
