import React, { useState } from 'react';
import './RandomColor.css'; 

function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [colorCode, setColorCode] = useState('');
  const [colorFormat, setColorFormat] = useState('HEX');

  const changeHexColor = () => {
    const randomHexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomHexColor);
    setColorCode(randomHexColor);
    setColorFormat('HEX');
  };

  const changeRgbColor = () => {
    const randomRgbColor = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256)
    };
    const rgbString = `rgb(${randomRgbColor.r}, ${randomRgbColor.g}, ${randomRgbColor.b})`;
    setBackgroundColor(rgbString);
    setColorCode(rgbString);
    setColorFormat('RGB');
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <div className="color-label">{colorFormat}: {colorCode}</div>
      <button onClick={changeHexColor}>Hex Change</button>
      <button onClick={changeRgbColor}>RGB Change</button>
    </div>
  );
}

export default ColorChanger;