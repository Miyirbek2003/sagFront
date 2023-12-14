import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import {
  BsInstagram,
  BsTwitter,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          {" "}
          <a href="https://www.google.com/maps/place/SAG+carpets/@42.4684891,59.6001981,534m/data=!3m2!1e3!4b1!4m6!3m5!1s0x41dd9bc800f6333d:0x836fec460271375b!8m2!3d42.4684852!4d59.602773!16s%2Fg%2F11pkfnnmdl!5m1!1e4?entry=ttu">
            <span>
              <SlLocationPin color={'white'} />
            </span>{" "}
            <u>г.Нукус ул.Е.Алакоз 171/2 Ориентир: Поликлиника №3</u>
          </a>
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
          <a className="gmail" href="mailto: saggilamlari@mail.com">saggilamlari@gmail.com</a>
        </p>
        <div className="social">
          <div>
            <a href="https://www.facebook.com/p/SAG-Nukus-100083742390947/">
              <BiLogoFacebook color="white" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/sag.nukus/">
              <BsInstagram color="white" />
            </a>
          </div>
          <div>
            <a href="https://t.me/SAG_NUKUS_GILEMLERI">
              <BiLogoTelegram color="white" />
            </a>
          </div>
          <div>
            <BsWhatsapp />{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
