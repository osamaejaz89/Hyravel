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
  apiKey: "AIzaSyBiarkLSD7Iuaj_Tw7QmPl7gRLYm65ESLA",
  authDomain: "hyravelapp.firebaseapp.com",
  databaseURL: "https://hyravelapp.firebaseio.com",
  projectId: "hyravelapp",
  storageBucket: "hyravelapp.appspot.com",
  messagingSenderId: "983836982203",
  appId: "1:983836982203:web:1e4f998947883eb7e8e29e",
  measurementId: "G-TPL7FE0N4M",
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
