import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className='container'>
        <div className='wrap'>
            <h1 className='title'>회원가입</h1>
                <div className='bigid'>
                    <input type="text" placeholder='아이디를 입력해주세요.' className='id' />
                    <button>중복확인</button>
                </div>
                <input type="checkbox" className='signup_chk'/>
        </div>
    </div>
  ) 
}

export default Login