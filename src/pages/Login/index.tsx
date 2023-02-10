import React, { useState, Component } from "react";
import { Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

// Styles
import * as S from "./style";

function Login(): React.ReactElement {
    const [accountId, setAccountId] = useState("");
    const [password, setPassword] = useState("");
    async function Login() {
        axios.post("https://todayisdiary.site/user/login", {
            accountId : accountId,
            password : password,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return(
        <>
            <S.Page>
                <S.LoginWrapper>
                    <S.TitleWrapper>
                        <S.LoginTitle>관리자 로그인</S.LoginTitle>
                    </S.TitleWrapper>
                    <S.InputWrapper>
                        <S.IdInput
                            type={"text"} 
                            value={accountId} 
                            onChange={(e) => setAccountId(e.target.value)}
                            placeholder="아이디"
                        />
                        <S.PasswordInput 
                            type={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="비밀번호" 
                        />
                    </S.InputWrapper>
                    <S.SubmitBtn onClick={() => Login()}>로그인</S.SubmitBtn>
                </S.LoginWrapper>
                <S.LogoWrapper>
                    <S.LogoImg src="https://cdn.discordapp.com/attachments/831153482911973398/1049644059188277278/Moon.png" />
                    <S.Title>하루의 끝</S.Title>
                    <S.SubTitle>-Today Is Diary-</S.SubTitle>
                </S.LogoWrapper>
            </S.Page>
        </>
    );
};

export default Login;