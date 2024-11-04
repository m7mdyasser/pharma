import { configureStore } from "@reduxjs/toolkit";
import productCartSlice, { clearCart } from "./slice/SliceToCart";
import productSlice from "./slice/ProductSlice";
import citySlice from "./slice/CitySlice";
import dataOfMonthSlice from "./slice/barChartOfMoth";
import dataOfYearSlice from "./slice/barChartOfYear";
import dataOfCategorySlice from "./slice/pieChartOfCategory";
import categoryCurveSlice from "./slice/bumpCategorySlice";
import growSlice from "./slice/lineChartOfGrow";
import customerSlice from "./slice/customeraccountslice";
import pharmacistSlice from "./slice/acountPharmacistSlice";
import CategorySlice from "./slice/categoryDataSlice";
import dataOfHomeRateSlice from "./slice/dataHomSlice";
import orderSlice from "./slice/OrderSlice";
import HistoryOrderSlice from "./slice/historyOrderSlice";
import ArchiveSlice from "./slice/ArchiveSlice";

const rootReducer = {
  cart: productCartSlice,
  products: productSlice,
  city: citySlice,
  dataOfMonth: dataOfMonthSlice,
  dataOfYear: dataOfYearSlice,
  dataOfCategory: dataOfCategorySlice,
  categoryCurve: categoryCurveSlice,
  growSlice: growSlice,
  dataOfCustomer: customerSlice,
  PharmacistData: pharmacistSlice,
  CategoryData: CategorySlice,
  homeData: dataOfHomeRateSlice,
  ordersData: orderSlice,
  HistoryOrdersData: HistoryOrderSlice,
  archiveData: ArchiveSlice
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return undefined;
  }
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export const clearCartEvery24Hours = () => {
  setInterval(() => {
    store.dispatch(clearCart());
  }, 24 * 60 * 60 * 1000);
};