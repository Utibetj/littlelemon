import React from 'react'; /* { useState } */

const ReservationForm = () => {
  // Uncomment and initialize state if needed
  /*const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [persons, setPersons] = useState('');
  const [cardInfo, setCardInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };*/

  return (
    <div className="reservation-form">
      <h2>RESERVE A TABLE</h2>
      <form> {/* onSubmit={handleSubmit} */}
        <label>
          Occasion:
          <select /*value={occasion} onChange={(e) => setOccasion(e.target.value)}*/>
            <option value="">Select an Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            /* value={name} onChange={(e) => setName(e.target.value)} */
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            /* value={email} onChange={(e) => setEmail(e.target.value)} */
          />
        </label>
        <label>
          Date/Time:
          <input
            type="datetime-local"
            /* value={dateTime} onChange={(e) => setDateTime(e.target.value)} */
          />
        </label>
        <label>
          Persons:
          <input
            type="number"
            placeholder="Number of persons"
            /* value={persons} onChange={(e) => setPersons(e.target.value)} */
          />
        </label>
        <label>
          Card Info:
          <input
            type="text"
            placeholder="Enter card information"
            /* value={cardInfo} onChange={(e) => setCardInfo(e.target.value)} */
          />
        </label>
        <button type="submit">CHECKOUT</button>
      </form>
    </div>
  );
};

export default ReservationForm;
