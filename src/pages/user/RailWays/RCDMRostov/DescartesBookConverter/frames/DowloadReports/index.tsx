import { FC, useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { descartesBook1CalculatingPrice as book1CalculatingPrice } from "src/core/CONSTS";

import {
  getFileValidationError as getFileValidationErrorSelector,
  getIsKilometersSheetCalculated as getIsKilometersSheetCalculatedSelector,
  getIsRetreatsSheetCalculated as getIsRetreatsSheetCalculatedSelector,
  getKilometers as getKilometersSelector,
  getSecondDegrees as getSecondDegreesSelector,
  getThirdDegrees as getThirdDegreesSelector,
  getFourthDegrees as getFourthDegreesSelector,
  getKilometersSheet as getKilometersSheetSelector,
  getRetreatsSheet as getRetreatsSheetSelector,
} from "src/state/redux/features/RCDMRostov/DescartesBookConverter/selectors";
import { setKilometersSheet as setKilometersSheetAC, setRetreatsSheet as setRetreatsSheetAC } from "src/state/redux/features/RCDMRostov/DescartesBookConverter/actionCreators";
import { setCoins as setCoinsAC } from "src/state/redux/features/user/actionCreators";
import { sheetKilometers as calculateSheetKilometers, sheetRetreats as calculateSheetRetreats } from "../../helpers/reportsCalculating/book";
import { createAndUploadWorkBook2Sheets } from "src/library/helpers/xlsx";

import ErrorMessage from "src/library/components/ErrorMessage";
import ReportItem from "./frames/ReportItem";

import telegramPicture from "src/library/images/common/telegram.png";

import { IReturnedObj as IReturnedObjBook } from "../../helpers/reportsCalculating/book";

import st from "./index.module.scss";

export type TReportNames = "book";

const DownloadReports: FC = () => {
  const kilmetersFromUploadedTemplate = useSelector(getKilometersSelector);
  const secondDegreesFromUploadedTemplate = useSelector(getSecondDegreesSelector);
  const thirdDegreesFromUploadedTemplate = useSelector(getThirdDegreesSelector);
  const fourthDegreesFromUploadedTemplate = useSelector(getFourthDegreesSelector);
  const isKilometersSheetCalculated = useSelector(getIsKilometersSheetCalculatedSelector);
  const isRetreatsSheetCalculated = useSelector(getIsRetreatsSheetCalculatedSelector);
  const fileValidationErrors = useSelector(getFileValidationErrorSelector);

  const kilometersSheetAoA = useSelector(getKilometersSheetSelector);
  const retreatsSheetAoA = useSelector(getRetreatsSheetSelector);

  const dispatch = useDispatch();

  const isCalculated = isKilometersSheetCalculated && isRetreatsSheetCalculated;

  const retreatsForAoAConverter = useMemo(() => {
    return [...secondDegreesFromUploadedTemplate, ...thirdDegreesFromUploadedTemplate, ...fourthDegreesFromUploadedTemplate];
  }, [secondDegreesFromUploadedTemplate, thirdDegreesFromUploadedTemplate, fourthDegreesFromUploadedTemplate]);

  const onAcceptButtonClickHandler = async (reportName: TReportNames) => {
    /* спишем с пользователя коины */
    if (reportName === "book") {
      const kilometersSheetReportData: IReturnedObjBook = calculateSheetKilometers(kilmetersFromUploadedTemplate);
      const retreatsSheetReportData: IReturnedObjBook = calculateSheetRetreats(retreatsForAoAConverter);
      dispatch(setKilometersSheetAC(kilometersSheetReportData.forXLSXAoA));
      dispatch(setRetreatsSheetAC(retreatsSheetReportData.forXLSXAoA));
      dispatch(setCoinsAC(100));
    }
  };

  const onDownloadButtonClickHandler = (reportName: TReportNames) => {
    if (reportName === "book") {
      createAndUploadWorkBook2Sheets(kilometersSheetAoA, retreatsSheetAoA, "Декарт Книга1.xlsx", "Оценка Км", "Отступления");
    }
  };

  if (!kilmetersFromUploadedTemplate.length && !fileValidationErrors.length) {
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
          <ReportItem title="Книга1" price={book1CalculatingPrice} picture={telegramPicture} isCalculated={isCalculated} onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("book")} onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("book")} />
          <span className={st.reports__line} />
        </div>
      </article>
    );
  }
};

export default DownloadReports;
