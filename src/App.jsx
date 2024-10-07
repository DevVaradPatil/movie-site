import { BrowserRouter as Router } from "react-router-dom";
import MainApp from "./MainApp";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <MainApp />
      </Router>
    </UserProvider>
  );
}

export default App;
