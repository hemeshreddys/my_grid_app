import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import data from './data.json';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[
        {
          id:1,
          name:"“All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.”",
          color:"#11A5E0"
        },
        {
          id:2,
          name:"“All life is an experiment. The more experiments you make the better.”",
          color:"#11A5E0"
        },
        {
          id:3,
          name:"“If life were predictable it would cease to be life, and be without flavor.”",
          color:"#11A5E0"
        },
        {
          id:4,
          name:"“A man who dares to waste one hour of time has not discovered the value of life.”",
          color:"#11A5E0"
        },
        {
          id:5,
          name:"“I think being in love with life is a key to eternal youth.”",
          color:"#11A5E0"
        },
        {
          id:6,
          name:"“However difficult life may seem, there is always something you can do and succeed at.”",
          color:"#11A5E0"
        },
        {
          id:7,
          name:"“The more you praise and celebrate your life, the more there is in life to celebrate.”",
          color:"#11A5E0"
        },
        {
          id:4,
          name:"“A man who dares to waste one hour of time has not discovered the value of life.”",
          color:"#11A5E0"
        },
        {
          id:5,
          name:"“I think being in love with life is a key to eternal youth.”",
          color:"#11A5E0"
        },
        {
          id:6,
          name:"“However difficult life may seem, there is always something you can do and succeed at.”",
          color:"#11A5E0"
        },
        {
          id:7,
          name:"“The more you praise and celebrate your life, the more there is in life to celebrate.”",
          color:"#11A5E0"
        },
        {
          id:2,
          name:"“All life is an experiment. The more experiments you make the better.”",
          color:"#11A5E0"
        },
        {
          id:3,
          name:"“If life were predictable it would cease to be life, and be without flavor.”",
          color:"#11A5E0"
        },
        {
          id:4,
          name:"“A man who dares to waste one hour of time has not discovered the value of life.”",
          color:"#11A5E0"
        },
        {
          id:5,
          name:"“I think being in love with life is a key to eternal youth.”",
          color:"#11A5E0"
        },
        {
          id:6,
          name:"“However difficult life may seem, there is always something you can do and succeed at.”",
          color:"#11A5E0"
        },
        {
          id:7,
          name:"“The more you praise and celebrate your life, the more there is in life to celebrate.”",
          color:"#11A5E0"
        },
        {
          id:4,
          name:"“A man who dares to waste one hour of time has not discovered the value of life.”",
          color:"#11A5E0"
        },
        {
          id:5,
          name:"“I think being in love with life is a key to eternal youth.”",
          color:"#11A5E0"
        },
        {
          id:6,
          name:"“However difficult life may seem, there is always something you can do and succeed at.”",
          color:"#11A5E0"
        },
        {
          id:7,
          name:"“The more you praise and celebrate your life, the more there is in life to celebrate.”",
          color:"#11A5E0"
        },
        {
          id:2,
          name:"“All life is an experiment. The more experiments you make the better.”",
          color:"#11A5E0"
        },
        {
          id:3,
          name:"“If life were predictable it would cease to be life, and be without flavor.”",
          color:"#11A5E0"
        },
        {
          id:4,
          name:"“A man who dares to waste one hour of time has not discovered the value of life.”",
          color:"#11A5E0"
        },
        {
          id:5,
          name:"“I think being in love with life is a key to eternal youth.”",
          color:"#11A5E0"
        },
        {
          id:6,
          name:"“However difficult life may seem, there is always something you can do and succeed at.”",
          color:"#11A5E0"
        },
        {
          id:7,
          name:"“The more you praise and celebrate your life, the more there is in life to celebrate.”",
          color:"#11A5E0"
        },
        {
          id:4,
          name:"“A man who dares to waste one hour of time has not discovered the value of life.”",
          color:"#11A5E0"
        },
        {
          id:5,
          name:"“I think being in love with life is a key to eternal youth.”",
          color:"#11A5E0"
        },
        {
          id:6,
          name:"“However difficult life may seem, there is always something you can do and succeed at.”",
          color:"#11A5E0"
        },
        {
          id:7,
          name:"“The more you praise and celebrate your life, the more there is in life to celebrate.”",
          color:"#11A5E0"
        },
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <MainHeader/>
        
          {this.state.data.map((dynamicData,i) =>
            <Box bgC="#00B6FF" footerC={dynamicData.color} pContent={dynamicData.name} bgPageColor="#44B638"/>
          )}
        <MainFooter/>
      </div>
    );
  }
}

export default App;
