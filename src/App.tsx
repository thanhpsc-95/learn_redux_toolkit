import './App.css';
import { Container } from '@material-ui/core';
import { Form } from 'components/Form';
import Countries from 'components/Countries';

function App() {


  return (
    <div style={{ marginTop: "15px" }}>
      <Container>
        <Form></Form>
        <Countries />
      </Container>
    </div>
  );
}

export default App;
