import './App.css';
import { Container } from 'react-bootstrap';
import Board from './components/board';

function App() {
  return (
    <Container fluid={true}>
      <h2>Current Temperatures of Beers in Transit</h2>
      <h4>Click to see more details, click again to zoom out (updated every 3s)</h4>
      <Board />
    </Container>
  );
}

export default App;
