import React from 'react';

export default function Resume() {
  return (
    <div className='wrapper'>
      <div className='container-portfolio'>
        <h2 className='title'>Resume</h2>

        <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>

          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>


          <h3>Education</h3>
          <ul>
            <li>University of Toronto</li>
            <li>Full Stack Web Developer, UofT SCS Coding Boot Camp</li>
          </ul>


      </div>
    </div>
  );
}
