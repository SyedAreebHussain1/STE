import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  socket.emit("Welcome", "Server res");
  socket.on("msg", (data) => {
    console.log("msg from client", data);
  });
});
httpServer.listen(3000, () => {
  console.log("Listening on port 3000");
});
