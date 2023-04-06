import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='header'>
      
      <div className='header-text'>
        <h2>Maksym Stovpovyi</h2>
        <h2>Full Stack Web Developer</h2>
      </div>

      <ul>

        <li>
          <a
            href='#about'
            onClick={() => handlePageChange('AboutMe')}

            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href='#portfolio'
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            href='#contact'

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href='#resume'
            onClick={() => handlePageChange('Resume')}

            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default NavTabs;
