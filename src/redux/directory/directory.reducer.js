import DIRECTORY_DATA from "./directory.data";

const INITIAL_STATE = DIRECTORY_DATA;

const directoryReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default directoryReducer;
