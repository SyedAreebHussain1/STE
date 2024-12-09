import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ChildMenuItemsI } from "./menuItemsData";
import { motion } from "framer-motion";

interface Props {
  item: ChildMenuItemsI;
}

const DragableMenuItem = ({ item }: Props) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    data: {
      type: "MenuItem",
      item: {
        id: item.id,
        type: item.type,
        data: item.data,
      },
    },
  });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  // if (isDragging) {
  //   return (
  //     <div
  //       ref={setNodeRef}
  //       style={style}
  //       className="w-full h-[80px] border-[1px] border-white bg-white-100 cursor-grab"
  //     >
  //       <div className="text-title">{item.title}</div>
  //     </div>
  //   );
  // }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-info bg-opacity-20 rounded-md p-3 flex gap-1 flex-col items-start hover:bg-opacity-5"
    >
      <div className="flex gap-2 items-center ">
        <img src={item.icon} alt="" className=" !h-5 !w-5" />
        <h1 className="text-[#fff]">{item.title}</h1>
      </div>
      <p className="text-foreground text-xs tracking-tight font-thin">
        {item.description}
      </p>
    </motion.div>
  );
};

export default DragableMenuItem;
