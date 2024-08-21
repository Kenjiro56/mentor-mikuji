import React, { useState, useEffect, useCallback } from "react";
import { fortunes, Fortune as FortuneType } from "./data";
import './App.css';

const Fortune: React.FC = () => {
    const [fortune, setFortune] = useState<FortuneType | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // 画像のプリロード
    useEffect(() => {
        const preloadImages = ["/images/gacha.gif", ...fortunes.map(f => f.image)];
        preloadImages.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, []);

    // SEを再生する関数
    const playSound = useCallback(() => {
        const audio = new Audio("/sounds/dramroll.mp3");
        audio.play();
    }, []);

    // ガチャを引く関数
    const drawFortune = useCallback(() => {
        setIsLoading(true);
        playSound();
        setTimeout(() => {
            const randomValue = Math.random();
            const selectedRank = randomValue < 0.1 ? "S" : randomValue < 0.3 ? "A" : "B";
            const selectedFortune = fortunes
                .filter(f => f.rank === selectedRank)
                .sort(() => 0.5 - Math.random())[0];

            setFortune(selectedFortune);
            setIsLoading(false);
        }, 3000);
    }, [playSound]);

    const resetFortune = useCallback(() => {
        setFortune(null);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {fortune == null && !isLoading && (
                <div>
                    <h1>メンターガチャ</h1>
                    <img src="/images/favicon_MG.png" alt="gacha" style={{ width: "400px", display: "block" }} />
                    <button onClick={drawFortune}>ガチャを引く</button>
                </div>
            )}
            {isLoading ? (
                <img src="/images/gacha.gif" alt="loading" style={{ width: "400px", marginTop: "20px" }} />
            ) : (
                fortune && (
                    <div style={{ marginTop: "20px" }}>
                        <img src={fortune.image} alt={fortune.name} style={{ width: "400px" }} />
                        <div style={{ marginTop: "10px" }}>
                            <a
                                href={fortune.image}
                                download={`${fortune.name}.jpg`}
                                style={{ textDecoration: "none" }}
                            >
                                <button style={{ width: "300px" }}>画像を保存</button>
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
