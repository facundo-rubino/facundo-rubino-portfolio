import React from 'react';

const ColorPalette = () => {
  const colors = [
    { hex: '#EB6763', name: 'red-400' },
    { hex: '#D83236', name: 'red-600' },
    { hex: '#9599A3', name: 'gray-400' },
    { hex: '#6E7181', name: 'gray-600' },
    { hex: '#15173F', name: 'blue-900' },
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex space-x-6">
        {colors.map((color:any, index:any) => (
          <div key={index} className={`w-16 h-32 rounded-full bg-[${color.hex}]`} />
        ))}
      </div>
      <div className="flex space-x-6">
        {colors.map((color:any, index:any) => (
          <div key={index} className={`w-16 h-16 rounded-full bg-[${color.hex}]`} />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
