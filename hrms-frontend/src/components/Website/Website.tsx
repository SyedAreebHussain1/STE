import { useCallback, useMemo, useState } from "react";
import AboutUs from "./helpers/AboutUs";
import CreateStructureModal from "./helpers/CreateStructureModal";
import CreateYourStructure from "./helpers/CreateYourStructure";
import Footer from "./helpers/Footer";
import Founders from "./helpers/Founder";
import Header from "./helpers/Header";
import OfferOfServices from "./helpers/OfferOfServices";
import ReadyToWork from "./helpers/ReadyToWork";
import Supporting from "./helpers/Supporting";
import WhatClientSay from "./helpers/WhatClientSay";
import NavBar from "./helpers/navBar";
import "./helpers/websiteStyle.css";
import { CreateYouStructureNode } from "./helpers/CreateYouStructureNode";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";

const Website = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [nodes, setNodes] = useState<any>([]);
  const [edges, setEdges] = useState<any>([]);

  const nodeTypes = useMemo(() => ({ output: CreateYouStructureNode }), []);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds: any) => addEdge(connection, eds)),
    [setEdges]
  );
  const modalTroggle = () => {
    setModalOpen((pre: any) => !pre);
  };
  return (
    <div
      className={`box-border m-0 p-0   scroll-smooth h-full ${
        modalOpen ? "no-scrollbar overflow-y-hidden" : ""
      }`}
    >
      {modalOpen && (
        <CreateStructureModal
          open={modalOpen}
          troggle={modalTroggle}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        />
      )}
      <div className="w-full flex flex-col items-center websiteTopBackgroundColor">
        <div className="w-[1200px] ">
          <NavBar />
          <Header />
          <AboutUs />
        </div>
      </div>
      <div className="w-full flex flex-col items-center websitesecondBackgroundColor rounded-bl-[3.5rem] rounded-br-[3.5rem] pb-[20px] relative z-[6] ">
        <div className="w-[1200px] mt-[66px] ">
          <Founders />
        </div>
      </div>
      <div className="w-full flex flex-col items-center websiteThiredBackgroundColor rounded-bl-[3.5rem] rounded-br-[3.5rem] pb-[20px] relative z-[5]">
        <div className="absolute h-[60px] -top-[60px] bg-[#1e1e1e] w-full"></div>
        <div className="w-[1200px] mt-[60px]">
          <CreateYourStructure
            setNodes={setNodes}
            setEdges={setEdges}
            modalTroggle={modalTroggle}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
          />
          <OfferOfServices />
        </div>
      </div>
      <div className="w-full flex flex-col items-center  serviceProvideforthBackgroundColor rounded-bl-[3.5rem] rounded-br-[3.5rem]  relative z-[4] pb-[120px] ">
        <div className="absolute h-[60px] -top-[60px] w-full bg-[#1e1e1e]"></div>
        <div className="max-w-[1400px] w-full ">
          <div className=" w-full mt-[44px]">
            <ReadyToWork />
          </div>
        </div>
        <div className="w-[1200px] mt-[76px]">
          <WhatClientSay />
        </div>
        <div className="max-w-[1400px] w-full ">
          <div className="w-full mt-[86px]">
            <Supporting />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center  bg-[#1E1E1E]  relative z-[3] pb-[20px] ">
        <div className="absolute h-[60px] -top-[60px] w-full bg-[#1E1E1E]"></div>
        <div className="w-[1200px] mt-[100px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Website;
