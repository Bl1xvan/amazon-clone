import OneColumn from "../container/OneColumn"
import Form from "../container/Form"
import FormSpan from "../container/FormSpan"
import FormTab from "../container/FormTab"

export default function LoginChild({activeForm, formActive}){

    return(
        <OneColumn>
            <FormTab message1="Login" message2="Have an account?" activeForm={activeForm} />
            <Form formActive={formActive}>
                <FormSpan labelText="First and Last Name" inputName="name"/>
                <FormSpan labelText="Mobile nuber or email" inputName="email"/>
                <FormSpan labelText="Create a password" inputName="password"/>
                <FormSpan labelText="Repeat Password" inputName="password"/>
            </Form>
        </OneColumn>)
}