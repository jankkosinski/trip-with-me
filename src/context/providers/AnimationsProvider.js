import React, { useEffect } from 'react';
import AnimationsContext from '../AnimationsContext';

export default function AnimationsProvider({ children }) {
  useEffect(() => {}, []);
  return (
    <AnimationsContext.Provider value={null}>
      {children}
    </AnimationsContext.Provider>
  );
}
