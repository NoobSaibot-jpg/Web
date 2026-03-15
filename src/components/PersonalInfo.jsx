import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: "Тимофій Манько", 
    email: "kra4kas@gmail.com", 
    traits: ["Приборкувач бази даних", "Детектив дужок", "Майстер Ctrl+C, Ctrl+V"], 
    quote: {
      text: "Одного разу дід мені казав «нікого не слухай!…» потім ще щось казав.",
      author: "Джейсон Стетхем" 
    }
  };

  return (
    <section className="personal-info-section">
      <h1>Моя особиста сторінка</h1> {/*  */}
      
      <div className="bio-card">
        <h2>{personalData.name}</h2>
        <p><strong>Email:</strong> <a href={`mailto:${personalData.email}`}>{personalData.email}</a></p>
      </div>

      <div className="traits-block">
        <h3>Три слова про мене:</h3>
        <ul>
          {personalData.traits.map((trait, index) => (
            <li key={index}>{trait}</li> // 
          ))}
        </ul>
      </div>

      <blockquote className="fav-quote">
        <p>"{personalData.quote.text}"</p>
        <cite>— {personalData.quote.author}</cite> {/*  */}
      </blockquote>
    </section>
  );
};

export default PersonalInfo;