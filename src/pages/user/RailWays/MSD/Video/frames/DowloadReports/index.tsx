import { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getRetreats as getRetreatsSelector,
  getData as getDataSelector,
  getCumulativeGaps as getCumulativeGapsSelector,
  getCheckedDistances as getCheckedDistancesSelector,
  getFileValidationError as getFileValidationErrorSelector,
  getMainTelegramData as getMainTelegramDataSelector,
  getGapOrders as getGapOrdersSelector,
  getVSPretreats as getVSPretreatsSelector,
  getDistancesRetreats as getDistancesRetreatsSelector,
  getGapsControl as getGapsControlSelector,
  getMovements as getMovementsSelector,
} from "src/state/redux/features/video/selectors";
import { setMainTelegramData as setMainTelegramDataAC, setGapOrders as setGapOrdersAC, setVSPretreats as setVSPretreatsAC, setDistancesRetreats as setDistancesRetreatsAC, setGapsControl as setGapsControlAC, setMovements as setMovementsAC } from "src/state/redux/features/video/actionCreators";
import { setCoins as setCoinsAC } from "src/state/redux/features/user/actionCreators";
import { mainTelegram as calculateMainTelegram } from "../../helpers/reportsCalculating/mainTelegram";
import { gapOrders as calculateGapOrders } from "../../helpers/reportsCalculating/gapOrders";
import { VSPretreats as calculateVSPretreats } from "../../helpers/reportsCalculating/VSPretreats";
import { distancesRetreats as calculateDistancesRetreats } from "../../helpers/reportsCalculating/distancesRetreats";
import { gapsControl as calculateGapsControl } from "../../helpers/reportsCalculating/gapsControl";
import { movements as calculateMovements } from "../../helpers/reportsCalculating/movements";
import { createAndUploadWorkBook } from "src/library/helpers/xlsx";

import ErrorMessage from "src/library/components/ErrorMessage";
import ReportItem from "./frames/ReportItem";

import telegramPicture from "src/library/images/common/telegram.png";

import { IReturnedObj as IReturnedObjMainTelegram } from "../../helpers/reportsCalculating/mainTelegram";
import { IReturnedObj as IReturnedObjGapOrders } from "../../helpers/reportsCalculating/gapOrders";
import { IReturnedObj as IReturnedObjVSPretreats } from "../../helpers/reportsCalculating/VSPretreats";
import { IReturnedObj as IReturnedObjDistancesRetreats } from "../../helpers/reportsCalculating/distancesRetreats";
import { IReturnedObj as IReturnedObjGapsControl } from "../../helpers/reportsCalculating/gapsControl";
import { IReturnedObj as IReturnedObjMovements } from "../../helpers/reportsCalculating/movements";

import st from "./index.module.scss";

export type TReportNames = "mainTelegram" | "gapOrders" | "VSPretreats" | "distancesRetreats" | "gapsControl" | "movements";

