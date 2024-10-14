/*function Main(){
    return <main>   </main>
}

export default Main;*/

import React from 'react';
import Salad from './icons_assets/greek salad.jpg';
import Bruchetta from './icons_assets/bruchetta.svg';
import Dessert from './icons_assets/lemon dessert.jpg';
import Food from './icons_assets/restauranfood.jpg';
import ReservationForm from './ReservationForm'; /* Import your form component*/

const Main = () => {
  return (
    <main>
      <section className="reserve-section">
        <div className="reserve-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
        </div>
        <img src= {Food} alt= "food"/>
      </section>

      <section>
        <h2>This week's specials!</h2>
        <div className="specials">
          <div className="special-item">
            <img src= {Salad}  alt='greek salad'/>
            <h3>Greek Salad</h3>
            <p className='price'>$12.99</p>
            <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div className="special-item">
            <img src= {Bruchetta} alt='bruchetta'/>
            <h3>Bruschetta</h3>
            <p className='price'>$5.99</p>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, straight from grandma’s recipe book.</p>
          </div>
          <div className="special-item">
            <img src= {Dessert} alt='lemon dessert'/>
            <h3>Lemon Dessert</h3>
            <p className='price'>$5.00</p>
            <p>This delicious lemon dessert is the perfect way to end your meal.</p>
          </div>
        </div>
        <button>Order a Delivery</button>
      </section>

      <ReservationForm /> {/* Include your form component here */}
    </main>
  );
};

export default Main;
