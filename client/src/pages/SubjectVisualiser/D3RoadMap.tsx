// import * as d3 from "d3";
// import { useMemo } from "react";
// import type { SubTopic, Topic } from "../../../types/Subject/Subject";

// type RoadMapProps = {
//   topic: Topic;
//   subtopics: SubTopic[];
//   width?: number;
//   height?: number;
// };

// type DisplayData = {
//   name: string;
//   children?: DisplayData[];
// };
// const data: DisplayData = {
//   name: "Topic",
//   children: [
//     {
//       name: "Non-monic Quadratic Trinomial",
//       children: [
//         {
//           name: "Numerical reasoning",
//           children: [{ name: "Non-monic Quadratic Trinomial 2" }],
//         },
//       ],
//     },
//   ],
// };

// const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

// const RoadMap = ({ topic, subtopics }: RoadMapProps) => {
//   const hierarchy = useMemo(() => {
//     return d3.hierarchy(data);
//   }, [data]);

//   const dendrogram = useMemo(() => {
//     const dendrogramGenerator = d3.cluster<DisplayData>().size([200, 300]);
//     return dendrogramGenerator(hierarchy);
//   }, [hierarchy]);

//   const rectSize = {
//     width: 100,
//     height: 50,
//   };

//   const allNodes = dendrogram.descendants().map((node, index) => {
//     return (
//       <g key={"node" + index}>
//         <rect
//           x={node.x}
//           y={node.y}
//           rx={10}
//           width={rectSize.width}
//           height={rectSize.height}
//           stroke="transparent"
//           fill={"#69b3a2"}
//         />

//         <foreignObject
//           x={node.x}
//           y={node.y}
//           width={rectSize.width}
//           height={rectSize.height}
//         >
//           <div className="flex w-full h-full align-middle">
//             <p className="m-auto text-xs">{node.data.name}</p>
//           </div>
//         </foreignObject>
//       </g>
//     );
//   });

//   const allEdges = dendrogram.descendants().map((node, index) => {
//     if (!node.parent) {
//       return null;
//     }
//     return (
//       <line
//         key={"line" + index}
//         fill="none"
//         stroke="grey"
//         x1={node.x + rectSize.width / 2}
//         x2={node.parent.x + rectSize.width / 2}
//         y1={node.y}
//         y2={node.parent.y + rectSize.height}
//       />
//     );
//   });

//   return (
//     <svg
//       className="w-full h-[500px] bg-white"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g
//         // width={200}
//         // height={400}
//         transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
//       >
//         {allNodes}
//         {allEdges}
//       </g>
//     </svg>
//   );
// };

// export default RoadMap;
