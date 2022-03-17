import "./styles.css";
import { BookCard } from "./components/BookCard";
import { useAllBooks } from "./hooks/useAllBooks";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router"

export default function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
