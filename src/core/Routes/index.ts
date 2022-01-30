import { FC } from "react";

import { AFFILIATIONS } from "src/core/CONSTS";

import Home from "src/pages/common/Home";
import Video from "src/pages/user/RailWays/MSD/Video";
// import SideBarSettings from 'src/pages/user/SideBarSettings';
// import AccountSettings from 'src/pages/user/AccountSettings';
import Forbidden from "src/pages/common/Forbidden";
import UserAgreement from "src/pages/user/UserAgreement";
import AboutCookie from "src/pages/common/AboutCookie";
import FreightTension from "src/pages/user/RailWays/RCDMRostov/FreightTension";
import DescartesBookConverter from "src/pages/user/RailWays/RCDMRostov/DescartesBookConverter";

import { TRole } from "src/state/redux/features/user/actionCreators";
import { TAffiliation } from "src/core/CONSTS";

import homeIcon from "src/library/icons/sideBar/home.svg";
import videoIcon from "src/library/icons/sideBar/video.svg";
// import settingsIcon from 'src/library/icons/sideBar/settings.svg';
import devIcon from "src/library/icons/sideBar/dev.svg";
import agreementIcon from "src/library/icons/sideBar/agreement.svg";
import cookieIcon from "src/library/icons/sideBar/cookie.svg";
import registrationIcon from "src/library/icons/sideBar/registration.svg";
import cargoIcon from "src/library/icons/sideBar/cargo.svg";
import converterIcon from "src/library/icons/sideBar/converter.svg";

interface IRoute {
  path: string;
  component: FC;
  exact: boolean;
  linkText: string;
  linkIcon: string;
  availableRole: TRole; // этот роут будет доступен определенной роли
  availableAffiliation: TAffiliation[] | null; // этот роут будет доступен для пользователей с определенной принадлежностью
}

interface IHiddenRoute {
  path: string;
  component: FC;
  exact: boolean;
  availableRole: TRole;
  availableAffiliation: TAffiliation[] | null;
}

export const sideBarRoutes: IRoute[] = [
  {
    path: "/",
    component: Home,
    exact: true,
    linkText: "Home",
    linkIcon: homeIcon,
    availableRole: "guest",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/",
    component: Home,
    exact: true,
    linkText: "Home",
    linkIcon: homeIcon,
    availableRole: "user",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/video",
    component: Video,
    exact: false,
    linkText: "Видео Контроль",
    linkIcon: videoIcon,
    availableRole: "user",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/video",
    component: Forbidden,
    exact: false,
    linkText: "Видео Контроль",
    linkIcon: videoIcon,
    availableRole: "guest",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/freighttension",
    component: FreightTension,
    exact: false,
    linkText: "Грузонапряженность",
    linkIcon: cargoIcon,
    availableRole: "user",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/descartesbookconverter",
    component: DescartesBookConverter,
    exact: false,
    linkText: "Конвертер Декарт-Книга1",
    linkIcon: converterIcon,
    availableRole: "user",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/agreement",
    component: UserAgreement,
    exact: true,
    linkText: "Пользовательское соглашение",
    linkIcon: agreementIcon,
    availableRole: "guest",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/agreement",
    component: UserAgreement,
    exact: true,
    linkText: "Пользовательское соглашение",
    linkIcon: agreementIcon,
    availableRole: "user",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/aboutcookie",
    component: AboutCookie,
    exact: true,
    linkText: "О файлах Cookie",
    linkIcon: cookieIcon,
    availableRole: "user",
    availableAffiliation: ["ЖД"],
  },
  {
    path: "/aboutcookie",
    component: AboutCookie,
    exact: true,
    linkText: "О файлах Cookie",
    linkIcon: cookieIcon,
    availableRole: "guest",
    availableAffiliation: ["ЖД"],
  },

  // {
  //   path: '/sidebarsettings',
  //   component: SideBarSettings,
  //   exact: true,
  //   linkText: 'Настройки',
  //   linkIcon: settingsIcon,
  //   availableRole: 'user',
  // availableAffiliation: ['superpuper', 'ДЕКАРТ СКДИ', 'КВЛ-П СКДИ']
  // },
  // {
  //   path: '/admin',
  //   component: Admin,
  //   exact: false,
  //   linkText: 'Админ',
  //   linkIcon: registrationIcon,
  //   availableRole: 'admin',
  //   availableAffiliation: ['superpuper'],
  // },
  // {
  //   path: '/test',
  //   component: Test,
  //   exact: true,
  //   linkText: 'Тест',
  //   linkIcon: devIcon,
  //   availableRole: 'admin',
  //   availableAffiliation: ['superpuper'],
  // },
];

/* роуты для дропдауна в хедере при нажатии на три точки */
export const headerDropDownRoutes: IRoute[] = [
  // {
  //   path: '/accountsettings',
  //   component: AccountSettings,
  //   exact: true,
  //   linkText: 'Настройки аккаунта',
  //   linkIcon: settingsIcon,
  //   availableRole: 'user',
  // availableAffiliation: ['superpuper', 'ДЕКАРТ СКДИ', 'КВЛ-П СКДИ']
  // },
];

/* роуты скрытые, без кликабельной ссылки */
export const hiddenRoutes: IHiddenRoute[] = [
  // {
  //   path: "/restorepassword/:link",
  //   component: RestorePassword,
  //   exact: true,
  //   availableRole: "guest",
  //   availableAffiliation: null,
  // },
  // {
  //   path: "/registration",
  //   component: Registration,
  //   exact: true,
  //   availableRole: "guest",
  //   availableAffiliation: null,
  // },
  // {
  //   path: "/activate/:link",
  //   component: Activate,
  //   exact: true,
  //   availableRole: "guest",
  //   availableAffiliation: null,
  // },
];
