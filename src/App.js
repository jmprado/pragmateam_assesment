import { Container, Row, Col } from 'react-bootstrap';
import Board from './components/board';

import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col className="placeHolder">
          <div id="header">
            Header placeholder
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="placeHolder" sm={2} md={2}>
          Navigation placeholder
        </Col>
        <Col sm={10} md={10}>
          <div id="board_content">
            <h2>Current Temperatures of Beers in Transit</h2>
            <h4>Click to see more details, click again to zoom out (updated every 3s)</h4>
            <div id="tiles_content">
              <Board />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
