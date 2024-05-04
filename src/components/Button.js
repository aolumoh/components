function Button(props) {
  return (
    <input type="button" className={props.colour} value={props.value}></input>
  );
}

export default Button;