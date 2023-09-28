import logo from "../assets/logo.png";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
export default function Header() {
  const { id } = useParams();
  return (
    <header>
      {id && (
        <button className="back" onClick={() => window.history.back()}>
          <BiArrowBack />
        </button>
      )}
      <img src={logo} alt="" />
    </header>
  );
}
