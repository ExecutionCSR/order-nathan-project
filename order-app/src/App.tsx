import { Button } from './components/Button';

export function App() {
  function handleClick() {
    console.log('clicked');
  }
  return (
    <div className="App" id='app'>
      <Button  className="sim" title="SIM" onClick={() => handleClick()}/>
    </div>
  );
}


