export const enum AppRoutes {
  MAIN = "/",
  AUTH = "/auth",
  REGISTRATION = "/registration",
  PROFILE = "/profile",
  ABOUT = "/about",
  CATALOG = "/catalog",
  PRODUCT_DETAIL = "/product/:id",
  NOT_FOUND = "*",
}

export const NotAuthPaths: AppRoutes[] = [
  AppRoutes.REGISTRATION,
  AppRoutes.AUTH,
  AppRoutes.NOT_FOUND,
  AppRoutes.ABOUT,
  AppRoutes.CATALOG,
  AppRoutes.PRODUCT_DETAIL,
];

export const AuthPaths: AppRoutes[] = [
  AppRoutes.MAIN,
  AppRoutes.PROFILE,
  AppRoutes.NOT_FOUND,
];
