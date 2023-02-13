import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Product from "@/components/Product";
import EditorsChoice from "@/components/EditorsChoice";
import Article from "@/components/Article";
import ReviewBox from "@/components/ReviewBox";
import Group from "@/components/Group";
import { useEffect, useState } from "react";

const API_URL = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";

export default function Home() {
  const editorsData = {
    editor: "annedean",
    product: {
      name: "Y.O.U Makeups",
      rating: 4.1,
      description: "Rouge Velvet Matte Lip Cream",
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
    },
    role: "Associate Editor",
  };

  return (
    <>
      <div className="">
        {/* <Product /> */}
        <EditorsChoice data={editorsData} />
        {/* <Article />
        <ReviewBox />
        <Group /> */}
      </div>
    </>
  );
}
