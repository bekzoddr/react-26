"use client";
import React from "react";
import image from "@/assets/images/card1.svg";
import Image from "next/image";
import { productInfo } from "@/static/index";
import { Container } from "@mui/material";

const Products = ({ numberOfCards }) => {
  const products = productInfo.slice(0, numberOfCards).map((el) => (
    <div key={el.id} className="product__card">
      <div className="card__image">
        <div className="cell">Sale !</div>
        <Image src={el.image} alt={el.title} width={323} height={200} />
      </div>
      <div className="card__body">
        <h4>{el.title}</h4>
      </div>
    </div>
  ));
  return (
    <Container maxWidth="xl">
      <div className="products">{products}</div>
    </Container>
  );
};

export default Products;
