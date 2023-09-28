import isfaxan from "../../assets/isfaxan.png";
import tumari from "../../assets/tumari.png";
import { useNavigate, useParams } from "react-router-dom";
export default function Category() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <main>
      <div className="container">
        <div className="inner">
          <h1 className="title">Bizning podkatalog</h1>
          <div className="cards">
            <div
              className="card-item"
              onClick={() => navigate(`/category/${id}/isfaxan`)}
            >
              <img src={isfaxan} alt="" />
              <h3>Isfaxan</h3>
            </div>
            <div
              className="card-item"
              onClick={() => navigate(`/category/${id}/tumari`)}
            >
              <img src={tumari} alt="" />
              <h3>Tumari</h3>
            </div>
            <div
              className="card-item"
              onClick={() => navigate(`/category/${id}/isfaxan`)}
            >
              <img src={isfaxan} alt="" />
              <h3>Isfaxan</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
