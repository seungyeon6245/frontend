import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../user/user2.js";
import Spinner from "./Spinner";

const OAuth2RedirectHandler = (props) => {
    const dispatch = useDispatch();

    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code));
    }, []);

    return <Spinner />;
};

export default OAuth2RedirectHandler;