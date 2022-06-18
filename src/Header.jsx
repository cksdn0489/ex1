import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div><header> 
    {/* <!-- right div안에 회원가입 고객센터 로그인 각각 div3개 --> */}
    <div className="right">
            <div className="rightone"><a href="https://sonyunara.com/member/register.php">회원가입(</a></div>
            <div className="rightoneside"><a href="https://sonyunara.com/member/register.php">+2만원</a></div>
            <div className="sideone"><a href="https://sonyunara.com/member/register.php">)</a></div>
            <div className="righttwo"><a href="https://sonyunara.com/cs/">고객센터</a></div>
            {/* <!-- 로그인버튼 --> */}
            <div className="rightthree">
                <button type="button" className="btm_img" id="img_btn">
                    <a href="https://sonyunara.com/member/login.php">
                    <img src="./img/login.png"/></a>
                </button>
            </div>
    </div>
        <div className="top">
            <div className="topimg">
                <a href="https://sonyunara.com/">
                <img src="./img/SONA.png" href="SONA"/></a>
            </div>
            <div className="topsearch">
                <img src="./img/검색창.png" href="search"/>
            </div>
            <div className="topcheck">
                <img src="./img/출첵.png" href="check"/>
                <strong> 출첵</strong>
            </div>
            <div className="toplike">
                <img src="./img/좋아요.png" href="like"/>
                <strong>좋아요</strong>
            </div>
            <div className="topbasket">
                <img src="./img/장바구니.png" href="basket" />
                <strong>장바구니</strong>
            </div>
            <div className="topplan">
                <img src="./img/기획전.png" href="plan"/>
                <strong>기획전</strong>
            </div>
            <div className="toptime">
                <img src="./img/실시간.png" href="time"/>
            </div>
        </div>
            <div className="nav">
                {/* <!-- 세줄버튼 --> */}
                <div className="navbutton">
                    <button type="button" className="btm_img" id="img_btn">
                        <img src="./img/세줄버튼.png"/>
                    </button>
                </div>

                <div className="navbest">베스트</div>
                <div className="navnew">신상</div>
                <a><strong>아우터</strong></a>
                <a><strong>상의</strong></a>
                <a><strong>셔츠/블라우스</strong></a>
                <a><strong>트레이닝</strong></a>
                <a><strong>베이직</strong></a>
                <a><strong>원피스</strong></a>
                <a><strong>스커트</strong></a>
                <a><strong>팬츠</strong></a>
                <a><strong>가방</strong></a>
                <a><strong>신발</strong></a>
                <a><strong>악세사리</strong></a>

                {/* <!-- 오늘출발 버튼 --> */}
                <div className="navstart">
                    <button type="button" className="btm_img" id="img_btn">
                        <a href="https://sonyunara.com/shop/delivery.php"><img src="./img/오늘출발png.png"/></a>
                    </button>
                </div>
            </div>
  </header></div>
  )
}

export default Header