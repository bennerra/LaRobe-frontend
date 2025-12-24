import { Route, Routes } from "react-router-dom";

import { MainPage } from "@/pages/MainPage/MainPage";
import { AppRoutes } from "@/constants/paths";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { RegistrationPage } from "@/pages/RegistrationPage/RegistrationPage";

const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
      <Route path={AppRoutes.AUTH} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTRATION} element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
