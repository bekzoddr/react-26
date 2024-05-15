import { Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import image from "@/assets/images/article.png";
import { infos } from "@/static";
import Form from "../form/Form";
const Section = () => {
  const info = infos?.map((el) => (
    <div key={el.id} className="info">
      <Image src={el.image} />
      <h1>{el.title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  ));
  return (
    <Container maxWidth="xl">
      <section>
        <div className="stock">
          <div></div>
          <p>about us</p>
        </div>
        <br />
        <br />
        <Container maxWidth="lg">
          <h1>
            If you’re looking for a Premium Quality <br />
            Tempered Glass or Back-cover for <br /> your Device
          </h1>
          <br />
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>
          <br />
          <br />
          <Image src={image} />
        </Container>
        <br />
        <br />
        <br />
        <Form />
        <br />
        <br />
        <div className="stock">
          <div></div>
          <br />
          <p>Why Choose US</p>
        </div>
        <br />
        <br />
        <br />
        <div className="informations">{info}</div>
      </section>
    </Container>
  );
};

export default Section;
