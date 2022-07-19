
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
      <h1>Welcome to the quizz game!</h1>
      <h3>Answer the correct question to advance</h3>
      <h5>Answering wrong question cost 1 lives, when all lives lost, the game over.</h5>

      <Link to="/Questions">
            <button className='startBtn'>Click</button>
      </Link>
    </>
  );
}

export default App;
