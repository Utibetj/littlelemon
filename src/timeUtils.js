// src/utils/timeUtils.js

// Initialize times function
export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Reducer function to update times
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Here, you can return the available times received from the action payload
      return action.payload; // Return the available times from the API
    default:
      return state;
  }
};
