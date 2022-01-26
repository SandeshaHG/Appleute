import "./App.css";
import { GlobalState } from "./contexts/GlobalState";
import Redirect from "./components/Redirect";

function App() {
  return (
    <div class="root">
      <GlobalState>
        <Redirect />
      </GlobalState>
    </div>
  );
}

export default App;
