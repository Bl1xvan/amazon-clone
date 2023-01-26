export default function FormTab(activeForm, message1, message2){
    return(
        <span className="gray-div padded">
            <input type="radio" id="html" name="fav_language" value="signup" onChange={activeForm} />
            <label for="html">{message1}. <span className="small-text">{message2}</span></label>
        </span>
    )
}