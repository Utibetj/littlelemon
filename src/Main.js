/*function Main(){
    return <main>   </main>
}

export default Main;*/

import React from 'react';
import Salad from './icons_assets/greek salad.jpg';
import Bruchetta from './icons_assets/bruchetta.svg';
import Dessert from './icons_assets/lemon dessert.jpg';
import ReservationForm from './ReservationForm'; /* Import your form component*/
import CallToAction from './CallToAction'; 
import SpecialItem from './SpecialItem';

const Main = () => {
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

      <ReservationForm /> {/* Include your form component here */}
    </main>
  );
};

export default Main;
