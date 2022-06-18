import React from 'react'
import "./nav.css"
const Nav = () => {
  return (
        <div className='wrap'>
            <div className='nav'>
                <div className='left'>
                    <img src="./img/CI.png"></img>
                </div>
                <div className='rightbig'></div>
                    <div className='right'>
                        <div className='righta'>about</div>
                        <div className='rightb'>solution</div>
                        <div className='rightc'>creator</div>
                        <div className='rightd'>careers</div>
                        <div className='righte'>maketplace</div>
                    </div>
                    <div className='login'>KO</div>
            </div>
        </div>
  )
}

export default Nav