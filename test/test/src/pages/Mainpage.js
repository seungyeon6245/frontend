import React from 'react';
import './Mainpage.css';
import icon from '../img/icon.png';

const Mainpage = () => {
    return (
        <div>
            <header>
                <img src={icon}/>
                <div className="search_box"></div>
                <div className="button1">
                    <button className="login">로그인</button>
                    |
                    <button className="register"> 회원가입</button>
                </div>
            </header>
            <section className="mp1">
                <div className="mp1_explain">
                    <h3>직거래의 두려움은 멈춰!</h3>
                    밤길에 직거래하기 무서우신가요?
                    <p></p>
                    안전한 장소를 추천해주는 서비스 on
                    <p></p>
                    서로의 위치를 확인할 수 있어 안전성 up
                    <p className="p2"></p>
                    VAMOS는 언제나 당신과 함께합니다.
                </div>
            </section>
            <section className="mp2">
                <div className="mp2_explain">
                    <h3>이게 머선일이고! 우리 학우님 아니신가</h3>
                    중고거래를 했더니 우리 학우님을 만나는 경우가!
                    <p></p>
                    중고거래를 했더니 이런 일석이조가!
                    <p className="p2"></p>
                    멀리서 찾지 마세요!
                </div>
            </section>
            <section className="mp3">
                <div className="mp3_explain">
                    <h2>당신이 찜한 상품, 놓치지 않을거에요!</h2>
                    <p className="p2"></p>
                    <button className="keep_product">
                        찜한 상품 바로 볼게요!
                    </button>
                    <button className="all_product">
                        중고거래 매물 다 볼게요!
                    </button>
                </div>
            </section>
            <section className="mp4">
                <div className="mp4_explain">
                    <h2>더 이상의 설명은 필요없다.</h2>
                    <p className="p2"></p>
                    <div className="filter_box">
                        <button className="filter">
                            빠르게 선택해서 볼래요!
                        </button>
                    </div>
                </div>
            </section>
            <section className="mp5">
                <div className="mp5_explain">
                    <h2>여기 여기 모여라</h2>
                    <p className="p2"></p>
                </div>
            </section>
            <footer className="footer">
                <div className="footer_explain">
                    <img className="icon" src={icon}/>
                </div>
            </footer>

        </div>
    );
};

export default Mainpage;