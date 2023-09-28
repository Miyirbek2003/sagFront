import catimg from "../../assets/gilem.png";
import postel from "../../assets/postel.png";
import gazon from "../../assets/gazon.png";
import { useNavigate } from "react-router-dom";
export default function MainC() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container">
        <div className="inner">
          <h1 className="title">Bizning katalog</h1>
          <div className="cards">
            <div
              className="card-item"
              onClick={() => navigate("/category/gilem")}
            >
              <img src={catimg} alt="" />
              <h3>Gilamlar</h3>
            </div>
            <div
              className="card-item"
              onClick={() => navigate("/category/postel")}
            >
              <img src={postel} alt="" />
              <h3>Postellar</h3>
            </div>
            <div
              className="card-item"
              onClick={() => navigate("/category/gazon")}
            >
              <img src={gazon} alt="" />
              <h3>Gazonlar</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
