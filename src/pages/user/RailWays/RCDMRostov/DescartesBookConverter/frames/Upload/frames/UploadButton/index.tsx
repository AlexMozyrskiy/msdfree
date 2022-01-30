import { FC, ChangeEvent, useState } from 'react';
import SVG from 'react-inlinesvg';
import { useDispatch } from 'react-redux';
import XLSX from 'xlsx';

import FileValidator from '../../../../helpers/uploadFileValidation';
// import { sheetRetreatsToObj, sheetKilometersToObj, sheetCargosToObj } from '../../../../helpers/xlsxDataToObj';
import {
  setKilometers as setKilometersAC,
  setFileValidationErrors as setFileValidationErrorsAC,
  setFourthDegrees as setFourthDegreesAC,
  setThirdDegrees as setThirdDegreesAC,
  setSecondDegrees as setSecondDegreesAC,
} from 'src/state/redux/features/RCDMRostov/DescartesBookConverter/actionCreators';
import {
  convertFourthDegreesToSheetObj,
  convertPUToSheetObj,
  convertSecondDegreesToSheetObj,
  convertThirdDegreesToSheetObj,
} from '../../../../helpers/xlsxDataToObj';

import Loader from 'src/library/components/Loader';

import uploadIcon from 'src/library/icons/common/upload.svg';

import st from './index.module.scss';

interface IUploadButton {}

const UploadButton: FC<IUploadButton> = () => {
  const dispatch = useDispatch();
  const [isCalculating, setIsCalculating] = useState(false);
  // ------------------------------------ Declare функцию вызывающуюся при загрузке файла ------------------------------------------------
  const onBookSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const templateSheetNames = {
      PU: 'ПУ',
      fourthDegrees: '4ст.',
      thirdDegrees: '3ст.',
      secondDegrees: '2ст.',
      insulatingGaps: 'Просадки ИС',
    };

    let validationErrors: string[] = [];

    /* Обнуление ощибок при попытке вновь загрузить файл */
    dispatch(setFileValidationErrorsAC([]));
    validationErrors = [];

    const selectedFile = e.target.files?.length ? e.target.files[0] : null;

    const fileValidator = new FileValidator();
    if (!fileValidator.isCorrectFileType(selectedFile?.type)) {
      validationErrors = ['Загруженный файл не является файлом Excel'];
      dispatch(setFileValidationErrorsAC(['Загруженный файл не является файлом Excel']));
      (document.getElementById('input') as HTMLInputElement).value = '';
      return;
    }

    if (selectedFile) {
      setIsCalculating(true);

      // если файл был выбран. Эта проверка на тот случай, если пользователь нажал кнопку выбрать файл а потом закрыл окно с выбором файла не выбрав его
      let reader = new FileReader();
      reader.readAsBinaryString(selectedFile);
      reader.onload = function (event: ProgressEvent<FileReader>) {
        const data = event.target?.result;
        const workBook = XLSX.read(data, {
          type: 'binary',
        });

        // /* ---------------- Валидация загруженного файла ------------------ */
        validationErrors = fileValidator.sheetsValidate(workBook.SheetNames);

        if (validationErrors.length) {
          dispatch(setFileValidationErrorsAC(validationErrors));
          setIsCalculating(false);
          return;
        }
        // /* ---------------- / Валидация загруженного файла ------------------ */

        const workSheetKilometersToState = convertPUToSheetObj(workBook.Sheets[templateSheetNames.PU]);
        dispatch(setKilometersAC(workSheetKilometersToState));

        const workSheetFourthDegreesToState = convertFourthDegreesToSheetObj(
          workBook.Sheets[templateSheetNames.fourthDegrees],
          workBook.Sheets[templateSheetNames.insulatingGaps]
        );
        dispatch(setFourthDegreesAC(workSheetFourthDegreesToState));

        const workSheetThirdDegreesToState = convertThirdDegreesToSheetObj(
          workBook.Sheets[templateSheetNames.thirdDegrees],
          workBook.Sheets[templateSheetNames.insulatingGaps]
        );
        dispatch(setThirdDegreesAC(workSheetThirdDegreesToState));

        const workSheetSecondDegreesToState = convertSecondDegreesToSheetObj(
          workBook.Sheets[templateSheetNames.secondDegrees],
          workBook.Sheets[templateSheetNames.insulatingGaps]
        );
        dispatch(setSecondDegreesAC(workSheetSecondDegreesToState));

        setIsCalculating(false);

        reader.onerror = function (event) {
          console.error('Файл не может быть прочитан. Код ошибки: ' + event?.target?.error?.code);
        };
      };
    }

    /* это действие проихводим для того чтобы при повторной загрузке того же файла пользлвателем событие onChange срабатывало */
    (document.getElementById('input') as HTMLInputElement).value = '';
  };
  // ------------------------------------ / Declare функцию вызывающуюся при загрузке файла ----------------------------------------------

  return (
    <>
      <button className={st.input__wrapper} style={{ opacity: isCalculating ? '0.5' : '1' }}>
        {isCalculating && <Loader />}
        <input className={st.input} id='input' type='file' onChange={onBookSelect} />
        <label htmlFor='input' className={st.input__button}>
          <figure>
            <SVG src={uploadIcon} />
          </figure>
          <p>Загрузить файл-шаблон</p>
        </label>
      </button>
    </>
  );
};

export default UploadButton;
