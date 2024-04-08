
import React from 'react';
import './Table.css';
import Chart1 from '../../assets/Chart1.png'
import Chart2 from '../../assets/Chart2.png'
import Chart4 from '../../assets/Chart4.png'
import Chart5 from '../../assets/Chart5.png'



const Table = () => {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="preview">
        <select>
             <option>Preview</option>
            </select>
        </div>
        <div className="period-selector">
          <div className="period-options">
            <span>Today</span>
            <span>Weekly</span>
            <span className='option-monthly'>Monthly</span>
            <span>Early</span>
            <span>Quarterly</span>
            <span>Year</span>
            <select>
             <option>Select</option>
            </select>
          </div>
        </div>
      </div>
      <hr className='hr2'/>

      <div className="table">
        <div className="table-row table-heading">
          <div>Page</div>
          <div className='table-rows-containers'>
            <h4>PageViews</h4>
            <p>356,928</p>
            <img src = {Chart1} alt = 'table-cart'/>
          </div>
          <div>
            <h4>UniquePageviews</h4>
            <p>276,928</p>
            <img src = {Chart2} alt = 'table-cart'/>
          </div>
          <div>
            <h4>Avg.on page</h4>
            <p>00:03:51</p>
            <img src = {Chart4} alt = 'table-cart'/>
          </div>
          <div>
            <h4>Extrances</h4>
            <p>315,928</p>
            <img src = {Chart5} alt = 'table-cart'/>
          </div>
          <div>
            <h4>%Exist</h4>
            <p>39,84%</p>
            <img src = {Chart2} alt = 'table-cart'/>
          </div>
          <div>
            <h4>Page Value</h4>
            <p>$19,983</p>
            <img src = {Chart1} alt = 'table-cart'/>
          </div>

          </div>


        <div className="table-row">
          <div>/Defect Arrival Rate</div>
          <div>
          <p>872,337 <span>(15.82%)</span></p>
          </div>
          <div>
          <p>574,332 <span>(15.32%)</span></p>
          </div>         
           <div>
           <p>00:05:43</p>
          </div>
          <div>
          <p>872,337 <span>(16.82%)</span></p>
          </div>
          <div>
          <p> 25.96%</p>
          </div>
          <div>
          <p>25.96% <span>(5.11%)</span></p>
          </div>
        </div>
        <div className="table-row">
          <div>/Fixed Rate</div>
          <div>
          <p>802,337 <span>(14.82%)</span></p>
          </div>
          <div>
          <p>445,337 <span>(13.82%)</span></p>
          </div>         
           <div>
           <p>00:03:12</p>
          </div>
          <div>
          <p>872,337 <span>(15.82%)</span></p>
          </div>
          <div>
          <p>76.13%</p>
          </div>
          <div>
          <p>872,337 <span>(15.82%)</span></p>
          </div>
        </div>
        <div className="table-row">
          <div>/Cycle timw</div>
          <div>
          <p>562,337 <span>(10.82%)</span></p>
          </div>
          <div>
          <p>984,332 <span>(18.32%)</span></p>
          </div>         
           <div>
           <p>00:09:43</p>
          </div>
          <div>
          <p>886,337 <span>(16.82%)</span></p>
          </div>
          <div>
          <p> 23.96%</p>
          </div>
          <div>
          <p>20.96% <span>(2.11%)</span></p>
          </div>
        </div>
        <div className="table-row">
          <div>/Lead time</div>
          <div>
          <p>672,337 <span>(11.82%)</span></p>
          </div>
          <div>
          <p>897,332 <span>(10.32%)</span></p>
          </div>         
           <div>
           <p>00:06:43</p>
          </div>
          <div>
          <p>452,337 <span>(19.82%)</span></p>
          </div>
          <div>
          <p> 20.96%</p>
          </div>
          <div>
          <p>24.96% <span>(6.11%)</span></p>
          </div>
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
};

export default Table;
