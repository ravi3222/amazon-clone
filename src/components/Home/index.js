import React from "react";
import Product from "../Product";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TruthSeekersS1/TSKR_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB418070590_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          {/* Product */}
          <Product
            title="The Lean Startup"
            price={7.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            title="New Apple iPhone 12 Pro (512GB, Pacific Blue)"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
          <Product
            title="MURENKING Double Hooks Stand Mixer Professional, MK37 500W 5-Qt Bowl 6-Speed Tilt (Silver Blue)"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/613WVJ2bpGL._AC_SL1001_.jpg"
            rating={5}
          />
          <Product
            title="HiTune Wireless Earbuds, Bluetooth Earbuds with Microphone, aptX HiFi Stereo in-Ear Headphones, CVC 8.0 Noise Cancelling Clear Calls, 27h Playtime, Touch Control, USB-C Quick Charge, Waterproof"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61kFCbVws2L._AC_SL1500_.jpg"
            rating={5}
            //           title="Intellilens® Premium Blue Cut Zero Power Navigator Spectacles with Anti-glare for Eye Protection from UV"
            // price={29.99}
            // image="https://images-na.ssl-images-amazon.com/images/I/615UpnTkrJL._UL1500_.jpg"
            // rating={5}
          />
          <Product
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Silver (4th Generation)"
            price={1449.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
            price={278.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
