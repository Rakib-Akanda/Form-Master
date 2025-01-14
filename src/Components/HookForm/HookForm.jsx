import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rakib');
    const emailState = useInputState('rakib@akanda.go')
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(emailState.value, 'Form data');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit " />
            </form>            
        </div>
    );
};

export default HookForm;