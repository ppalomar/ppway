import ProblemOne from './scenes/problemOne';
import ProblemTwo from './scenes/problemTwo';

import './App.css'

function App() {
  return (
    <>
      <div className='author'><a href='http://pablopalomar.com/' target='blank'>Pablo Palomar</a></div>
      <div className="app">
        <ProblemOne />
        <ProblemTwo />
      </div>
    </>
  );
}

export default App;
