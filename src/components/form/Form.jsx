import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import image from "@/assets/images/form-image.svg";
import Container from "@mui/icons-material";
const Form = () => {
  return (
    <Container maxWidth="xl">
      <div className="form">
        <div className="form__title">
          <h1>
            Shop Premium <br /> Tempered Glass in wholesale Price !
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.  LKR : 299
          </p>
          <br />
          <Button variant="contained">Shop Tempered Glass </Button>
        </div>
        <Image src={image} />
      </div>
    </Container>
  );
};

export default Form;
