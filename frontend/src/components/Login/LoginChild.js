import OneColumn from "../container/OneColumn"
import Form from "../container/Form"
import FormSpan from "../container/FormSpan"

export default function LoginChild({formActive}){
    return(
        <OneColumn absolute={true}>
            <Form formActive={formActive}>
                <FormSpan labelText="Mobile nuber or email" inputName="email"/>
                <FormSpan labelText="Password" inputName="password"/>
            </Form>
        </OneColumn>)
}