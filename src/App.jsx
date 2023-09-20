import "./App.css";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import usePokemon from "./services/usePokemon";

function App() {
  const { data, filtered, handleClick, handleSubmit, handleOnChange } = usePokemon();
function speech(text){
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang="es"
  speechSynthesis.speak(utterance)
}
  return (
    <main>
      <Nav
        fnSubmit={handleSubmit}
        fnClick={handleClick}
        fnOnChange={handleOnChange}
        dataOptions={filtered}
      />
      <div className="contenedor">
      {data && <Card data={data} speech={speech}/>}
      </div>
    </main>
  );
}

export default App;
