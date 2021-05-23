import './App.css';
import Bottom from './component/Bottom';
import Hellow from './component/Hellow';

function App() {
  const name = 'Tom';

  return (
    <div className="App">
      <Hellow age={10} />
      <Hellow age={20} />
      <Hellow age={30} />
      <Bottom />
    </div>
  );
}

export default App;
