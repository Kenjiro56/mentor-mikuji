// src/Fortune.tsx
import React, { useState } from "react";
import { fortunes, Fortune as FortuneType } from "./data";
import './App.css';

const Fortune: React.FC = () => {
    const [fortune, setFortune] = useState<FortuneType | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // SEを再生するための関数
    const playSound = () => {
        const audio = new Audio("./sounds/dramroll.mp3");
        audio.play();
    };
    
    const drawFortune = () => {
        setIsLoading(true);
        playSound();
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
        }, 3000);
    };  
    
    const resetFortune = () => {
        setFortune(null);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
        {fortune == null && <h1>メンターガチャ</h1>}
        {fortune == null && !isLoading &&  <button onClick={drawFortune}>ガチャを引く</button>}
        {isLoading ? (
            <img src="./images/gacha.gif" alt="loading" style={{ width: "400px", marginTop: "20px" }} />
        ) : (
            fortune && (
                    <div style={{ marginTop: "20px" }}>
                        <img src={fortune.image} alt={fortune.name} style={{ width: "400px" }} />
                        <div style={{ marginTop: "10px"}}>
                            <a
                                href={fortune.image}
                                download={fortune.name + ".jpg"}
                                style={{ textDecoration: "none" }}
                            >
                                <button style={{ width: "300px"  }}>画像を保存</button>
                            </a>
                        </div>
                        <button onClick={resetFortune} style={{ marginTop: "10px", width: "300px" }}>
                            もう一度引く
                        </button>
                    </div>
                )
            )}
        </div>
    );
};

export default Fortune;
