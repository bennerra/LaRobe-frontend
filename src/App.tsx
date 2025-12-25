import { Route, Routes } from "react-router-dom";

import { MainPage } from "@/pages/MainPage/MainPage";
import { AppRoutes } from "@/constants/paths";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { RegistrationPage } from "@/pages/RegistrationPage/RegistrationPage";
import {ProfilePage} from "@/pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
      <Route path={AppRoutes.AUTH} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTRATION} element={<RegistrationPage />} />
      <Route path={AppRoutes.PROFILE} element={<ProfilePage/>}/>
    </Routes>
  );
};

export default App;
