import LoginSignup from "../../components/LoginSignup";

interface LoginSignupProps {
  isFlip?: boolean;
}

const LoginSignupPage = ({ isFlip }: LoginSignupProps) => {
  return <LoginSignup isFlip={isFlip} />;
};

export default LoginSignupPage;
