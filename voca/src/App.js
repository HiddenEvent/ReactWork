import './App.css';
import Bottom from './component/Bottom';
import Hellow from './component/Hellow';

function App() {
  const name = 'Tom';

  return (
    <div className="App">
      <Hellow />
      <Hellow />
      <Hellow />
      <Bottom />
    </div>
  );
}

export default App;
