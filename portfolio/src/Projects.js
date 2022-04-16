import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import picture from './images/picture.jpg';
import './App.css';
 
function Projects() {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
        <Thumbnail
        link="/twitter"
        image='#'
        title="Twitter Newsfeed"
        category="Mobile App"
        />

        <Thumbnail
        link="/airbnb"
        image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
        />

        <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
        />
    </div>
  );
}
 
export default Projects;