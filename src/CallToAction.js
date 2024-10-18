
import Food from './icons_assets/restauranfood.jpg';

function CallToAction() {
    return (
    
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
       );
    }
    
    export default CallToAction;