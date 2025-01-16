import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  // 검증
  // const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@'); // 입력 시 검증
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@'); // 포커스 해제 후 검증

  function handleSubmit(event){
    event.preventDefault(); // 이벤트 발생 막음
    console.log(enteredValues);

    if(emailIsInvalid){ return }

    console.log('Sending HTTTP request...');

    // 초기화
    // setEnteredValues({
    //   email: '',
    //   password: ''
    // });
  }

  function handleInputChange(identifier, value){
    // 입력창에 보이게 설정
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));

    // 입력시 포커스 상태 업데이트
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  // 포커스 해제시 상태 업데이트
  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}/>
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
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