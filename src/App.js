
import React, { useState } from 'react';

const ColorButtons = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray'];
  const [buttonState, setButtonState] = useState(
    Array(9).fill({ color: '', disabled: false })
  );
  const [colorIndex, setColorIndex] = useState(0);
  const handleClick = (index) => {
    setButtonState((prevState) =>
      prevState.map((button, i) =>
        i === index ? { color: colors[colorIndex], disabled: true} : button
      )
    );
    setColorIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      {buttonState.map((button, index) => (
        <center>
        <button
          key={index}
          style={{ backgroundColor: button.color, color: 'white', margin: '5px' }}
          onClick={() => handleClick(index)}
          disabled={button.disabled}
        >
          Button {index + 1}
        </button>
        </center>
      ))}
    </div>
  );
};

export default ColorButtons;
