import "../styles/Home.css";

import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          //src="https://images-eu.ssl-images-anazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/GW_Hero/Main_Desktop_1500x600_DS._CB404300086_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="01"
            title="All-new Echo Dot"
            price={4499}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/379x304_Desktop_Card_BE_01._SY304_CB404301999_.jpg"
            rating={5}
          />
          <Product
            id="02"
            title="All-new Fire TV stick"
            price={3999}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/02_379x304_Desktop_Card_SP._SY304_CB404302689_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="03"
            title="New Echo Dot with clock"
            price={5499}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/06_379x304_Desktop_Card_GE._SY304_CB404302721_.jpg"
            rating={5}
          />
          <Product
            id="04"
            title="Amazon Smart Plug"
            price={1999}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/07_379x304_Desktop_Card_CR._SY304_CB404302460_.jpg"
            rating={3}
          />
          <Product
            id="05"
            title="Echo Dot (with clock) bundle with Syska 12W LED smart color bulb"
            price={4748}
            image="https://images-na.ssl-images-amazon.com/images/I/51wppfBjF6L._SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="06"
            title="Buy Work from Home Furniture Online at Amazon India"
            price={6500}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350.gif"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
