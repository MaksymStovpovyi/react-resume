import React from "react";

export default function Portfolio() {

  return (
    <div className='wrapper'>
        <div className='container-portfolio'>
          <h2 className='title'>Portfolio</h2>
          <div className='box-wrapper'>

            {/* box_1 */}
            <div className='box box_1'>
              <div className="box_text_wrapper"> 
                <div className="box_text">HTML / CSS / JS / API</div>
              </div>
              <div className='box-git'>
                <a href="https://github.com/johnxlai/travel-app" target="_blank" rel="noopener noreferrer">
                  <span>github</span>
                </a>
                <span>&nbsp;/&nbsp;</span>
                <a href="https://johnxlai.github.io/travel-app/" target="_blank" rel="noopener noreferrer">
                  <span>site</span>
                </a>
              </div>
            </div>

            {/* box_2 */}
            <div className='box box_2'>
              <div className="box_text_wrapper"> 
                <div className="box_text">Node.js, MySQL</div>
              </div>
              <div className='box-git'>
                <a href="https://github.com/mitsushiro1/cars4any1" target="_blank" rel="noopener noreferrer">
                  <span>github</span>
                </a>
                <span>&nbsp;/&nbsp;</span>
                <a href="https://app-cars4any1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <span>site</span>
                </a>
              </div>
            </div>

            {/* box_3 */}
            <div className='box box_3'>
              <div className="box_text_wrapper"> 
                <div className="box_text">React, MongoDB</div>
              </div>
              <div className='box-git'>
                <a href="https://github.com/Connor812/Project-3" target="_blank" rel="noopener noreferrer">
                  <span>github</span>
                </a>
                <span>&nbsp;/&nbsp;</span>
                <a href="https://apple-crumble-42698.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <span>site</span>
                </a>
              </div>
            </div>

          </div>
        </div>
    </div> 
  );
}
