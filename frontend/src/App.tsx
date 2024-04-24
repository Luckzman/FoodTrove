/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import Header from "./components/Header";
import Routes from "./routes/routes";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-5">
        <div className="my-10">
          <Routes />
        </div>
      </div>
    </>
  );
}

export default App;
