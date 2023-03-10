import React, {useState} from "react"

export default function Login(){

    const [loginActive, setLoginActive] = useState(true)
    const [signUpActive, setSignUpActive] = useState(false)

    function activeForm(){
        setLoginActive(!loginActive)
        setSignUpActive(!signUpActive)
    }
    return(
        <div className="full-height full-width flex-center flex-column">
            <div><h3>Welcome</h3></div>
            <div className="round-border grid-one-column">
                <div className="grid-one-column">
                    <span className="gray-div padded">
                        <input type="radio" id="html" name="fav_language" value="signup" onChange={activeForm} />
                        <label for="html">Create account. <span className="small-text">New to amazon?</span></label>
                    </span>
                    <form className="grid-one-column grid-small-gap magenta-div padded" style={{visibility: signUpActive? "visible" : "hidden" }}>
                        <span className="flex-column">
                            <label for="name">First and last name</label>
                            <input type="text" id="name" name="name" value="" />
                        </span>
                        <span className="flex-column">
                            <label for="mobile">Mobile number or email</label>
                            <input type="text" id="mobile" name="mobile" value="" />
                        </span>
                        <span className="flex-column">
                            <label for="password">Create a password</label>
                            <input type="text" id="password" name="password" value="" />
                        </span>
                        <span>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1"><span className="small-text">Show password</span></label>
                        </span>
                        <span className="flex-column">
                            <label for="password">Repeat password</label>
                            <input type="text" id="password" name="password" value="" />
                        </span>
                        <button type="submit" className="yellow-div padded-top">Continue</button>
                    </form> 
                </div>
                <div className="grid-one-column" style={{position: "relative", top: loginActive? "-385px": "0"}}>
                    <span className="gray-div padded">
                        <input type="radio" id="html" name="fav_language" value="login" onChange={activeForm} />
                        <label for="html">Sign in. <span className="small-text">Already a customer?</span></label>
                    </span>
                    <form className="grid-one-column grid-small-gap magenta-div padded" style={{visibility: loginActive? "visible" : "hidden"}}>
                        <span className="flex-column">
                            <label for="mobile">Email or phone number</label>
                            <input type="text" id="mobile" name="mobile" value="" />
                        </span>
                        <span className="flex-column">
                            <label for="mobile">Password</label>
                            <input type="text" id="mobile" name="mobile" value="" />
                        </span>
                        <button type="submit" className="yellow-div padded-top">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}