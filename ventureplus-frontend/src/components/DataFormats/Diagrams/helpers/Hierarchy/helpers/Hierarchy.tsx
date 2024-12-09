import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

interface Employee {
  name: string;
  designation: string;
  report_to: string | null;
  children?: Employee[];
}

interface HierarchyDiagramProps {
  setNodes: React.Dispatch<React.SetStateAction<any[]>>;
  setEdges: React.Dispatch<React.SetStateAction<any[]>>;
  nodes: any[];
  edges: any[];
  onNodesChange: (changes: any[]) => void;
  onEdgesChange: (changes: any[]) => void;
  onConnect: (connection: any) => void;
  nodeTypes: any;
  isHorizontal: boolean;
  setIsHorizontal: React.Dispatch<React.SetStateAction<boolean>>;
  data: Employee[];
}

const HierarchyDiagram: React.FC<HierarchyDiagramProps> = ({
  setNodes,
  setEdges,
  nodes,
  edges,
  data,
  onNodesChange,
  onEdgesChange,
  onConnect,
  nodeTypes,
  isHorizontal,
  setIsHorizontal,
}) => {
  const NODE_WIDTH = 250; // Node width
  const NODE_SPACING = 40; // Spacing between nodes
  const LEVEL_SPACING = 200; // Spacing between levels

  const buildTree = (array: Employee[]): Employee[] => {
    const map = new Map<string, Employee>();
    array.forEach((employee) => {
      employee.children = [];
      map.set(employee.name, employee);
    });

    const tree: Employee[] = [];
    array.forEach((employee) => {
      if (employee.report_to) {
        const parent = map.get(employee.report_to);
        if (parent) {
          parent.children!.push(employee);
        }
      } else {
        tree.push(employee);
      }
    });

    return tree;
  };

  const calculateHorizontalNodePositions = (
    tree: Employee[],
    levelSpacing: number,
    nodeWidth: number,
    nodeSpacing: number
  ) => {
    let nodes: any[] = [];
    let edges: any[] = [];
    let x = 0; // Horizontal position for the parent nodes
    let y = 0; // Vertical position for the nodes

    const positionNodes = (node: Employee, x: number, y: number) => {
      const nodeId = `node-${node.name}`;
      nodes.push({
        id: nodeId,
        type: "output",
        position: { x, y },
        data: {
          userName: node.name,
          userPosition: node.designation,
        },
        style: {
          padding: 0,
          background: "transparent",
          border: "0",
          width: nodeWidth,
        },
      });

      if (node.children && node.children.length > 0) {
        let childYOffset = y; // Start vertical offset for child nodes

        node.children.forEach((child) => {
          edges.push({
            id: `edge-${nodeId}-${child.name}`,
            source: nodeId,
            target: `node-${child.name}`,
          });

          // Position each child node to the right and vertically stacked below the previous one
          positionNodes(child, x + nodeWidth + nodeSpacing, childYOffset);

          childYOffset += levelSpacing; // Increment Y offset for the next child node
        });
      }
    };

    tree.forEach((rootNode) => {
      positionNodes(rootNode, x, y); // Start positioning from the top-left corner
      y += levelSpacing; // Increment Y offset for the next root node if there are multiple roots
    });

    return { nodes, edges };
  };

  const calculateVerticalNodePositions = (
    tree: Employee[],
    levelSpacing: number,
    nodeWidth: number,
    nodeSpacing: number
  ) => {
    let nodes: any[] = [];
    let edges: any[] = [];
    let currentLevel: Employee[] = [...tree];
    let y = 0; // Vertical position
    let nodeOffset = nodeWidth + nodeSpacing; // Total width of a node including spacing

    while (currentLevel.length > 0) {
      let newLevel: Employee[] = [];
      let xOffset = 0; // Start X offset for current level
      let totalWidth = (currentLevel.length - 1) * nodeOffset;

      // Position nodes
      currentLevel.forEach((node, index) => {
        const nodeId = `node-${node.name}`;
        nodes.push({
          id: nodeId,
          type: "output",
          position: { x: xOffset - totalWidth / 2, y },
          data: {
            userName: node.name,
            userPosition: node.designation,
          },
          style: {
            padding: 0,
            background: "transparent",
            border: "0",
            width: nodeWidth,
          },
        });

        if (node.children && node.children.length > 0) {
          newLevel.push(...node.children);

          node.children.forEach((child) => {
            edges.push({
              id: `edge-${nodeId}-${child.name}`,
              source: nodeId,
              target: `node-${child.name}`,
            });
          });
        }

        xOffset += nodeOffset; // Increment X offset for the next node
      });

      y += levelSpacing;
      currentLevel = newLevel;
    }

    return { nodes, edges };
  };

  useEffect(() => {
    const tree = buildTree(data);
    const { nodes, edges } = isHorizontal
      ? calculateHorizontalNodePositions(tree, 150, NODE_WIDTH, NODE_SPACING)
      : calculateVerticalNodePositions(
          tree,
          LEVEL_SPACING,
          NODE_WIDTH,
          NODE_SPACING
        );
    setNodes(nodes);
    setEdges(edges);
  }, [data, isHorizontal]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[20px]">
        <div
          style={{
            width: "100%",
            height: "500px",
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          />
        </div>
      </div>
    </div>
  );
};

export default HierarchyDiagram;
