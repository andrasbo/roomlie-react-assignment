import "./App.css";
import { Layout } from "./components/Layout";
import { TableProvider } from "./providers/TableProvider";

function App() {
  return (
    <TableProvider>
      <Layout></Layout>
    </TableProvider>
  );
}

export default App;
