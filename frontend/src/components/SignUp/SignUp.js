import OneColumn from "../container/OneColumn"
import Form from "../container/Form"
import FormSpan from "../container/FormSpan"

export default function SignUp({formActive}){

    return(
        <OneColumn absolute={false}>
            <Form formActive={formActive}>
                <FormSpan labelText="First and Last Name" inputName="name"/>
                <FormSpan labelText="Mobile nuber or email" inputName="email"/>
                <FormSpan labelText="Create a password" inputName="password"/>
                <FormSpan labelText="Repeat Password" inputName="password"/>
            </Form>
        </OneColumn>)
}