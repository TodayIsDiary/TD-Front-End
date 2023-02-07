import styled from "styled-components";
import "../../../../static/assets/fonts/font.css";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #000611 0%, #001234 100%);
`;

export const Content = styled.div`
    width: 100%;
`;

export const Blank = styled.div`
    width: 100%;
    height: 68px;
`;

export const Contour = styled.hr`
    width: 1400px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
`;

export const ContextWrapper = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    margin-left: 292px;
`;

export const ReportTitle = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
`;

export const Context = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
`;

export const DividingLine = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    margin: 0 10px 0 10px;
`;

export const LongDividingLine = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    margin: 0 10px 0 25px;
`;

export const TitleWrapper = styled.div`
    margin-top: 60px;
    margin-left: 260px;
    display: flex;
`;

export const Title = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #ffffff;
    margin-right: 12px;
`;

export const Date = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
    margin-top: 12px;
`;

export const Writing = styled.div`
    margin-top: 55px;
    margin-bottom: 5px;
    width: 100%;
`;

export const Contents = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    margin-left: 260px;
`;

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 150px;
`;

export const CancelBtn = styled.div`
    width: 535px;
    height: 70px;
    border: 1px solid #ffffff;
    border-radius: 15px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`;

export const ApproveBtn = styled.div`
    width: 535px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 15px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    :hover{
        cursor: pointer;
    }
`