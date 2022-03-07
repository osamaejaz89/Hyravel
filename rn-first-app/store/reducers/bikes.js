import { BIKES } from "../../data/dummy-bike";

const initialState = {
  availableBikes: BIKES,
  userBikes: BIKES.filter((bikes) => bikes.ownerId === "m1"),
};

export default (state = initialState, action) => {
  return state;
};
