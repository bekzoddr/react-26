import React, { memo } from "react";
import Image from "next/image";
import { Container } from "@mui/material";
import "@/sass/pages/home.scss";
import image from "@/assets/images/herologo.svg";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <Container maxWidth="xl">
      <div className="hero">
        <div className="title">
          <h1>
            Mobile <br />
            <span>Backcover</span>
            <br />
            <span>Tempered Glass</span>
          </h1>
          <Button variant="contained">Shop all !</Button>
        </div>
        <Image src={image} alt="logo" />
      </div>
    </Container>
  );
};

export default memo(Hero);
