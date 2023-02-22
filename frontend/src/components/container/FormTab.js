export default function FormTab({grayDiv, handleActiveForm, activeForm, message1, message2}){
    return(
        <div className={`${grayDiv && `gray-div`} padded-top-bottom flex-column flex-stretch-basis no-border-bottom`} onClick={handleActiveForm}>
                {activeForm ? <span className="bold">{message1}</span> : <span>{message1}</span>}
                <span className={`${activeForm && `underline`} small-text`}>{message2}</span>         
        </div>
    )
}