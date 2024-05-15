import React from "react";
import logo from "@/assets/images/footer__logo.svg";
import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import tikTok from "@/assets/images/tik-tok.webp";
import "@/sass/components/footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <Image src={logo} alt="Footer Logo" />
        <p style={{ width: "185px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="wrapper">
        <h2>Contact Us</h2>
        <p>E:info@example.com</p>
        <p>P:+94 7670000000</p>
        <p>A:123 Hospital rd, Kalubowila, Dehiwela</p>
      </div>
      <div className="wrapper">
        <h2>Useful links </h2>
        <p>Shop All</p>
        <p>Tempered Glass </p>
        <p>Back-cover</p>
        <p>About Us</p>
      </div>
      <div className="wrapper last">
        <div className="icons whatsapp">
          <div className="icon">
            <FaWhatsapp />
          </div>
          <h3>Whatsapp</h3>
        </div>
        <div className="icons">
          <div className="icon">
            <FaFacebookF />
          </div>
          <h3>Facebook</h3>
        </div>
        <div className="icons">
          <div className="icon">
            <FaInstagram />
          </div>
          <h3>Instagram</h3>
        </div>
        <div className="icons">
          {" "}
          <Image src={tikTok} width={40} />
          <h3>TikTok</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
