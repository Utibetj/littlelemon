import React, { useState } from 'react';


const ReservationForm = ({ availableTimes = [], updateAvailableTimes, submitForm }) => {
    const [dateTime, setDateTime] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [occasion, setOccasion] = useState('');
    const [persons, setPersons] = useState(1);
    const [cardInfo, setCardInfo] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dateTime || !time || !name || !email) {
            setError('Please fill out all fields.');
            return; // Stop submission
        }

        const formData = { occasion, name, email, dateTime, time, persons, cardInfo };

        try {
            await submitForm(formData);
            // Reset form fields after successful submission
            setOccasion('');
            setName('');
            setEmail('');
            setDateTime('');
            setTime('');
            setPersons(1);
            setCardInfo('');
            setError(''); // Clear any previous error
        } catch (err) {
            setError('Failed to submit reservation. Please try again.');
        }
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDateTime(selectedDate);
        if (typeof updateAvailableTimes === 'function') {
            updateAvailableTimes(selectedDate);
        } else {
            console.error('updateAvailableTimes is not a function');
        }
    };

    return (
        <div className="reservation-form">
            <h2>RESERVE A TABLE</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={dateTime} onChange={handleDateChange} />
                
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.length > 0 ? (
                        availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))
                    ) : (
                        <option value="">No available times</option>
                    )}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={persons} onChange={(e) => setPersons(e.target.value)} />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="">Select an Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="card-info">Card Info</label>
                <input type="text" id="card-info" placeholder="Enter card information" value={cardInfo} onChange={(e) => setCardInfo(e.target.value)} />

                <button type="submit">Make Your Reservation</button>
            </form>
        </div>
    );
};

export default ReservationForm;
