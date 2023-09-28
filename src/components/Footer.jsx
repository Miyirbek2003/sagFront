import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import { BsInstagram, BsTwitter, BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          {" "}
          <span>
            <SlLocationPin />
          </span>{" "}
          г.Нукус ул.Е.Алакоз 171/2 Ориентир: Поликлиника №3
        </p>
        <p>
          {" "}
          <span>
            <BsTelephone />
          </span>{" "}
          +99899 561-05-55
        </p>
        <p>
          {" "}
          <span>
            <MdOutlineEmail />
          </span>{" "}
          saggilamlari@gmail.com
        </p>
        <div className="social">
          <div>
            <BiLogoFacebook />
          </div>
          <div>
            <BsInstagram />
          </div>
          <div>
            <BsTwitter />
          </div>
          <div>
            <BiLogoTelegram />
          </div>
        </div>
      </div>
    </footer>
  );
}
