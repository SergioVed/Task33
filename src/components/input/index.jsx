export const Input = (props) => {
    return(
        <input onChange={props.onChange}>{props.value}</input>
    )
}