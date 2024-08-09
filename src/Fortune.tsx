// src/Fortune.tsx
import React, { useState } from "react";
import { fortunes, Fortune as FortuneType } from "./data";
import './App.css';

const Fortune: React.FC = () => {
    const [fortune, setFortune] = useState<FortuneType | null>(null);
    
    const drawFortune = () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        setFortune(fortunes[randomIndex]);
    };
    
    const resetFortune = () => {
        setFortune(null);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>メンターガチャ</h1>
        <button onClick={drawFortune}>ガチャを引く</button>
        {fortune && (
            <div style={{ marginTop: "20px" }}>
            <img src={fortune.image} alt={fortune.name} style={{ width: "200px" }} />
            <h2>{fortune.name}</h2>
            <p>{fortune.message}</p>
            <button onClick={resetFortune} style={{ marginTop: "10px" }}>
                リセット
            </button>
            </div>
        )}
        </div>
    );
};

export default Fortune;
