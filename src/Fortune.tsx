// src/Fortune.tsx
import React, { useState } from "react";
import { fortunes, Fortune as FortuneType } from "./data";
import './App.css';


const Fortune: React.FC = () => {
    const [fortune, setFortune] = useState<FortuneType | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const drawFortune = () => {
        setIsLoading(true);
        setTimeout(() => {
        const randomValue = Math.random();

        let selectedFortune: FortuneType;
        if (randomValue < 0.1) {
            // Sランクの中からランダムに選ぶ
            selectedFortune = fortunes.filter(f => f.rank === "S")[Math.floor(Math.random() * fortunes.filter(f => f.rank === "S").length)];
        } else if (randomValue < 0.3) {
            // Aランクの中からランダムに選ぶ
            selectedFortune = fortunes.filter(f => f.rank === "A")[Math.floor(Math.random() * fortunes.filter(f => f.rank === "A").length)];
        } else {
            // Bランクの中からランダムに選ぶ
            selectedFortune = fortunes.filter(f => f.rank === "B")[Math.floor(Math.random() * fortunes.filter(f => f.rank === "B").length)];
        }

        setFortune(selectedFortune);
        setIsLoading(false);
     }, 2000);
    };
    
    const resetFortune = () => {
        setFortune(null);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>メンターガチャ</h1>
        {!isLoading &&  <button onClick={drawFortune}>ガチャを引く</button>}
        {isLoading ? (
            <img src="./images/dummy.gif" alt="loading" style={{ width: "200px", marginTop: "20px" }} />
        ) : (
            fortune && (
                    <div style={{ marginTop: "20px" }}>
                        {/* <img src={fortune.image} alt={fortune.name} style={{ width: "200px" }} /> */}
                        <p>src={fortune.name}</p>
                        <p>src={fortune.rank}</p>
                        <button onClick={resetFortune} style={{ marginTop: "10px" }}>
                            リセット
                        </button>
                    </div>
                )
            )}
        </div>
    );
};

export default Fortune;
