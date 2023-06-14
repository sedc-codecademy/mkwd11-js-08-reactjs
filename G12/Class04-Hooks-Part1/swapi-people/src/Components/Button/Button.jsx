import "./Button.css";

function Button(props) {
  return (
    <button
      className="Button"
      style={props.btnStyle}
      onClick={props.onBtnClick}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
