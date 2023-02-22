import React, {useState} from "react"
import LoginChild from "./Login/LoginChild"
import SignUp from "./SignUp/SignUp"
import FormTab from "./container/FormTab"
export default function Authorization(){
    const [activeForm, setActiveForm] = useState(true)

    function handleActiveForm(){
        setActiveForm(!activeForm)
    }
    return(        
        <div className="full-height full-width flex-center flex-column">
            <div className="grid-one-column" style={{maxWidth: "350px"}}>
                <img src="./amazon_logo.png" className="side-margin-nowidth bottom-margin-single" width="150px" alt=""  />
                <div className="flex-row">
                    <FormTab message1="Login" message2="Have an account?" activeForm={!activeForm} handleActiveForm={handleActiveForm} grayDiv={true}/>
                    <FormTab message1="Sign Up" message2="New to Amazon?" activeForm={activeForm} handleActiveForm={handleActiveForm} grayDiv={false}/>
                </div>
                <div className="relative">
                <SignUp activeForm={!activeForm}/>
                <LoginChild activeForm={activeForm}/>
                </div> 
            </div>
        </div>
    
        )
}