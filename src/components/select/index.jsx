export const Select = ({options, onChange}) => {
    return(
        <select onChange={onChange}>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}