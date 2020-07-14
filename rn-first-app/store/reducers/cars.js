import { CARS } from "../../data/dummy-data";

const initialState = {
  availableCars: CARS,
  userCars: CARS.filter((cars) => cars.ownerId === "m1"),
};

export default (state = initialState, action) => {
  return state;
};
