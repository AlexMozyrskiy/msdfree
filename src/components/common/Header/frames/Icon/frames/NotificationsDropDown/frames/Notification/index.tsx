import { FC, MouseEvent, useState } from "react";
import SVG from "react-inlinesvg";
import cn from "classnames";

import NotificationModal from "./frames/NotificationModal";

import deleteIcon from "src/library/icons/common/delete.svg";

import st from "./index.module.scss";

interface NotificationProps {
  notification: { title: string; text: string };
}

const Notification: FC<NotificationProps> = ({ notification }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const deleteHandler = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    /* Дальше после появления апи удалим сообщение из БД и из стейта */
    // dispatch(deleteNotificationThunk(deleteNotificationServeice, userId, notification.id));
  };

  const openNotificationModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        className={st.notification}
        onClick={openNotificationModal}
        // disabled={isNotificationDeleteFetching}
        // style={isNotificationDeleteFetching ? { opacity: '0.2' } : undefined}
      >
        <span className={cn(st.notification__title, { [st.notification__title_notReaded]: true })}>{notification.title}</span>

        <figure onClick={deleteHandler}>
          <SVG src={deleteIcon}></SVG>
        </figure>

        {/* {isNotificationDeleteFetching && (
          <div className={st.notification__loader}>
            <Loader />
          </div>
        )} */}
      </button>

      {isModalOpen && <NotificationModal notification={notification} close={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Notification;
