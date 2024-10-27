import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Salad from './icons_assets/greek salad.jpg';
import Bruchetta from './icons_assets/bruchetta.svg';
import Dessert from './icons_assets/lemon dessert.jpg';
import ReservationForm from './ReservationForm';
import CallToAction from './CallToAction';
import SpecialItem from './SpecialItem';
import ConfirmedBooking from './ConfirmedBooking'; // Import ConfirmedBooking

import { initializeTimes } from './timeUtils';
import { fetchAvailableTimes } from './api'; // Add this line

const Main = () => {
    const [availableTimes, setAvailableTimes] = useState(initializeTimes());
    const [confirmedBooking, setConfirmedBooking] = useState(null); // State for confirmed booking
    const navigate = useNavigate();

    const updateAvailableTimes = async (date) => {
        try {
            const times = await fetchAvailableTimes(date); // Use the fetch function
            setAvailableTimes(times);
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };

    const submitForm = (formData) => {
        setConfirmedBooking(formData); // Save the booking information in state
        navigate('/confirmed'); // Navigate to the confirmation page
    };

    return (
        <main>
            <CallToAction />
            <section>
                <h2>This week's specials!</h2>
                <div className="specials">
                    <SpecialItem
                        image={Salad}
                        title="Greek Salad"
                        price="12.99"
                        description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <SpecialItem
                        image={Bruchetta}
                        title="Bruschetta"
                        price="5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, straight from grandma’s recipe book."
                    />
                    <SpecialItem
                        image={Dessert}
                        title="Lemon Dessert"
                        price="5.00"
                        description="This delicious lemon dessert is the perfect way to end your meal."
                    />
                </div>
                <button>Order a Delivery</button>
            </section>

            <ReservationForm
                availableTimes={availableTimes}
                updateAvailableTimes={updateAvailableTimes}
                submitForm={submitForm} // Pass submitForm to ReservationForm
            />

            {/* Conditionally render the ConfirmedBooking component if confirmedBooking is set */}
            {confirmedBooking && <ConfirmedBooking booking={confirmedBooking} />}

        </main>
    );
};

export default Main;
