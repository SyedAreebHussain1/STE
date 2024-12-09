import { useEffect } from "react";
import AddInventory from "../../../../components/AddInventory/AddInventory";
import { removeFromStorage } from "../../../../utils/storage";
import { removeGetProjectSubTypeByProjectTypeID } from "../../../../redux/slices/InventoryManagement/getProjectSubTypeByProjectTypeIDSlice";
import { useDispatch } from "react-redux";

type Props = {};

const index = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      removeFromStorage("project");
      removeFromStorage("projectType");
      removeFromStorage("projectSubType");
      dispatch(removeGetProjectSubTypeByProjectTypeID());
    };
  }, []);
  return <AddInventory />;
};

export default index;
