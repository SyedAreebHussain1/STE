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
import BarChartComponent from "../../../components/DataFormats/charts/helpers/BarChart";
import AreaChartComponent from "../../../components/DataFormats/charts/helpers/AreaChart";
import SpiderChartComponent from "../../../components/DataFormats/charts/helpers/SpiderChart";
import PieChartComponent from "../../../components/DataFormats/charts/helpers/PieChart";
import SemiCircleChartComponent from "../../../components/DataFormats/charts/helpers/SemiCircleChart";
import DonutChartComponent from "../../../components/DataFormats/charts/helpers/DonutChart";
import useToggle from "../../../hooks/useToggle";
import ParagraphWidthBulletHeading from "../../../components/DataFormats/TitleAndText/helpers/ParagraphWithBulletHeading";
import PeragraphOnlyForView from "../../../components/DataFormats/TitleAndText/helpers/PeragraphOnlyForView";

const ViewPlanChild = ({
  item,
  subheadingNumber,
  setPushObject,
  index,
  isLastChild,
  pushObject,
  headingNumber,
  heading,
  innerIndex
}: any) => {
  const [open, toggle] = useToggle();
  return (
    <div className={`w-full border-whitecursor-grab printable-component`}>
      {innerIndex == 0 ? <div className=" flex w-full justify-between items-center text-[20px] font-medium p-[0] m-[0] leading-9">
        <div className="flex ">
          <h1>{headingNumber}</h1>
          <div className="flex-1 ml-[20px]">
            <h1 className=" w-full min-h-8 capitalize">{heading}</h1>
          </div>
        </div>
      </div> : null}

      {pushObject?.[index]?.[innerIndex - 1] && pushObject?.[index]?.[innerIndex - 1]?.type == "Sub Title" ? <HeaderForPdf
        index={index}
        apiData={{ id: pushObject?.[index]?.[innerIndex - 1].id, data: pushObject?.[index]?.[innerIndex - 1].data, type: pushObject?.[index]?.[innerIndex - 1].type }}
        setPushObject={setPushObject}
        edit={false}
      /> : null}


      {item.type == "Paragraph" ? (
        <PeragraphOnlyForView
          index={index}
          apiData={{ id: item.id, data: item.data, type: item.type }}
          setPushObject={setPushObject}
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
    </div>
  );
};

export default ViewPlanChild;
