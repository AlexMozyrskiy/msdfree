import { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getRetreats as getRetreatsSelector, getFileValidationError as getFileValidationErrorSelector, getKilometers as getKilometersSelector, getCargos as getCargosSelector, getFreightTension as getFreightTensionSelector } from "src/state/redux/features/RCDMRostov/FreightTension/selectors";
import { setFreightTension as setFreightTensionAC } from "src/state/redux/features/RCDMRostov/FreightTension/actionCreators";
import { setCoins as setCoinsAC } from "src/state/redux/features/user/actionCreators";
import { freightTension as calculateFreightTension } from "../../helpers/reportsCalculating/freightTension";
import { createAndUploadWorkBook } from "src/library/helpers/xlsx";
import { freightTensionPrice } from "src/core/CONSTS";

import ErrorMessage from "src/library/components/ErrorMessage";
import ReportItem from "./frames/ReportItem";

import telegramPicture from "src/library/images/common/telegram.png";

import { IReturnedObj as IReturnedObjFreightTension } from "../../helpers/reportsCalculating/freightTension";

import st from "./index.module.scss";

export type TReportNames = "freightTension";

const DownloadReports: FC = () => {
  const retreatsFromState = useSelector(getRetreatsSelector);
  const kilmetersFromState = useSelector(getKilometersSelector);
  const cargosFromState = useSelector(getCargosSelector);
  const freightTensionFromState = useSelector(getFreightTensionSelector);

  const fileValidationErrors = useSelector(getFileValidationErrorSelector);

  const dispatch = useDispatch();

  const onAcceptButtonClickHandler = async (reportName: TReportNames) => {
    /* спишем с пользователя коины */
    if (reportName === "freightTension") {
      /*  Формирование данных для основной телеграммы */
      const reportData: IReturnedObjFreightTension = calculateFreightTension(retreatsFromState, kilmetersFromState, cargosFromState);

      dispatch(setFreightTensionAC({ ...reportData, isCalculated: true }));
      dispatch(setCoinsAC(100));
    }
  };

  const onDownloadButtonClickHandler = (reportName: TReportNames) => {
    if (reportName === "freightTension") {
      createAndUploadWorkBook(freightTensionFromState.forXLSXAoA, "Грузонапряженность.xlsx", "Спасибо");
    }
  };

  if (!retreatsFromState.length && !fileValidationErrors.length) {
    return <ErrorMessage text='Данные не загружены, чтобы загрузить данные нажмите кнопку "Загрузить файл-шаблон"' />;
  } else if (!!fileValidationErrors.length) {
    return (
      <article className={st.reports}>
        <div className={st.wrapper}>
          <h2>В процессе загрузки файла возникли ошибки:</h2>
          <div className={st.info}>
            <ul>
              {fileValidationErrors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  } else {
    return (
      <article className={st.reports}>
        <div className={st.wrapper}>
          <h2>Доступные отчеты</h2>

          <ReportItem
            title="Грузонапряженность"
            price={freightTensionPrice}
            picture={telegramPicture}
            isCalculated={freightTensionFromState.isCalculated}
            onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("freightTension")}
            onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("freightTension")}
          />

          <span className={st.reports__line} />
        </div>
      </article>
    );
  }
};

export default DownloadReports;
