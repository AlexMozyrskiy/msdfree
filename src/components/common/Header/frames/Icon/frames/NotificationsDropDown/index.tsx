import { FC, useRef } from "react";
import cn from "classnames";

import Notification from "./frames/Notification";

import { useOutsideAlerter } from "src/library/hooks/useOutsideAlerter";

import st from "./index.module.scss";

interface NotificationsDropDownProps {
  closeDropDown: () => void;
}

const NotificationsDropDown: FC<NotificationsDropDownProps> = ({ closeDropDown }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, closeDropDown);

  const notifications = [
    {
      title: "Привет",
      text: "Пользуйся на здоровье. Есть желание отблагодарить меня за мое время (потраченное), твое время (съкономленное), есть совесть? Номер карты в иконке монетка",
    },
  ];

  return (
    <div className={st.dropDown} ref={ref}>
      {notifications.length === 0 ? (
        <p className={st.dropDown__notifications}>У вас нет уведомлений</p>
      ) : (
        <div className={cn(st.dropDown__notifications, st.dropDown__notifications_have)}>
          <Notification notification={notifications[0]} />
        </div>
      )}
    </div>
  );
};

export default NotificationsDropDown;
