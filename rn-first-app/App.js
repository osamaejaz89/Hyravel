import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import MenuNavigation from "./navigation/MenuNavigator";

import carsReducer from "./store/reducers/cars";
import bikesReducer from "./store/reducers/bikes";
import bookReducer from "./store/reducers/book";
import bookbikeReducer from "./store/reducers/bookbike";
import driverReducer from "./store/reducers/drivers";
import * as firebase from "firebase";

const rootReducer = combineReducers({
  cars: carsReducer,
  bikes: bikesReducer,
  reducerbook: bookReducer,
  reducerbikebook: bookbikeReducer,
  reducerdriver: driverReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

var firebaseConfig = {
  apiKey: "AIzaSyBpdfiIp41H9IrYUtjA9ked_wqEnNEEfkQ",
  authDomain: "hyravelproject.firebaseapp.com",
  databaseURL: "https://hyravelproject.firebaseio.com",
  projectId: "hyravelproject",
  storageBucket: "hyravelproject.appspot.com",
  messagingSenderId: "163913437781",
  appId: "1:163913437781:web:35e3ba7530520dd5b43adc",
  measurementId: "G-YTPY62W3K0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default function App() {
  return (
    <Provider store={store}>
      <MenuNavigation />
    </Provider>
  );
}
