import "./App.css";
import Home from "./pages/Home";
import FipeProvider from "./providers";

function App() {
  return (
    <FipeProvider>
      <Home />
    </FipeProvider>
  );
}

export default App;
