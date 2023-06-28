import "./Button.css";

const Button = props => {
  return (
    <button
      style={props.style}
      className="Button"
      onClick={props.onBtnClick}
      disabled={props.disabled}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
