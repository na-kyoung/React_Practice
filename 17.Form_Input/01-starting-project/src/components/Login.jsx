import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enterdPassword, setEnterdPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(event){
    event.preventDefault(); // 이벤트 발생 막음
    console.log(enteredValues);
    // console.log('User Email : ' + enteredValues.email);
    // console.log('User Password : ' + enteredValues.password);
  }

  function handleInputChange(identifier, value){
    // 입력창에 보이게 설정
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
  }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value); // 입력창에 보이게 설정
  // }

  // function handlePasswordChange(event){
  //   setEnterdPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
