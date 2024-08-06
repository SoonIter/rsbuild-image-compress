import './App.css';
import x from './Hello.svg'

console.log(x)

const App = () => {
  return (
    <div className="content">
      {x}
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
