import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  HeaderForPdf,
  ParagraphForPdf,
  TableForPdf,
} from "../../../components/DataFormats/TitleAndText/helpers";
import NumberList from "../../../components/DataFormats/Other/helpers/numberList";
import BulletList from "../../../components/DataFormats/Other/helpers/bulletList";
import ImageList from "../../../components/DataFormats/Other/helpers/imageList";
import SingleImage from "../../../components/DataFormats/Other/helpers/singleImage";
import VennDiagram from "../../../components/DataFormats/Diagrams/helpers/venn";
import OrgChart from "../../../components/DataFormats/Diagrams/helpers/Hierarchy";
import AreaChartComponent from "../../../components/DataFormats/charts/helpers/AreaChart";
import SpiderChartComponent from "../../../components/DataFormats/charts/helpers/SpiderChart";
import PieChartComponent from "../../../components/DataFormats/charts/helpers/PieChart";
import SemiCircleChartComponent from "../../../components/DataFormats/charts/helpers/SemiCircleChart";
import DonutChartComponent from "../../../components/DataFormats/charts/helpers/DonutChart";
import AnimatedOption from "../../../components/DataFormats/ReusableComponents/AnimatedOption";
import useToggle from "../../../hooks/useToggle";
import ParagraphWidthBulletHeading from "../../../components/DataFormats/TitleAndText/helpers/ParagraphWithBulletHeading";
import BarChartComponent from "../../../components/DataFormats/charts/helpers/BarChart";
import { useRef } from "react";

const DndEditorChild = ({
  item,
  pushObject,
  setPushObject,
  index,
  subheadingNumber,
  setSaveChangesDisabled,
}: any) => {
  const [open, toggle] = useToggle();

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
      type: "MenuItemChild",
      item: {
        id: item.id,
        type: item.type,
        data: item.data,
      },
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    height: item.height ? item.height : "100%",
  };

  //This return component does not appear in the document; it only shows when the component is grabbed.
  if (isDragging) {
    return <div className="w-full h-[100px] bg-[#ffffff8a] rounded-2xl"></div>;
  }

  return (
    <div ref={setNodeRef} className={`w-full  border-whitecursor-grab `}>
      <AnimatedOption
        item={item}
        setPushObject={setPushObject}
        allowEdit={item.type == "Sub Title" ? false : true}
        allowDelete={true}
        allowMove={true}
        toggle={toggle}
        {...attributes}
        {...listeners}
        index={index}
      >
        {item.type == "Paragraph" ? (
          <ParagraphForPdf
            index={index}
            apiData={{ id: item.id, data: item.data, type: item?.type }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
            setSaveChangesDisabled={setSaveChangesDisabled}
          />
        ) : item.type == "Sub Title" ? (
          <HeaderForPdf
            index={index}
            apiData={{ id: item.id, data: item.data, type: item.type }}
            setPushObject={setPushObject}
            subheadingNumber={`${subheadingNumber}`}
          />
        ) : item.type == "Table" ? (
          <TableForPdf
            index={index}
            apiData={{ id: item.id, data: item.data, type: item.type }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Numbered List" ? (
          <NumberList
            index={index}
            apiData={{ id: item.id, data: item.data, type: item.type }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Bullet List" ? (
          <BulletList
            index={index}
            apiData={{ id: item.id, data: item.data, type: item.type }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Image List" ? (
          <ImageList
            index={index}
            apiData={{ id: item.id, data: item.data, type: item.type }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Single Image" ? (
          <SingleImage
            index={index}
            apiData={{ id: item.id, data: item.data, type: item.type }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Venn" ? (
          <VennDiagram
            index={index}
            apiData={{ id: item.id, data: item.data, type: item.type }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Hierarchy" ? (
          <OrgChart
            index={index}
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Bar" ? (
          <BarChartComponent
            index={index}
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Area" ? (
          <AreaChartComponent
            index={index}
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Spider" ? (
          <SpiderChartComponent
            index={index}
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Pie" ? (
          <PieChartComponent
            index={index}
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "SemiCircle" ? (
          <SemiCircleChartComponent
            index={index}
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Donut" ? (
          <DonutChartComponent
            index={index}
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
            open={open}
            toggle={toggle}
          />
        ) : item.type == "Paragraph Bullet Heading" ? (
          <ParagraphWidthBulletHeading
            apiData={{ id: item.id, type: item.type, data: item.data }}
            setPushObject={setPushObject}
          />
        ) : null}
      </AnimatedOption>
    </div>
  );
};

export default DndEditorChild;
