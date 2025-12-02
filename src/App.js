import React from 'react';
import './App.css';
import { FaCar } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <FaCar size={80} color="#FF5733" />
          <h1 className="App-title">Explore Cars</h1>
        </div>
        <p className="App-description">
          Discover a variety of cars! Learn more about the latest models and find the perfect car for you.
        </p>
        <a
          className="App-link"
          href="https://www.caranddriver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Cars
        </a>
      </header>

      <main>
        <section className="car-gallery">
          <h2>Popular Cars</h2>
          <div className="car-list">
            <div className="car-item">
              <img
                src="https://media.whichcar.com.au/uploads/2025/02/85d4e68d-trequarti_bassoLeadSmall-1920x1162.jpg"
                alt="Ferrari 488"
              />
              <h3>Ferrari 488</h3>
              <p>A high-performance sports car with a 3.9L V8 engine.</p>
            </div>
            <div className="car-item">
              <img
                src="https://images.pexels.com/photos/27985144/pexels-photo-27985144/free-photo-of-mclaren-650s-widebody-liberty-walk.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                alt="Lamborghini Huracan"
              />
              <h3>Lamborghini Huracan</h3>
              <p>Iconic Italian sports car with a 5.2L V10 engine.</p>
            </div>
            <div className="car-item">
              <img
                src="https://www.greenncap.com/wp-content/uploads/tesla-model-s-2023-0152-768x514.png"
                alt="Tesla Model S"
              />
              <h3>Tesla Model S</h3>
              <p>The future of driving with electric power and autonomous features.</p>
            </div>
          </div>
        </section>
        <button className="cta-button" onClick={() => alert("Explore more about cars!")}>
          Explore Cars
        </button>
      </main>
    </div>
  );
}

export default App;
