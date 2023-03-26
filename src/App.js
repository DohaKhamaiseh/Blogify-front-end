import React, { useState, useEffect } from 'react';

import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switcher from './components/Switcher';

export default function App() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     setScrollPosition(window.scrollY);
  //   });
  // }, []);

  return (
    <Switcher />
  );
}
