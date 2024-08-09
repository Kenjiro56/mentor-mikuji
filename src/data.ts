// src/data.ts

export interface Fortune {
    name: string;
    message: string;
    image: string;
  }
  
  export const fortunes: Fortune[] = [
    {
      name: "じろけん",
      message: "今日は素晴らしい一日になるでしょう！",
      image: "/images/jiroken.jpg"
    },
    {
      name: "かわすけ",
      message: "おじさんっていうな！",
      image: "/images/jiroken.jpg"
    }
  ];
  