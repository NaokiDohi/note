import React,{ Component }from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

import ListNotes from './compornents/ListNotes';

var notes_temp = [
  {
    'id': 1,
    'title': 'This is react note data',
    'content': 'This is the content',
  },
  {
    'id': 2,
    'title': 'My second note',
    'content': 'And here is my second note',
  },
  {
    'id': 3,
    'title': 'Third and last',
    'content': 'The third and last note...',
  },
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes_temp,
      current_note_id: 0,
      is_creating: true
    }
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs='10'>
              <h2>Realtime notes</h2>
            </Col>
            <Col xs='2'>
              <Button color='primary'>Create a new note</Button>
            </Col>
          </Row>

          <Row>
            <Col xs='4'>
              <ListNotes note={this.state.notes}/>
            </Col>
            <Col xs='8'>
              <p>Content/Editing here...</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
