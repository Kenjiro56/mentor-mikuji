// src/Fortune.tsx
import React, { useState } from "react";
import { fortunes, Fortune as FortuneType } from "./data";

const Fortune: React.FC = () => {
  const [fortune, setFortune] = useState<FortuneType | null>(null);

  const drawFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>おみくじ</h1>
      <button onClick={drawFortune}>おみくじを引く</button>
      {fortune && (
        <div style={{ marginTop: "20px" }}>
          <img src={fortune.image} alt={fortune.name} style={{ width: "200px" }} />
          <h2>{fortune.name}</h2>
          <p>{fortune.message}</p>
        </div>
      )}
    </div>
  );
};

export default Fortune;
