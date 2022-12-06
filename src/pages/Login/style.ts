import styled from "styled-components";
import "../../static/assets/fonts/font.css";
import "../../static/assets/images/user.png"

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("https://cdn.discordapp.com/attachments/831153482911973398/1049593422459187210/background.png");
`;

export const LoginWrapper = styled.div`
    width: 490px;
    height: 630px;
    left: 216px;
    top: 225px;
    border-radius: 25px;
    box-sizing: none;
`;

export const TitleWrapper = styled.div`
    margin-top: 60px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
`;

export const LoginTitle = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    color: #FFFFFF;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 67px;
`;

export const IdInput = styled.input`
    width: 410px;
    height: 58px;
    background: rgba(255, 255, 255, 0.3);
    background-image: url("https://cdn.discordapp.com/attachments/831153482911973398/1049621800641904710/user.png");
    background-repeat: no-repeat;
    background-position: 22px center;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 10px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding-left: 80px;
    margin-bottom: 38px;
    ::placeholder{
        color: #ffffff;
    }
`;

export const PasswordInput = styled.input`
    width: 410px;
    height: 58px;
    background: rgba(255, 255, 255, 0.3);
    background-image: url("https://cdn.discordapp.com/attachments/831153482911973398/1049622525346316308/password.png");
    background-repeat: no-repeat;
    background-position: 22px center;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 10px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding-left: 80px;
    margin-bottom: 80px;
    ::placeholder{
        color: #ffffff;
    }
`;

export const SubmitBtn = styled.button`
    width: 490px;
    height: 58px;
    background: #6C1FD3;
    border-radius: 10px;
    border: none;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    :hover{
        cursor: pointer;
    }
`;

export const LogoWrapper = styled.div`
    width: 484px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    margin-left: 358px;
`;

export const LogoImg = styled.img`
    width: 68px;
    height: 67px;
    margin-bottom: 20px;
`;

export const Title = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 75px;
    color: #ffffff;
    margin-bottom: 20px;
`;

export const SubTitle = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
`;