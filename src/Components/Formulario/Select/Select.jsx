import styles from "./select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.from_control}>
      <label htmlFor={name}> {text}: </label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {options && options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
