



import React from 'react';

const Header = ({ category, title, color }) => {
  return (
    <div className="mb-10">
      <p className="text-lg text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight" style={{ color: color }}>
        {title}
      </p>
    </div>
  );
};

export default Header;

