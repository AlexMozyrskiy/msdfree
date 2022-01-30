import { FC, useState } from "react";

import Button from "src/library/components/Button";
import WarningPriceModal from "./frames/WarningPriceModal";

import st from "./index.module.scss";

interface IReportItem {
  picture: string;
  title: string;
  price: number;
  isCalculated: boolean;
  onAcceptButtonClickHandler: () => void;
  onDownloadButtonClickHandler: () => void;
}

const ReportItem: FC<IReportItem> = ({ picture, title, price, isCalculated, onAcceptButtonClickHandler, onDownloadButtonClickHandler }) => {
  const [isWarningPriceModalOpen, setIsWarningPriceModalOpen] = useState<boolean>(false);

  return (
    <div className={st.reports__item}>
      <figure>
        <img src={picture} alt={picture} />
      </figure>

      <div className={st.reports__item__title}>
        <div>{isCalculated ? <Button text="Скачать" onCkickHandler={onDownloadButtonClickHandler} backgroundColor="#328E39" /> : <Button text="Сформировать" onCkickHandler={() => setIsWarningPriceModalOpen(true)} />}</div>
        <h4>{title}</h4>
      </div>

      <div className={st.reports__item__info}>
        <span>{price}</span>
        <h4>Стоимость расчета</h4>
      </div>

      {isWarningPriceModalOpen && <WarningPriceModal close={() => setIsWarningPriceModalOpen(false)} onAcceptButtonClickHandler={onAcceptButtonClickHandler} />}
    </div>
  );
};

export default ReportItem;
