import Home from "./Home.png";
import Timer from "./Timer.png";
import Chart from "./Chart.png";
import Rocket from "./Rocket.png";
import Layers from "./Layers.png";
import Settings from "./Settings.png";
import Logout from "./Logout.png";

import Path1 from './Path1.png'
import Path2 from './Path2.png'
import Path3 from './Path3.png'
import Path4 from './Path4.png'


export const assets = {
  Home,
  Timer,
  Chart,
  Rocket,
  Layers,
  Settings,
  Logout,
  Path1,
  Path2,
  Path3,
  Path4
};

export const side_bar = [
  {
    nav_name: "Home",
    nav_img: Home,
  },
  {
    nav_name: "Activities",
    nav_img: Timer,
  },
  {
    nav_name: " Analytics",
    nav_img: Chart,
  },
  {
    nav_name: " Transformation",
    nav_img: Rocket,
  },
  {
    nav_name: "Library",
    nav_img: Layers,
  },

]

export const side_bar2 = [
    
  {
    
    nav_name: "Settings",
    nav_img: Settings,
  },
  {
    nav_name: "Logout",
    nav_img: Logout,
  },
];


export const analytics =[
  {
    any_name : ' TO EFFICIENCY',
    any_des : 'Lorem Ipsum',
    any_value : 1.1921 ,
    any_per : '+0.0015(+0.13%)',
    any_usd : '0.00USD',
    background : Path1,
    background_color : '#7bacd1'

  },
  {
    any_name : 'TIME TO MARKET',
    any_des : 'Lorem Ipsum',
    any_value : '327,176' ,
    any_per : '+97.0015(-23.03%)',
    any_usd : '131,040,723 JPY',
    background : Path2,
    background_color : '#74ad97',
    color : '#a5ab59'




  },
  {
    any_name : ' TOTECH DEBT',
    any_des : 'Lorem Ipsum',
    any_value : 1.1763,
    any_per : '+0.0015(+0.13%)',
    any_usd : '0.00USD',
    background : Path3,
    background_color : '#ebe1e1',
    any_color : 'black'




  },{
    any_name : 'PREDICTABILITY',
    any_des : 'Lorem Ipsum',
    any_value : 0.00313010 ,
    any_per : '+0.00050430(-13.88%)',
    any_usd : '1,566BTC',
    background : Path4,
    background_color : '#fc7e7e'
  },
]




