import React from 'react';
import './Dynamicisland.scss';
import { useNavigate } from 'react-router-dom';

const Dynamicisland = () => {
  const location = useNavigate();
  return (
    <nav>
      <div className='navigation-wrapper'>
        <ul>
          <li onClick={() => location('/works')}>Works</li>
          <li onClick={() => location('/skills')}>Skill</li>
          <li onClick={() => location('/experience')}>Experience</li>
          <li onClick={() => location('/kepo-me')}>Kepo ME</li>
        </ul>
      </div>
    </nav>
  );
};

export default Dynamicisland;
