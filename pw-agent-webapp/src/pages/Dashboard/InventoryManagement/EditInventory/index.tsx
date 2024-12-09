import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditInventory from "../../../../components/EditInventory/EditInventory";

type Props = {};

const index = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return <EditInventory />;
};

export default index;
