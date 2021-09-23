import { KAKAO_AUTH_URL } from "../shared/OAuth";

import React from 'react';

const Login2 = () => {
    return (
        <div>
            <KaKaoBtn href={KAKAO_AUTH_URL}>
                <img src={kakaologo}></img>
                <span>카카오계정 로그인</span>
            </KaKaoBtn>
        </div>
    );
};

export default Login2;
 