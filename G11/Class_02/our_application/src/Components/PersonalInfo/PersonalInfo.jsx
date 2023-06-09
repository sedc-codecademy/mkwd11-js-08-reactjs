const PersonalInfo = (props) => {
    return (
        <h3 style={{color: props.color}}>{props.message} {props.fullName}.</h3>
    )
}


export default PersonalInfo;