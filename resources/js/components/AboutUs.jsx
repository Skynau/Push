import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="story-section">
                <h2>Our Story</h2>
                <p>
                    Our group has come together at a Coding Bootcamp in Prague.
                    Each with unique strengths and interests we strive to
                    achieve our goal which is to to radically change the way
                    properties are rented.
                </p>
            </section>

            <section className="team-section">
                <h2>Our Team</h2>
                <ul>
                    <li>Artem Antonenko - co-founder and acting CTO</li>
                    <li>Marcel Balint - co-founder and acting COO</li>
                    <li>Ilona Kny - co-founder and acting CTO</li>
                    <li>Daniel Slezak - co-dounfer and acting CEO</li>
                </ul>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Connected by a visionary goal we want to decrease the cost
                    of transaction of a rental deal. We aim to achieve it by
                    streamlining the rental process with the assistance of
                    digital and automation techniques. The quicker and cheaper
                    the process will be the happier will be the property owner
                    as well as their tenants.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
