import React, { useCallback, useState } from 'react';

import './App.css';
import Demo from './components/Demo/Demo';
import Button from './components/UI/Button/Button';

function App() {
  const [showPar, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App RUNNING');

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara(prevState => !prevState);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPar && <p>This is the hidden paragraph</p>}
      <Demo show={true} />
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
