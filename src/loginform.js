import './loginform.css';
import React from 'react';

function Loginform() {
  return (
    <div className="login-page">
    <div className="form">
    <h1>로그인</h1>
    <form className="login-form">
      <input type="text" placeholder="아이디"/>
      <input type="password" placeholder="비밀번호"/>
      <button>login</button>
      <p className="message">회원이 아니신가요? <a href="#">회원가입</a></p>
    </form>
  </div>
</div>
  );
}

export default Loginform;