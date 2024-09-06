import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/ProductsSlice";
import authReducer from "./Slices/AuthSlice";
import cartReducer from "./Slices/CartSlice";
import favouritesReducer from "./Slices/FavouriteSlice";

const storeApp = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer,
        favourites: favouritesReducer,
    },
});
export default storeApp;
