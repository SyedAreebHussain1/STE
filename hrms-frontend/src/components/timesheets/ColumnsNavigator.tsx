import { useNavigate } from "react-router-dom";

type Props = {
  text: any;
  id?: any;
};

const ColumnsNavigator = ({ text, id }: Props) => {
  return (
    <span className="hover:text-primary transition-colors duration-100 ">
      {text}
    </span>
  );
};

export default ColumnsNavigator;
