import React, {useState} from "react"
import LoginChild from "./Login/LoginChild"
import SignUp from "./SignUp/SignUp"
import FormTab from "./container/FormTab"
export default function Authorization(){
    const [loginActive, setLoginActive] = useState(true)
    const [signUpActive, setSignUpActive] = useState(false)

    function activeForm(){
        setLoginActive(!loginActive)
        setSignUpActive(!signUpActive)
    }
    return(        
        <div className="full-height full-width flex-center flex-column">
            <div className="grid-one-column">
                <h3>Welcome</h3>
                <div className="flex-row">
                    <FormTab message1="Login" message2="Have an account?" activeForm={activeForm} />
                    <FormTab message1="Sign Up" message2="New to Amazon?" activeForm={activeForm} />
                </div>
                <div className="relative">
                <SignUp activeForm={activeForm} formActive={signUpActive}/>
                <LoginChild activeForm={activeForm} formActive={loginActive}/>
                </div>
            </div>
        </div>
    
        )
}