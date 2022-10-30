import './loginform.css';
import React from 'react';

function Loginform() {
  return (
    <div>
        <h1>LOGIN</h1>
        <form>
            <div>
                <input type="text" placeholder="아이디"></input>
            </div>
            <div>
                <input type="text" placeholder="비밀번호"></input>
            </div>
            <div>
                <button type="submit">LOGIN</button>
            </div>
            <div>
                아이디 찾기
                비밀번호 찾기
            </div>
        </form>
    </div>
  );
}

export default Loginform;