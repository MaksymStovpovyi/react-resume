import React from 'react';
import DownloadLink from "../downloadFile";

export default function Resume() {
  return (
    <div className='wrapper'>
      <div className='container-portfolio'>
        <h2 className='title'>Resume</h2>

        <div className='download'>
          <DownloadLink fileUrl="/resume.pdf" fileName="resume.pdf" />
        </div>

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

      </div>
    </div>
  );
}
