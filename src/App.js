import './App.css';
import Rating from './Rating';

function App() {
  return (
    <div className='app'>
      <h1>Rating Component</h1>
      <Rating 
        count={5}
        size='xl'
        disabled={false}
      />
    </div>
  )
}

export default App;
