export default function FormTab({activeForm, message1, message2}){
    return(
        <div className="gray-div flex-column flex-stretch-basis" onClick={activeForm}>
                <span>{message1}</span>
                <span className="small-text">{message2}</span>         
        </div>
    )
}