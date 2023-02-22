export default function Form({activeForm, children, grayDiv}){
    return(
    <form className={`grid-one-column grid-small-gap ${grayDiv && `gray-div`} padded no-border-top`} style={{visibility: activeForm? "visible" : "hidden" }}>
        {children}
        <button className="yellow-div padded-top all-borders">Continue</button>
        <span className="small-text line-height">By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
        {!grayDiv && <><hr/><span className="small-text line-height">Buying for work? Create a free business account</span></>}
        <span className="flex-row space-between padded-top">
            <span className="small-text">Conditions of Use</span>
            <span className="small-text">Privacy Notice</span>
            <span className="small-text">Help</span>
        </span>
    </form>)
}