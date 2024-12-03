import "./App.css";
import { QueryProvider } from "./providers/QueryProvider";
import { Router } from "./components/Router";

function App() {
  return (
    <>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </>
  );
}

export default App;
