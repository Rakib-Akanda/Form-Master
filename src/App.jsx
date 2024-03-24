import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
// import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleFrom from './Components/SimpleForm/SimpleFrom'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log(data, "Sign up data");
  // };
  // const handleUpdateSubmit = (data) => {
  //   console.log(data, "Profile update Data");
  // };
  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>

      {/* <SimpleFrom></SimpleFrom>      */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={"Sign up"}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now </p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateSubmit}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
