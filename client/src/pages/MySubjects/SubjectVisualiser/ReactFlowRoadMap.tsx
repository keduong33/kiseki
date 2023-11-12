import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import type { SubTopic, Topic } from "../../../../types/Subject/Subject";
import { createEdges, createNodes } from "./Node";

import dagre from "@dagrejs/dagre";

type RoadMapProps = {
  topic: Topic;
  subtopics: SubTopic[];
};

const ReactFlowRoadMap = ({ topic, subtopics }: RoadMapProps) => {
  const nodes = createNodes(topic, subtopics);
  const edges = createEdges(topic, subtopics);

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 172;
  const nodeHeight = 36;

  dagreGraph.setGraph({ rankdir: "TB" });
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return (
    <div className={`flex w-full  h-[calc(100vh-230px)] border mx-auto`}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
};

export default ReactFlowRoadMap;
