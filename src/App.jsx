
// Importa o BrowserRouter e chama de Router (alias == apelido)
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Nav from "./Components/Nav/Nav";

export default function App() {
  return (
    <Router>
      <AppRoutes />
      <Nav />
    </Router>
  );
}
