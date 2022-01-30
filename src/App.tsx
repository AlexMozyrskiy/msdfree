import { FC, useEffect, useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { getUser as getUserSelector } from "./state/redux/features/user/selectors";
import { getIsCookieAccepted as getIsCookieAcceptedLocalStorage, setIsCookieAccepted as setIsCookieAcceptedLocalStorage } from "./library/helpers/localStorage";
import { setIsCookieAccepted as setIsCookieAcceptedAC } from "./state/redux/features/user/actionCreators";

import Header from "./components/common/Header";
import SideBar from "./components/common/SideBar";
import Routes from "./components/Routes";
import AppLoader from "./library/components/AppLoader";
import CookieAgrrement from "./components/common/CookieAgrrement";

import "./library/styles/fonts/SFPro/index.scss";
import st from "./App.module.scss";
import Arrow from "./components/common/SideBar/frames/Arrow";

const App: FC = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  const [isMobileSidebarActive, setIsMobileSidebarActive] = useState<boolean>(false);

  const dispatch = useDispatch();

  // const {
  //   check: checkService,
  //   getFact: getFactService,
  //   getNotifications: getNotificationsService,
  //   isFetching /* error */,
  // } = useHttp();

  const { role, affiliation, isActivated, id, isCookieAccepted: isCookieAcceptedState } = useSelector(getUserSelector);

  // useEffect(() => {
  //   dispatch(checkUserThunk(checkService));
  //   const isCookieAccepted = getIsCookieAcceptedLocalStorage();
  //   dispatch(setIsCookieAcceptedAC(isCookieAccepted === 'true' ? true : false));
  // }, [dispatch, checkService]);

  // useEffect(() => {
  //   if (!role.includes('guest')) {
  //     dispatch(getFactThunk(getFactService));
  //   }
  // }, [dispatch, getFactService, role]);

  // useEffect(() => {
  //   if (!role.includes('guest')) {
  //     dispatch(getNotificationsThunk(getNotificationsService, id));
  //   }
  // }, [dispatch, getNotificationsService, role, id]);

  const toggleIsCookieAccepted = () => {
    setIsCookieAcceptedLocalStorage(isCookieAcceptedState ? "false" : "true");
    dispatch(setIsCookieAcceptedAC(!isCookieAcceptedState));
  };

  return (
    <>
      {/* {isFetching && <AppLoader />} */}
      <div className={cn(st.app, { [st.app_sideBarNotActive]: !isSidebarActive } /* { [st.app_fetching]: isFetching }*/)}>
        <div className={st.app__header}>
          <Header />
          <div className={st.app__header__mobileArrow}>
            <Arrow isSidebarActive={isMobileSidebarActive} setIsSidebarActive={setIsMobileSidebarActive} />
          </div>
        </div>

        <div className={cn(st.app__sidebar, { [st.app__sidebar__mobileActive]: isMobileSidebarActive })} onClick={() => setIsMobileSidebarActive(false)}>
          <SideBar isSidebarActive={isSidebarActive} affiliation={affiliation} setIsSidebarActive={setIsSidebarActive} role={role} />
        </div>

        <main className={st.app__content}>
          <Routes role={role} affiliation={affiliation} isActivated={isActivated} id={id} />

          {!isCookieAcceptedState && <CookieAgrrement toggleIsCookieAccepted={toggleIsCookieAccepted} />}

          {/* {error && <p>{error}</p>} */}
        </main>
      </div>
    </>
  );
};

export default App;
