import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClassesScholl from './src/link/class';

import './src/css/color.css'
import './src/css/basic.css'
import './src/css/components.css'
import Student from './src/link/student';
import PresenceByClass from './src/link/presencebyclass';
import PrintExercise from './src/link/exercise';
// import cssPagedMedia from './src/components/stylecompile';

function App() {
  return <BrowserRouter>
      <ClassesScholl />
      <Student />
      <PresenceByClass />
      <PrintExercise />
    </BrowserRouter>
}

export default App;
