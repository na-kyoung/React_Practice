import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(event){
    event.preventDefault(); // 이벤트 발생 막음

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log('check value : ' + enteredEmail, enteredPassword);

    // email.current.value = ''; // 초기화 (권장X)
    // password.current.value = ''; // 초기화 (권장X)
    // event.target.reset(); // 전체 초기화 (권장O)

    // 검증
    const emailCheck = enteredEmail.includes('@');

    if(!emailCheck){
      setEmailIsInvalid(true);
      return;
    } else {
      setEmailIsInvalid(false);
    }
    
    console.log('Sending HTTTP request...');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" name="email"
            ref={email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
