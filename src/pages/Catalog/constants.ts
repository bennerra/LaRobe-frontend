import { Option } from "@/ui/Select/type";

export const enum CatalogFieldsKeys {
  STOCK = "stock",
  PRICE_GTE = "price_gte",
  PRICE_LTE = "price_lte",
  BRANDS = "brands",
}

export const CatalogFormConfig = {
  [CatalogFieldsKeys.STOCK]: "Наличие",
  [CatalogFieldsKeys.PRICE_GTE]: "От",
  [CatalogFieldsKeys.PRICE_LTE]: "До",
  [CatalogFieldsKeys.BRANDS]: "Бренд",
};

export type CatalogFormData = {
  [CatalogFieldsKeys.STOCK]: string;
  [CatalogFieldsKeys.PRICE_GTE]: number;
  [CatalogFieldsKeys.PRICE_LTE]: number;
  [CatalogFieldsKeys.BRANDS]: string;
};

export const StockVariantsObject: Option[] = [
  { id: "stock", name: "В наличии" },
  { id: "no_stock", name: "Не в наличии" },
];

export const BrandsVariantsObject: Option[] = [
  { id: "brand1", name: "Бренд1" },
  { id: "brand2", name: "Бренд2" },
];
