import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { getUser as getUserSelector } from "src/state/redux/features/user/selectors";
import Icon from "./frames/Icon";
import UserNameAndAffiliation from "./frames/UserNameAndAffiliation";

import bellIcon from "src/library/icons/header/bell.svg";

import st from "./index.module.scss";

/* Временный интерфейс для mockNotifications, потом будем получать их с сервера */
export interface IMockNotification {
  id: number;
  title: string;
  text: string;
  readed: boolean;
}

const Header: FC = () => {
  const [isNotificationsDropDownActive, setIsNotificationsDropDownActive] = useState<boolean>(false);
  // const [isMessagesDropDownActive, setIsMessagesDropDownActive] = useState<boolean>(false);

  const { id } = useSelector(getUserSelector);

  return (
    <header className={st.header}>
      <section className={st.header__search}>Пользуйся на здоровье. Есть желание отблагодарить меня за мое время (потраченное), твое время (сэкономленное), есть совесть? Перевод по номеру телефона</section>

      {id ? (
        <div className={st.header__user}>
          <div className={st.header__icon} onClick={() => setIsNotificationsDropDownActive(true)}>
            <Icon icon={bellIcon} color="red" isDropdownActive={isNotificationsDropDownActive} closeDropDown={() => setIsNotificationsDropDownActive(false)} />{" "}
          </div>
        </div>
      ) : (
        // <section className={st.header__info}>
        //   <span className={st.header__separator} />

        //   {/* <div className={st.header__icon}>
        //   <Icon icon={messagesIcon} color='green' />
        // </div> */}

        //   <div className={st.header__icon} onClick={() => setIsNotificationsDropDownActive(true)}>
        //     <Icon icon={bellIcon} color="red" isDropdownActive={isNotificationsDropDownActive} notifications={notifications} closeDropDown={() => setIsNotificationsDropDownActive(false)} />
        //   </div>

        //   <div className={st.header__photo}>
        //     <Photo />
        //   </div>

        //   <div className={st.header__user}>
        //     <UserNameAndAffiliation />
        //   </div>

        //   <div className={st.header__coins}>
        //     <Coins />
        //   </div>

        //   <div className={st.header__dots}>
        //     <Dots />
        //   </div>
        // </section>
        <section className={st.header__login}>{null}</section>
      )}
    </header>
  );
};

export default Header;
