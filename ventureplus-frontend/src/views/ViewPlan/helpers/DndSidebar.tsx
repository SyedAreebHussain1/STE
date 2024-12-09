import { motion } from "framer-motion";
const DndSidebar = ({ item, setSelectedMenu }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pl-16 cursor-pointer "
      onClick={() => setSelectedMenu(item.data)}
    >
      {item.element}
    </motion.div>
  );
};

export default DndSidebar;
