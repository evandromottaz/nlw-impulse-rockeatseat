import { CircleNotch } from 'phosphor-react';
import React from 'react';

const Loading = () => {
  return (
    <div className="w-6 h-6 items-center flex justify-center">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
};

export default Loading;
