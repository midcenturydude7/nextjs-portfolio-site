import Card from "../Card/Card";

import style from "./styles/CardSection.module.css";

const CardSection = ({ handlePointerOver, handlePointerOut, isNavOpen }) => {
  return (
    <section
      className={isNavOpen ? style["section-mobile"] : style.section}
      onPointerEnter={handlePointerOver}
      onPointerLeave={handlePointerOut}>
      <div className={style["section-box_container"]}>
        <Card
          banner="nextjs"
          title="Ecommerce Website"
          image="/assets/images/port4.jpg"
        />
        <Card
          banner="mern"
          title="Mern Dashboard"
          image="/assets/images/port7.jpg"
        />
      </div>
    </section>
  );
};

export default CardSection;
