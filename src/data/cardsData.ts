import OnlineImg from "../assets/online.png";
import CancerImg from "../assets/cancer.png";
import EmergeImg from "../assets/emerge.png";
import data from "./usersData.json";

export const cardsData = [
  { title: "Онлайн-прием", text: "Рыба текст", src: OnlineImg },
  { title: "Экстренный Cлучай", text: "Рыба текст", src: EmergeImg },
  { title: "Лечение рака", text: "Рыба текст", src: CancerImg },
];

export const usersData = new Promise((resolve) => resolve(data));
