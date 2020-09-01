import React from 'react';
import './App.css';
import QueueManager from './components/queue_manager';
import imageFetch from './data/imageFetch';

function App() {
  return (
    <QueueManager queue={imageFetch()} />
  );
}

export default App;
