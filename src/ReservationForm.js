import React from 'react'; /* { useState }*/

const ReservationForm = () => {
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
    <div>
      <h2>Reserve a Table</h2>
      <form>  {/*onSubmit={handleSubmit}*/}
        <label>
          Occasion:
          <input type="text" /* value={occasion} onChange={(e) => setOccasion(e.target.value)}*/ />
        </label>
        <label>
          Name:
          <input type="text"  /* value={name} onChange={(e) => setName(e.target.value)}*/ />
        </label>
        <label>
          Email:
          <input type="email"  /* value={email} onChange={(e) => setEmail(e.target.value)}*/ />
        </label>
        <label>
          Date/Time:
          <input type="datetime-local"  /* value={dateTime} onChange={(e) => setDateTime(e.target.value)}*/ />
        </label>
        <label>
          Persons:
          <input type="number"  /* value={persons} onChange={(e) => setPersons(e.target.value)}*/ />
        </label>
        <label>
          Card Info:
          <input type="text"  /*value={cardInfo} onChange={(e) => setCardInfo(e.target.value)}*/ />
        </label>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default ReservationForm;
