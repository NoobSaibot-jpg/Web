import React, { useState } from 'react';

const CitySection = () => {
  const images = [
    "https://uamedtours.com.ua/storage/blogs/lnz6wVQS0v67jfgUZLEoPWXcdNfDRiFXpl6hX4zl.jpeg",
    "https://tamtour.com.ua/image/148/008/gor13.jpg",
    "https://24tv.ua/resources/photos/news/202510/2929684.jpg?v=1759926254000"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="city-section">
      <h3>Моє рідне місто — Харків</h3>
      
      <div className="city-info">
        <p>
          Харків — це місто студентів, величних площ та інновацій. 
          Площа Свободи є однією з найбільших у Європі, а будівля Держпрому 
          стала символом конструктивізму.
        </p>
      </div>

      <div className="slider">
        <h4>Фотогалерея міста</h4>
        <div className="slider-container">
          <button onClick={prevSlide}>❮</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
          <button onClick={nextSlide}>❯</button>
        </div>
      </div>

      <div className="map-container">
        <h4>Ми на карті</h4>
        <iframe 
          title="Kharkiv Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164132.8398436577!2d36.14590393080645!3d49.99472773413554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a097aa3f4c51%3A0x2a11b51745e997c3!2z0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1suk!2sua!4v1710500000000!5m2!1suk!2sua" 
          width="100%" 
          height="300" 
          style={{ border: 0, borderRadius: "8px" }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
};

export default CitySection;