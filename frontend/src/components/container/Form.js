export default function Form({formActive, children}){
    return(
    <form className="grid-one-column grid-small-gap magenta-div padded" style={{visibility: formActive? "visible" : "hidden" }}>
        {children}
    </form>)
}