import { Option } from "@/ui/Select/type";

export const enum CatalogFieldsKeys {
  STOCK = "stock",
  PRICE_GTE = "price_gte",
  PRICE_LTE = "price_lte",
}

export const CatalogFormConfig = {
  [CatalogFieldsKeys.STOCK]: "Наличие",
  [CatalogFieldsKeys.PRICE_GTE]: "От",
  [CatalogFieldsKeys.PRICE_LTE]: "До",
};

export type CatalogFormData = {
  [CatalogFieldsKeys.STOCK]: string;
  [CatalogFieldsKeys.PRICE_GTE]: number;
  [CatalogFieldsKeys.PRICE_LTE]: number;
};

export const StockVariantsObject: Option[] = [
  { id: "stock", name: "В наличии" },
  { id: "no_stock", name: "Не в наличии" },
];
