import React from "react";

export default function Portfolio() {

  return (
    <div className='wrapper'>
        <div className='container-portfolio'>
          <h2 className='title'>Portfolio</h2>
          <div className='box-wrapper'>

            {/* box_3 */}
            <div className='box box_3'>
              <div className="box_text_wrapper"> 
                <div className="box_text">Node.js, React, MongoDB</div>
              </div>
              <div className='box-git'>
                <a href="https://github.com/Connor812/Project-3" target="_blank" rel="noopener noreferrer">
                  <span>github</span>
                </a>
                <span>&nbsp;/&nbsp;</span>
                <a href="https://manga-verse.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <span>site</span>
                </a>
              </div>
            </div>

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

            {/* box_4 */}
            <div className='box box_4'>
              <div className="box_text_wrapper"> 
                <div className="box_text">HTML / CSS / JS</div>
              </div>
              <div className='box-git'>
                <a href="https://github.com/MaksymStovpovyi/04-code-quiz" target="_blank" rel="noopener noreferrer">
                  <span>github</span>
                </a>
                <span>&nbsp;/&nbsp;</span>
                <a href="https://maksymstovpovyi.github.io/04-code-quiz/" target="_blank" rel="noopener noreferrer">
                  <span>site</span>
                </a>
              </div>
            </div>

          </div>
        </div>
    </div> 
  );
}
