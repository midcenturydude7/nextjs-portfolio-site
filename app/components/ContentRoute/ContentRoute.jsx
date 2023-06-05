import style from "./styles/ContentRoute.module.css";

const ContentRoute = ({ title, isNavOpen }) => {
  return (
    <div
      className={
        isNavOpen
          ? style["content-container-mobile"]
          : style["content-container"]
      }>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        sapiente ratione, dolorem maiores consequuntur soluta aspernatur,
        laboriosam similique voluptatum, sint delectus cum quos. Numquam quas
        fugiat architecto sit porro eligendi!
      </p>
    </div>
  );
};

export default ContentRoute;
