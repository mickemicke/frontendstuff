import { Layout } from "common";
import { Welcome } from "oldComponents/Welcome";
import { Button } from 'components';

function App() {
  return (
    <Layout><Welcome /><Button>CoolButton</Button></Layout>
  );
}

export default App;