const DownloadReports: FC = () => {
  const retreats = useSelector(getRetreatsSelector);
  const data = useSelector(getDataSelector);
  const cumulativeGaps = useSelector(getCumulativeGapsSelector);
  const checkedDistances = useSelector(getCheckedDistancesSelector);
  const mainTelegramData = useSelector(getMainTelegramDataSelector);
  const gapOrders = useSelector(getGapOrdersSelector);
  const VSPretreats = useSelector(getVSPretreatsSelector);
  const distancesRetreats = useSelector(getDistancesRetreatsSelector);
  const gapsControl = useSelector(getGapsControlSelector);
  const movements = useSelector(getMovementsSelector);

  const fileValidationErrors = useSelector(getFileValidationErrorSelector);

  const dispatch = useDispatch();

  const onAcceptButtonClickHandler = async (reportName: TReportNames) => {
    /* ???????????? ?? ???????????????????????? ?????????? */
    if (reportName === "mainTelegram") {
      /*  ???????????????????????? ???????????? ?????? ???????????????? ???????????????????? */
      const reportData: IReturnedObjMainTelegram = calculateMainTelegram(data, retreats);

      dispatch(setMainTelegramDataAC({ ...reportData, isCalculated: true }));
      dispatch(setCoinsAC(100));
    } else if (reportName === "gapOrders") {
      /*  ???????????????????????? ???????????? ?????? ?????????????????????? ???? ?????????????? */
      const reportData: IReturnedObjGapOrders = calculateGapOrders(data, retreats);

      dispatch(setGapOrdersAC({ ...reportData, isCalculated: true }));
      dispatch(setCoinsAC(100));
    } else if (reportName === "VSPretreats") {
      /*  ???????????????????????? ???????????? ?????? ?????????????????? ?????? */
      const reportData: IReturnedObjVSPretreats = calculateVSPretreats(data, retreats);

      dispatch(setVSPretreatsAC({ ...reportData, isCalculated: true }));
      dispatch(setCoinsAC(100));
    } else if (reportName === "distancesRetreats") {
      /*  ???????????????????????? ???????????? ?????? ?????????????????? ???? ???? */
      const reportData: IReturnedObjDistancesRetreats = calculateDistancesRetreats(data, retreats, checkedDistances);

      dispatch(setDistancesRetreatsAC({ ...reportData, isCalculated: true }));
      dispatch(setCoinsAC(100));
    } else if (reportName === "gapsControl") {
      /*  ???????????????????????? ???????????? ?????? ???????????????? ?????????????? */
      const reportData: IReturnedObjGapsControl = calculateGapsControl(retreats, cumulativeGaps);

      dispatch(setGapsControlAC({ ...reportData, isCalculated: true }));
      dispatch(setCoinsAC(100));
    } else if (reportName === "movements") {
      /*  ???????????????????????? ???????????? ?????? ???????????????? ?????????????? */
      const reportData: IReturnedObjMovements = calculateMovements(data, retreats);

      dispatch(setMovementsAC({ ...reportData, isCalculated: true }));
      dispatch(setCoinsAC(100));
    }
  };

  const onDownloadButtonClickHandler = (reportName: TReportNames) => {
    if (reportName === "mainTelegram") {
      createAndUploadWorkBook(mainTelegramData.forXLSXAoA, "?????????? ???????????????? ????????????????????.xlsx", "??????????????");
    } else if (reportName === "gapOrders") {
      createAndUploadWorkBook(gapOrders.forXLSXAoA, "????????. 1 ???????????????? ?????????????? ?????? ?????????????????????? ???? ??????????????.xlsx", "??????????????");
    } else if (reportName === "VSPretreats") {
      createAndUploadWorkBook(VSPretreats.forXLSXAoA, "???????????????????? 2 ?????????????????? ?????????? ???????????????????????????? ??????.xlsx", "??????????????");
    } else if (reportName === "distancesRetreats") {
      createAndUploadWorkBook(distancesRetreats.forXLSXAoA, "???????????????????? 3 ?????????????????? ?? ???????????????????? ???????????????????? ?????????????????????? ???? ????.xlsx", "??????????????");
    } else if (reportName === "gapsControl") {
      createAndUploadWorkBook(gapsControl.forXLSXAoA, "???????????????????? 1?? ???????????????? ??????????????.xlsx", "??????????????");
    } else if (reportName === "movements") {
      createAndUploadWorkBook(movements.forXLSXAoA, "???????????????????? 5 ?????????????????? ???????????????? ????????????.xlsx", "??????????????");
    }
  };

  if (!retreats.length && !fileValidationErrors.length) {
    return <ErrorMessage text='???????????? ???? ??????????????????, ?????????? ?????????????????? ???????????? ?????????????? ???????????? "?????????????????? ????????-????????????"' />;
  } else if (!!fileValidationErrors.length) {
    return (
      <article className={st.reports}>
        <div className={st.wrapper}>
          <h2>?? ???????????????? ???????????????? ?????????? ???????????????? ????????????:</h2>
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
          <h2>?????????????????? ????????????</h2>

          <ReportItem title="???????????????? ????????????????????" price={5} picture={telegramPicture} isCalculated={mainTelegramData.isCalculated} onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("mainTelegram")} onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("mainTelegram")} />

          <span className={st.reports__line} />

          <ReportItem title="?????????????????????? ???? ??????????????" price={5} picture={telegramPicture} isCalculated={gapOrders.isCalculated} onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("gapOrders")} onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("gapOrders")} />

          <span className={st.reports__line} />

          <ReportItem title="???????????????? ??????????????" price={5} picture={telegramPicture} isCalculated={gapsControl.isCalculated} onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("gapsControl")} onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("gapsControl")} />

          <span className={st.reports__line} />

          <ReportItem title="?????????????????????????? ??????" price={5} picture={telegramPicture} isCalculated={VSPretreats.isCalculated} onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("VSPretreats")} onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("VSPretreats")} />

          <span className={st.reports__line} />

          <ReportItem title="?????????????????????? ???? ????" price={5} picture={telegramPicture} isCalculated={distancesRetreats.isCalculated} onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("distancesRetreats")} onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("distancesRetreats")} />

          <span className={st.reports__line} />

          <ReportItem title="????????????????" price={5} picture={telegramPicture} isCalculated={movements.isCalculated} onAcceptButtonClickHandler={() => onAcceptButtonClickHandler("movements")} onDownloadButtonClickHandler={() => onDownloadButtonClickHandler("movements")} />
        </div>
      </article>
    );
  }
};

export default DownloadReports;
