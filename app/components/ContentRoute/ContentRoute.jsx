import style from "./styles/ContentRoute.module.css";

const ContentRoute = ({ title, isNavOpen, isMobile }) => {
  return (
    <div
      className={
        isNavOpen && isMobile
          ? style["content-container-mobile"]
          : style["content-container"]
      }>
      <h1>{title}</h1>
    </div>
  );
};

export default ContentRoute;
