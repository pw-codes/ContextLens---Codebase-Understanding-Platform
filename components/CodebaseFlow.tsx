"use client";
import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "1", data: { label: "index.html" }, position: { x: 50, y: 50 } },
  { id: "2", data: { label: "script.js" }, position: { x: 300, y: 50 } },
  { id: "3", data: { label: "styles.css" }, position: { x: 300, y: 200 } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3" },
];

export default function CodebaseFlow() {
  return (
    <ReactFlow nodes={nodes} edges={edges} fitView>
      <Background />
      <Controls />
    </ReactFlow>
  );
}
