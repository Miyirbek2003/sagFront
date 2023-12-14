import home1 from "../../assets/home1.svg";
import home2 from "../../assets/home2.svg";
import home3 from "../../assets/home3.svg";
import home4 from "../../assets/home4.svg";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="home">
      <div className="container">
        <div className="about-title">
          SAG ковры! Отличный выбор для вашего дома и офиса
        </div>
        <div className="home-cards">
          <div className="card" onClick={() => navigate("/category")}>
            <img src={home1} alt="" loading="lazy" />
            <div className="about-title">Каталог</div>
          </div>
          <div className="card" onClick={() => navigate("/feedback")}>
            <img src={home2} alt="" loading="lazy" />
            <div className="about-title">Довольные клиенты</div>
          </div>
          <div className="card" onClick={() => navigate("/addfeedback")}>
            <img src={home3} alt="" loading="lazy" />
            <div className="about-title">Оцените нас</div>
          </div>
          <div className="card" onClick={() => navigate("/about")}>
            <img src={home4} alt="" loading="lazy" />
            <div className="about-title">О нас </div>
          </div>
        </div>
      </div>
    </main>
  );
}
