import OneColumn from "../container/OneColumn"
import Form from "../container/Form"
import FormSpan from "../container/FormSpan"

export default function LoginChild({activeForm}){
    return(
        <OneColumn absolute={true}>
            <Form activeForm={activeForm} grayDiv={false}>
                <FormSpan labelText="Mobile number or email" inputName="email"/>
                <FormSpan labelText="Password" inputName="password"/>
            </Form>
        </OneColumn>)
}