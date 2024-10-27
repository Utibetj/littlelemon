import React, { useState } from 'react';

const ReservationForm = ({ availableTimes = [], updateAvailableTimes, submitForm }) => {
    const [formData, setFormData] = useState({
        dateTime: '',
        time: '',
        name: '',
        email: '',
        occasion: '',
        persons: 1,
        cardInfo: ''
    });
    const [error, setError] = useState('');

    const validateFormData = () => {
        const { dateTime, time, name, email, occasion, persons } = formData;
        if (!dateTime || !time || !name || !email || !occasion || persons < 1) {
            setError('Please fill out all fields correctly.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        if (name === 'dateTime' && typeof updateAvailableTimes === 'function') {
            updateAvailableTimes(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateFormData()) return; // Stop submission if validation fails

        try {
            await submitForm(formData);
            // Reset form fields after successful submission
            setFormData({
                dateTime: '',
                time: '',
                name: '',
                email: '',
                occasion: '',
                persons: 1,
                cardInfo: ''
            });
            setError(''); // Clear any previous error
        } catch (err) {
            setError('Failed to submit reservation. Please try again.');
        }
    };

    return (
        <div className="reservation-form">
            <h2>RESERVE A TABLE</h2>
            {error && <p className="error" aria-live="assertive">{error}</p>} {/* Added aria-live */}

            <form onSubmit={handleSubmit}>
                <label htmlFor="dateTime">Choose date</label>
                <input
                    type="date"
                    id="dateTime"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleChange}
                    required // HTML5 validation
                />
                
                <label htmlFor="time">Choose time</label>
                <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required // HTML5 validation
                >
                    <option value="">Select a time</option>
                    {availableTimes.length > 0 ? (
                        availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))
                    ) : (
                        <option value="">No available times</option>
                    )}
                </select>

                <label htmlFor="persons">Number of guests</label>
                <input
                    type="number"
                    name="persons"
                    min="1"
                    max="10"
                    id="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    required // HTML5 validation
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    required // HTML5 validation
                >
                    <option value="">Select an Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required // HTML5 validation
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required // HTML5 validation
                />

                <label htmlFor="cardInfo">Card Info</label>
                <input
                    type="text"
                    id="cardInfo"
                    name="cardInfo"
                    placeholder="Enter card information"
                    value={formData.cardInfo}
                    onChange={handleChange}
                />

                <button type="submit" aria-label="Make Your Reservation"> {/* Added aria-label */}
                    Make Your Reservation
                </button>
            </form>
        </div>
    );
};

export default ReservationForm;
