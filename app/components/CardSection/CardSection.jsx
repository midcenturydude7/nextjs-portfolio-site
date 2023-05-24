import Image from "next/image";
import Link from "next/link";

import "./styles/CardSection.module.css";

const CardSection = () => {
  return (
    <section className="section">
      <div class="section-box_container">
        <div class="section-box">
          <div class="box-banner">nextjs</div>
          <Image
            src="/../public/assets/images/port4.jpg"
            alt="Stock photo"
            width={300}
            height={300}
            className="box-image"
          />
          <div class="box-text">
            <h2 className="box-text-title">
              <Link href="#" className="box-text-link">
                Ecommerce Website
              </Link>
            </h2>
            <p className="box-text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur asperiores, quos expedita, ullam debitis soluta nobis
              dolorem excepturi et aut?...
              <span className="box-text-content-link">
                <Link href="#" className="box-text-link">
                  Read more 🡆
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div class="section-box">
          <div class="box-banner">mern</div>
          <Image
            src="/../public/assets/images/port5.jpg"
            alt="Stock photo"
            width={300}
            height={300}
            className="box-image"
          />
          <div class="box-text">
            <h2 className="box-text-title">
              <Link href="#" className="box-text-link">
                MERN Dashboard
              </Link>
            </h2>
            <p className="box-text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur asperiores, quos expedita, ullam debitis soluta nobis
              dolorem excepturi et aut?...
              <span className="box-text-content-link">
                <Link href="#" className="box-text-link">
                  Read more 🡆
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
