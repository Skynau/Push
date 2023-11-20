import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan massa nec pharetra tincidunt...
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <ul>
          <li>Daniel Slezak - CEO</li>
          <li>Marcel Balint - COO</li>
          <li>Artem Antonenko - CTO</li>
          <li>Ilona Kny - CTO</li>
        </ul>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan massa nec pharetra tincidunt...
        </p>
      </section>
    </div>
  );
}

export default AboutUs