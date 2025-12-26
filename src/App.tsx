import { Route, Routes } from "react-router-dom";

import { MainPage } from "@/pages/MainPage/MainPage";
import { AppRoutes } from "@/constants/paths";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { RegistrationPage } from "@/pages/RegistrationPage/RegistrationPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";
import { Catalog } from "@/pages/Catalog/Catalog";
import { ProductDetailPage } from "@/pages/ProductDetailPage/ProductDetailPage";
import { About } from "@/pages/About/About";

const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
      <Route path={AppRoutes.AUTH} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTRATION} element={<RegistrationPage />} />
      <Route path={AppRoutes.PROFILE} element={<ProfilePage isOwner />} />
      <Route path={AppRoutes.CATALOG} element={<Catalog />} />
      <Route path={AppRoutes.PRODUCT_DETAIL} element={<ProductDetailPage />} />
      <Route path={AppRoutes.ABOUT} element={<About />} />
    </Routes>
  );
};

export default App;
