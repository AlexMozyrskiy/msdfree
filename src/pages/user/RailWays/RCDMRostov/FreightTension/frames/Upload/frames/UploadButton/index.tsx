import { FC, ChangeEvent, useState } from 'react';
import SVG from 'react-inlinesvg';
import { useDispatch } from 'react-redux';
import XLSX from 'xlsx';

import FileValidator from '../../../../helpers/uploadFileValidation';
import { sheetRetreatsToObj, sheetKilometersToObj, sheetCargosToObj } from '../../../../helpers/xlsxDataToObj';
import {
  setRetreats as setRetreatsAC,
  setKilometers as setKilometersAC,
  setCargos as setCargosAC,
  setFileValidationErrors as setFileValidationErrorsAC,
} from 'src/state/redux/features/RCDMRostov/FreightTension/actionCreators';

import Loader from 'src/library/components/Loader';

import uploadIcon from 'src/library/icons/common/upload.svg';

import st from './index.module.scss';

interface IUploadButton {}

const UploadButton: FC<IUploadButton> = () => {
  const dispatch = useDispatch();
  const [isCalculating, setIsCalculating] = useState(false);
  // ------------------------------------ Declare функцию вызывающуюся при загрузке файла ------------------------------------------------
  const onBookSelect = (e: ChangeEvent<HTMLInputElement>) => {
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

      // console.log('Файл выбран ', new Date());
      // если файл был выбран. Эта проверка на тот случай, если пользователь нажал кнопку выбрать файл а потом закрыл окно с выбором файла не выбрав его
      let reader = new FileReader();
      reader.readAsBinaryString(selectedFile);
      reader.onload = function (event: ProgressEvent<FileReader>) {
        const data = event.target?.result;
        const workBook = XLSX.read(data, {
          type: 'binary',
        });
        // console.log('файл загружен ', new Date());

        /* ---------------- Валидация загруженного файла ------------------ */
        validationErrors = fileValidator.sheetsValidate(
          workBook.Sheets['Отступления'],
          workBook.Sheets['Оценка КМ'],
          workBook.Sheets['Грузо'],
          workBook.SheetNames
        );
        // console.log('файл провалидирован ', new Date());

        if (validationErrors.length) {
          // console.log(validationErrors);
          dispatch(setFileValidationErrorsAC(validationErrors));
          setIsCalculating(false);
          return;
        }
        /* ---------------- / Валидация загруженного файла ------------------ */

        const workSheetRetreats = XLSX.utils.sheet_to_json(workBook.Sheets['Отступления']);
        // console.log('Файл переделан в JSON, xlsx', new Date());
        const workSheetRetreatsToState = sheetRetreatsToObj(workSheetRetreats);
        // console.log('Файл переделан в JSON для стейта', new Date());
        dispatch(setRetreatsAC(workSheetRetreatsToState));
        // console.log('Файл задиспатчен в стейт', new Date());

        const workSheetKilometers = XLSX.utils.sheet_to_json(workBook.Sheets['Оценка КМ']);
        const workSheetKilometersToState = sheetKilometersToObj(workSheetKilometers);
        dispatch(setKilometersAC(workSheetKilometersToState));

        const workSheetCargos = XLSX.utils.sheet_to_json(workBook.Sheets['Грузо']);
        const workSheetCargosToState = sheetCargosToObj(workSheetCargos);
        dispatch(setCargosAC(workSheetCargosToState));

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
