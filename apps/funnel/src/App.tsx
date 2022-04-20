import { Layout } from "common";
// import { Welcome } from "oldComponents/Welcome";
import { Button } from 'components';

function App() {
  return (
    <Layout>
      Jag är en layout från packages/common som används i funnel
      <Button>Jag är en knapp i funnel, men kommer egentligen från packages/components</Button>
    </Layout>
  );
}

export default App;
