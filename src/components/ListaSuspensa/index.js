import "./LIstaSuspensa.css";

const ListaSuspensa = (props) => {
    console.log(props.itens)
  return (
    <div className="ListaSuspensa">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
