/*// api.js*/
const API_URL = process.env.REACT_APP_API_ENDPOINT; // Your API endpoint*/

// Fetch function to get available times based on the selected date
export const fetchAvailableTimes = async (date) => {
  try {
      const response = await fetch(`${API_URL}?date=${date}`);
      console.log(`Fetching available times from: ${API_URL}?date=${date}`); // Log the URL
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return await response.json();
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};
