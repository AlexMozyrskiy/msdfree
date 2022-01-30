import { FC, ChangeEvent } from 'react';
import SVG from 'react-inlinesvg';
import { useDispatch, useSelector } from 'react-redux';
import XLSX from 'xlsx';

import FileValidator from '../../../../helpers/uploadFileValidation';
import {
  sheetCheckedDistances,
  sheetCumulativeGapsToObj,
  sheetDataToObj,
  sheetRetreatsToObj,
} from '../../../../helpers/xlsxDataToObj';
import {
  setRetreats as setRetreatsAC,
  setData as setDataAC,
  setCumulativeGaps as setCumulativeGapsAC,
  setCheckedDistances as setCheckedDistancesAC,
  setFileValidationErrors as setFileValidationErrorsAC,
} from 'src/state/redux/features/video/actionCreators';
import { getCumulativeGaps as getCumulativeGapsSelector } from 'src/state/redux/features/video/selectors';

import uploadIcon from 'src/library/icons/common/upload.svg';

import st from './index.module.scss';

interface IUploadButton {}

const UploadButton: FC<IUploadButton> = () => {
  const cumulativeGaps = useSelector(getCumulativeGapsSelector);

  const dispatch = useDispatch();
  // ------------------------------------ Declare функцию вызывающуюся при загрузке файла ------------------------------------------------
  const onBookSelect = (e: ChangeEvent<HTMLInputElement>) => {
    let validationErrors: string[] = [];

    /* Обнуление ощибок при попытке вновь загрузить файл */
    dispatch(setRetreatsAC([]));
    dispatch(
      setDataAC({
        checkDate: null,
        decryptionDate: null,
        inspectionArea: null,
        diagnosticToolCode: null,
        diagnosticToolNumber: null,
        checkedMainTracksKm: null,
        checkedSideTracksKm: null,
        checkType: null,
      })
    );
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
      // если файл был выбран. Эта проверка на тот случай, если пользователь нажал кнопку выбрать файл а потом закрыл окно с выбором файла не выбрав его
      let reader = new FileReader();
      reader.readAsBinaryString(selectedFile);
      reader.onload = function (event: ProgressEvent<FileReader>) {
        const data = event.target?.result;
        const workBook = XLSX.read(data, {
          type: 'binary',
        });

        /* ---------------- Валидация загруженного файла ------------------ */
        validationErrors = fileValidator.sheetsValidate(
          workBook.Sheets['Отступления'],
          workBook.Sheets['Данные'],
          workBook.Sheets['Проверенные ПЧ'],
          workBook.Sheets['Зазоры нарастаюший за месяц'],
          workBook.SheetNames
        );

        if (validationErrors.length) {
          dispatch(setFileValidationErrorsAC(validationErrors));
          return;
        }
        /* ---------------- / Валидация загруженного файла ------------------ */

        const workSheetRetreats = XLSX.utils.sheet_to_json(workBook.Sheets['Отступления']);
        const workSheetRetreatsToState = sheetRetreatsToObj(workSheetRetreats);
        const workSheetData = XLSX.utils.sheet_to_json(workBook.Sheets['Данные']);
        const workSheetDataToState = sheetDataToObj(workSheetData);
        const workSheetCumulativeGaps = XLSX.utils.sheet_to_json(workBook.Sheets['Зазоры нарастаюший за месяц']);
        const workSheetCumulativeGapsToState = sheetCumulativeGapsToObj(workSheetCumulativeGaps, cumulativeGaps);
        const workSheetCheckedDistances = XLSX.utils.sheet_to_json(workBook.Sheets['Проверенные ПЧ']);
        const workSheetCheckedDistancesToState = sheetCheckedDistances(workSheetCheckedDistances);
        dispatch(setRetreatsAC(workSheetRetreatsToState));
        dispatch(setDataAC(workSheetDataToState));
        dispatch(setCumulativeGapsAC(workSheetCumulativeGapsToState));
        dispatch(setCheckedDistancesAC(workSheetCheckedDistancesToState));

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
    <button className={st.input__wrapper}>
      <input className={st.input} id='input' type='file' onChange={onBookSelect} />
      <label htmlFor='input' className={st.input__button}>
        <figure>
          <SVG src={uploadIcon} />
        </figure>
        <p>Загрузить файл-шаблон</p>
      </label>
    </button>
  );
};

export default UploadButton;
