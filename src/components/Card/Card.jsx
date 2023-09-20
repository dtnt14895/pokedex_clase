import "./Card.css";

function Card({ data, speech }) {
  const cardData = `Pókemon, ${data.name}, número: ${data.id}, altura: ${data.height}, peso: ${data.weight}, experiencia base: ${data.base_experience}`;
  speech(cardData)
  return (
    <section>
<div className={`imgs ${data.types[0].type.name}`}>
        <img src={data.sprites?.other.home.front_default} alt={data.name} />
      </div>
      <div className="name"><p>{data.name}</p></div>
      <table className="tabla">
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>Nro.</td>
            <td>{data.id}</td>
          </tr>
 
          <tr>
            <td>Altura</td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td>Peso</td>
            <td>{data.weight}</td>
          </tr>
          <tr>
            <td>Experiencia base</td>
            <td>{data.base_experience}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Card;
