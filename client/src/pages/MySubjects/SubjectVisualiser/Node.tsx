import type { CSSProperties } from "react";
import type { Edge, Node } from "reactflow";
import type { SubTopic, Topic } from "../../../../types/Subject/Subject";

const position = { x: 0, y: 0 };
const edgeType = "smoothstep";
const edgeStyle: CSSProperties = {
  stroke: "gray",
};

export const createNodes = (topic: Topic, subTopics: SubTopic[]): Node[] => {
  const nodes: Node[] = [];

  const parentNode: Node = {
    id: topic,
    position,
    data: {
      label: topic,
    },
    style: {
      color: "black",
      fontWeight: "bold",
      backgroundColor: "yellow",
      border: "1",
    },
    type: "input",
  };

  nodes.push(parentNode);

  subTopics.forEach((subTopic) => {
    const newChildNode: Node = {
      id: subTopic.toString(),
      position,
      data: { label: subTopic },
    };
    nodes.push(newChildNode);
  });

  const lastNode = nodes[nodes.length - 1];

  if (lastNode) lastNode.type = "output";

  return nodes;
};

export const createEdges = (topic: Topic, subTopics: SubTopic[]): Edge[] => {
  const edge: Edge[] = [];
  const subTopicsList = Object.values(subTopics);

  const parentEdge: Edge = {
    id: `${topic}-${subTopicsList[0]}`,
    source: topic,
    target: subTopicsList[0]!.toString(),
    type: edgeType,
    style: edgeStyle,
  };

  edge.push(parentEdge);

  for (let i = 0; i < subTopicsList.length - 1; i += 1) {
    const formerSubTopic = subTopicsList[i]!.toString();
    const laterSubTopic = subTopicsList[i + 1]!.toString();

    const newChildEdge: Edge = {
      id: `${formerSubTopic}-${laterSubTopic}`,
      source: formerSubTopic,
      target: laterSubTopic,
      type: edgeType,
      style: edgeStyle,
    };

    edge.push(newChildEdge);
  }

  return edge;
};
