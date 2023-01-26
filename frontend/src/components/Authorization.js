import React, {useState} from "react"
import LoginChild from "./Login/LoginChild"
import SignUp from "./SignUp/SignUp"

export default function Authorization(){
    const [loginActive, setLoginActive] = useState(true)
    const [signUpActive, setSignUpActive] = useState(false)

    function activeForm(){
        setLoginActive(!loginActive)
        setSignUpActive(!signUpActive)
    }
    return(        
        <div className="full-height full-width flex-center flex-column">
            <div><h3>Welcome</h3></div>
            <div className="grid-one-column">
                <LoginChild activeForm={activeForm} formActive={loginActive}/>
                <SignUp activeForm={activeForm} formActive={signUpActive}/>
            </div>
        </div>
        )
}