import { FC } from "react";
import { useSelector } from "react-redux";

import st from "./index.module.scss";

const UploadFact: FC = () => {
  return (
    <article className={st.uploadFact}>
      <h3>А знаете ли Вы, что ...</h3>
      <p>{"Скоро здесь будет что-то интересное"}</p>
    </article>
  );
};

export default UploadFact;
