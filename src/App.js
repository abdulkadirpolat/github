import "./styles/app.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
 
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
