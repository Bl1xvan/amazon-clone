export default function FormSpan({labelText, inputName}){
    return(
    <span className="flex-column">
        <label>{labelText}</label>
        <input type="text" name={inputName} value="" />
    </span>)
}