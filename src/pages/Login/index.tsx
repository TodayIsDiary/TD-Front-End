import React, { useState, Component } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

function Login(): React.ReactElement {
    return(
        <>
            <S.Page>
                <S.LoginWrapper>
                    <S.TitleWrapper>
                        <S.LoginTitle>관리자 로그인</S.LoginTitle>
                    </S.TitleWrapper>
                    <S.InputWrapper>
                        <S.IdInput type={"text"} placeholder="아이디" />
                        <S.PasswordInput type={"password"} placeholder="비밀번호" />
                    </S.InputWrapper>
                    <S.SubmitBtn>로그인</S.SubmitBtn>
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