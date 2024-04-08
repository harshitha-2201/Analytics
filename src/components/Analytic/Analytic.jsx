import React from 'react'
import './Analytic.css'
import {analytics } from '../../assets/assets'
import Ellipse1 from '../../assets/Ellipse1.png'
import Ellipse2 from '../../assets/Ellipse2.png'



const Analytic = () => {
    return (
      <div>
        <div className='analytics-container'>
          {analytics.map((item, index) => {
            return (
              <div className='analytics-item' key={index}>
                <div className='background-image' style={{ backgroundImage: `url(${item.background})` ,backgroundColor: item.background_color }}>
                <h2 style = {{color : item.any_color}} >{item.any_name}</h2>
                <p style = {{color : item.color }}>{item.any_des}</p>
                <p style = {{color : item.any_color}} >{item.any_value}</p>
                <p style = {{color : item.any_color}} >{item.any_per}</p>
                <p style = {{color : item.color}} >{item.any_usd}</p>
              </div>
              </div>
            );
          })}
        </div>
        <div>
           <div className='analysis-page'>
              <div className='analysis-items'>
                <img src = {Ellipse2} alt = 'ana-img' style = {{marginLeft : '250px'}}/>
                <h3>On Time</h3>
                <p>Completed Iterations <span>7</span></p>
                <p>Total item Iterations <span>9</span></p>
                <p>%Iterations Done <span>77.8%</span></p>
              </div>
              <div className='analysis-items'>
              <img src = {Ellipse2} alt = 'ana-img' style = {{marginLeft : '250px'}}/>
                <h3>On Scope</h3>
                <p>Story Points Done <span>3200</span></p>
                <p>Total Story Points <span>4230</span></p>
                <p> %   Stories Done <span>77.8%</span></p>
              </div>
              <div className='analysis-items'>
              <img src = {Ellipse1} alt = 'ana-img' style = {{marginLeft : '250px'}}/>
                <h3>On Velocity</h3>
                <p>Average Velocity <span>428.6</span></p>
                <p>Required Velocity<span>615.0</span></p>
              </div>
           </div>
        </div>
      </div>
    )
  }
  
  export default Analytic;
  