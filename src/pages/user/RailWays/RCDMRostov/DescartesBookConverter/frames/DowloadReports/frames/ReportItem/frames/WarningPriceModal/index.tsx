import { FC } from 'react';

import Button from 'src/library/components/Button';
import ModalCross from 'src/library/components/ModalCross';

import st from './index.module.scss';

interface IWarningPriceModal {
  price: number;
  onAcceptButtonClickHandler: () => void;
  close: () => void;
}

const WarningPriceModal: FC<IWarningPriceModal> = ({ price, close, onAcceptButtonClickHandler }) => {
  const onAcceptHandler = () => {
    close();
    onAcceptButtonClickHandler();
  };

  return (
    <div className={st.modal__overlay}>
      <article className={st.modal}>
        <p>Если Вы подтвердите это действие с Вашего внутрисервисного счета будут списаны {price} коинов</p>

        <div className={st.modal__acceptButton}>
          <Button text='Принять' onCkickHandler={onAcceptHandler} />
        </div>
        <ModalCross onClick={close} />
      </article>
    </div>
  );
};

export default WarningPriceModal;
