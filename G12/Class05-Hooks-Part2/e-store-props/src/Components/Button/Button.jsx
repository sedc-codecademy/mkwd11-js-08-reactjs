import "./Button.css";

function Button(props) {
  return (
    <button
      className="Button"
      style={props.btnStyle}
      onClick={props.onBtnClick}
      disabled={props.disabled}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
