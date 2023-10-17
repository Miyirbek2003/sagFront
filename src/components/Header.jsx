import logo from "../assets/logo.png";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <header>
      {window.location.pathname != "/" && (
        <button className="back" onClick={() => window.history.back()}>
          <BiArrowBack />
        </button>
      )}
      <img onClick={() => navigate("/")} src={logo} alt="" />
    </header>
  );
}
