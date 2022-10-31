import './Joinform.css';
import React from 'react';

function Joinform() {
  return (
    <div className="Join-page">
        <div className="form">
            <h1>회원가입</h1>
            <form className="Join-form">
                <p className="textArea">닉네임</p>
                <input type="text"/>
                <p className="textArea">아이디</p>
                <input type="password" />
                <p className="textArea">비밀번호</p>
                <input type="password" />
                <p className="textArea">이메일</p>
                <input type="password" />
                <p className="textArea">전화번호</p>
                <input type="password"/>
                <p className="textArea">학번</p>
                <input type="password"/>
                <p className="textArea">학과</p>
                <input type="password"/>
                <button class="join-button">가입하기</button>
                {/* <p className="message">회원이 아니신가요? <a href="#">회원가입</a></p> */}
            </form>
        </div>
    </div>
  );
}

export default Joinform;