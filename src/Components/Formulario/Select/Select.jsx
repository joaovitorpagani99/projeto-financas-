import styles from "./select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.from_control}>
      <label htmlFor={name}> {text}: </label>
      <select name={name} id={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
