import "./Nav.css";

function Nav({ fnClick, fnOnChange, dataOptions }) {
  return (
    <nav>
      <div>
        <div id="options">
          <input type="text" onChange={fnOnChange} />
          <div className="sss"><p>{}</p></div>
          <ul>     
            {dataOptions?.map((pokemon, i) => (
              <li key={i}>
                <button value={pokemon.name} onClick={fnClick}>
                  {pokemon.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
