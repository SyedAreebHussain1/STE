import { Input } from "antd";
import AiIcon from "../../../assets/alprefixIcon.svg";
import CreateWithAiIcon from "../../../assets/createWithAiIcon.svg";
import "reactflow/dist/style.css";
import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import { MdFullscreen } from "react-icons/md";
import axios from "axios";
import { errorMessage, infoMessage } from "../../../utils/message";

const CreateYourStructure = ({
  setNodes,
  setEdges,
  modalTroggle,
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  nodeTypes,
}: any) => {
  const [searchValue, setSearchValue] = useState<any>(null);
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_CHATGPT_API_KEY;

  useEffect(() => {
    if (data) {
      function buildTree(array: any) {
        const map = new Map<any, null>();

        // Initialize the map
        array.forEach((employee: any) => {
          employee.children = [];
          map.set(employee.name, employee);
        });

        const tree: any = [];

        array.forEach((employee: any) => {
          if (employee.report_to) {
            const parent: any = map.get(employee.report_to);
            if (parent) {
              parent.children.push(employee);
            }
          } else {
            tree.push(employee);
          }
        });

        return tree;
      }

      function calculateChildArray(array: any): {
        totalChildren: number;
        maxNestedArrayLength: number;
      } {
        let totalChildren = 0;
        let maxNestedArrayLength = 0;

        for (let i = 0; i < array.length; i++) {
          let childCount = 0;

          if (array[i].children && array[i].children.length > 0) {
            const result = calculateChildArray(array[i].children);
            childCount = result.totalChildren;
            maxNestedArrayLength = Math.max(
              maxNestedArrayLength,
              result.maxNestedArrayLength
            );
          }

          array[i].totalNestedArray = childCount;
          totalChildren += childCount + 1;
          maxNestedArrayLength = Math.max(maxNestedArrayLength, childCount + 1);
        }

        return {
          totalChildren,
          maxNestedArrayLength,
        };
      }

      function transformToNode(
        employee: any,
        position: { x: number; y: number }
      ): any {
        return {
          id: `node-${employee.name}`,
          type: "output",
          position: position,
          data: {
            userName: employee.name,
            userPosition: employee.designation,
          },
          style: {
            padding: 0,
            background: "transparent",
            border: "0",
            width: "max-content",
          },
        };
      }

      function generateNodeAndEdgeData(
        tree: any,
        xOffset: number,
        yOffset: number
      ) {
        let nodes: any[] = [];
        let edges: any[] = [];
        let edgeIdCounter = 1;

        function traverse(
          node: any,
          position: { x: number; y: number },
          parentId: string | null = null
        ) {
          const nodeId = `node-${node.name}`;
          nodes.push(transformToNode(node, position));

          if (parentId) {
            edges.push({
              id: `edge-${edgeIdCounter++}`,
              source: parentId,
              sourceHandle: "a",
              target: nodeId,
            });
          }

          if (node.children) {
            const totalWidth = node.children.reduce(
              (acc: number, child: any) =>
                acc + (child.totalNestedArray || 1) * xOffset,
              0
            );
            let childX = position.x - totalWidth / 2 + xOffset / 2;
            node.children.forEach((child: any) => {
              traverse(child, { x: childX, y: position.y + yOffset }, nodeId);
              childX += (child.totalNestedArray || 1) * xOffset;
            });
          }
        }

        const rootTotalWidth = tree.reduce(
          (acc: number, rootNode: any) =>
            acc + (rootNode.totalNestedArray || 1) * xOffset,
          0
        );
        const startPosition = { x: rootTotalWidth / 2, y: 0 };

        tree.forEach((rootNode: any) => traverse(rootNode, startPosition));

        return { nodes, edges };
      }

      const tree = buildTree(data);
      calculateChildArray(tree);

      const { nodes, edges } = generateNodeAndEdgeData(tree, 300, 200);
      setNodes(nodes);
      setEdges(edges);
    }
  }, [data]);

  ////////////////////////
  const hardcodedValue =
    'Extract names, their designation, and reporting relationships from the provided paragraph and return the data [{name: John Smith, designation: CEO, report_to: null (null if highest level or superior level person name)}] in text form. Sort the elements of the array by higher to lower level designation. For example, if a person is assigned to two different people, include both conditions. Make sure to handle all possible reporting relationships. Always keep this format for the output [{name: "John Smith", designation: "CEO", report_to: null},]';
  const handleGenerateResponse = async (searchValue: any) => {
    const promptText = `${searchValue} ${hardcodedValue}.`;

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: promptText },
          ],
          // max_tokens: 500 // Uncomment and adjust as needed
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const generatedContent = res.data.choices[0].message.content;

      const cleanedStr = generatedContent?.replace(/\n/g, "");
      const arrayData = JSON.parse(cleanedStr.replace(/(\w+):/g, '"$1":'));

      if (arrayData?.length > 0) {
        setData(arrayData);
      }
      return;
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  const apiCall = async () => {
    if (!searchValue) {
      infoMessage("Please Enter Some Prompt");
      return;
    } else {
      handleGenerateResponse(searchValue);
    }
  };

  return (
    <div>
      <span className="text-[2.421rem] text-[#FFFFFF] font-semibold ">
        Create your organization structure
      </span>
      <div className="mt-[10px]">
        <Input
          prefix={
            <img src={AiIcon} alt={"ai icon"} className="pr-[10px] h-[35px]" />
          }
          size="middle"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-[400px] rounded-3xl "
          placeholder="Create with AI"
          onPressEnter={() => {
            apiCall();
          }}
          suffix={
            <div className="bg-[#CCFE06] flex items-center justify-center rounded-full h-full p-[6px] cursor-pointer">
              <img
                src={CreateWithAiIcon}
                alt={"create ai icon"}
                className="w-[28px] h-[28px]"
                onClick={() => {
                  apiCall();
                }}
              />
            </div>
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[20px]">
        <div
          style={{
            width: "100%",
            height: "500px",
            backgroundImage:
              "linear-gradient(to right, #333 1px, transparent 1px) , linear-gradient(to bottom, #333 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView={true}
            // defaultViewport={{
            //   x: 500,
            //   y: 20,
            //   zoom: 0,
            // }}
          >
            <div className="flex w-full h-full items-end justify-end">
              <div
                className="text-white mb-[20px] cursor-pointer z-20"
                onClick={(e) => {
                  e.preventDefault();
                  modalTroggle();
                }}
              >
                <MdFullscreen fontSize={30} />
              </div>
            </div>
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default CreateYourStructure;
