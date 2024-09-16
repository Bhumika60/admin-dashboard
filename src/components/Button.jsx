import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({
  icon,
  bgColor = 'transparent',
  color = 'black',
  bgHoverColor = 'light-gray',
  size = 'md',
  text = '',
  borderRadius = '0px',
  width = 'auto',
  onClick
}) => {
  const { setIsClicked, initialState } = useStateContext();

  const handleClick = () => {
    if (text) {
      setIsClicked({ ...initialState, [text.toLowerCase()]: true });
    }
    if (onClick) {
      onClick(); // Call the passed onClick handler
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;


