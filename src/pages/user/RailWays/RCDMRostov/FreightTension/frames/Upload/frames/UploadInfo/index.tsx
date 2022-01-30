import { FC, useMemo } from 'react';

import { useSelector } from 'react-redux';

import {
  getRetreats as getRetreatsSelector,
  getKilometers as getKilometersSelector,
  getFileValidationError as getFileValidationErrorSelector,
} from 'src/state/redux/features/RCDMRostov/FreightTension/selectors';
import { month as monthNames } from 'src/library/helpers/date';

import InfoItem from './frames/InfoItem';
import SuccessMessage from 'src/library/components/SuccessMessage';
import ErrorMessage from 'src/library/components/ErrorMessage';

import infoPicture from 'src/library/images/common/info.png';

import st from './index.module.scss';

interface IUploadInfo {}

const UploadInfo: FC<IUploadInfo> = () => {
  const retreats = useSelector(getRetreatsSelector);
  const kilometers = useSelector(getKilometersSelector);
  const fileValidationErrors = useSelector(getFileValidationErrorSelector);

  /* Месяц проверки string */
  const monthOfCheck = useMemo(() => {
    const monthIndex = retreats[0]?.month - 1;
    return monthNames.verbal.full.ru[monthIndex];
  }, [retreats]);

  const checkedKm = useMemo(() => {
    const totalKm = kilometers.reduce((prevVal, kilometer) => {
      return kilometer.checked + prevVal;
    }, 0);
    return totalKm.toFixed(3);
  }, [kilometers]);

  const retreatsTotalCount = useMemo(() => {
    return retreats.reduce((prevRetreatCount, currentRetreat) => prevRetreatCount + currentRetreat.retreatCount, 0);
  }, [retreats]);

  const retreats2DegreeCount = useMemo(() => {
    const retrerats2Gegree = retreats.filter((retreat) => retreat.retreatDegree === 2);
    return retrerats2Gegree.reduce(
      (prevRetreatCount, currentRetreat) => prevRetreatCount + currentRetreat.retreatCount,
      0
    );
  }, [retreats]);

  const retreats3DegreeCount = useMemo(() => {
    const retrerats3Gegree = retreats.filter((retreat) => retreat.retreatDegree === 3);
    return retrerats3Gegree.reduce(
      (prevRetreatCount, currentRetreat) => prevRetreatCount + currentRetreat.retreatCount,
      0
    );
  }, [retreats]);

  const retreats4DegreeCount = useMemo(() => {
    const retrerats4Gegree = retreats.filter((retreat) => retreat.retreatDegree === 4);
    return retrerats4Gegree.reduce(
      (prevRetreatCount, currentRetreat) => prevRetreatCount + currentRetreat.retreatCount,
      0
    );
  }, [retreats]);

  return (
    <article className={st.uploadInfo}>
      <div className={st.wrapper}>
        <h2>Информация</h2>

        <div className={st.info}>
          <figure>
            <img src={infoPicture} alt='info' />
          </figure>

          <div className={st.info__content}>
            <InfoItem title='Месяц проверки' value={monthOfCheck ?? '--'} isColorRed={false} />

            <InfoItem title='Проверено километров' value={+checkedKm !== 0 ? checkedKm : '--'} isColorRed={false} />

            <InfoItem
              title='Количество отступлений (включая 1 степени)'
              value={retreats.length !== 0 ? retreatsTotalCount : '--'}
              isColorRed={false}
            />

            <InfoItem
              title='Количество отступлений 2-й степени'
              value={+retreats2DegreeCount !== 0 ? retreats2DegreeCount : '--'}
              isColorRed={false}
            />

            <InfoItem
              title='Количество отступлений 3-й степени'
              value={+retreats3DegreeCount !== 0 ? retreats3DegreeCount : '--'}
              isColorRed={false}
            />

            <InfoItem
              title='Количество отступлений 4-й степени'
              value={+retreats4DegreeCount !== 0 ? retreats4DegreeCount : '--'}
              isColorRed={true}
            />
          </div>
        </div>

        <div className={st.wrapper__uploadMessage}>
          {!!retreats.length ? (
            <SuccessMessage text='Данные загружены. Чтобы скачать отчеты перейдите во вкладку "Скачать отчеты"' />
          ) : !!fileValidationErrors.length /* Если есть ошибки валидации файла */ ? (
            <ErrorMessage text='Файл который Вы загрузили не прошел валидацию. Чтобы посмотреть ошибки возникшие при загрузке файла перейдите во вкладку "Скачать отчеты"' />
          ) : (
            <ErrorMessage text='Данные не загружены, чтобы загрузить данные нажмите кнопку "Загрузить файл-шаблон"' />
          )}
        </div>
      </div>
    </article>
  );
};

export default UploadInfo;
