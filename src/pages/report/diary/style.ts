import styled from "styled-components";
import "../../../static/assets/fonts/font.css";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #000611 0%, #001234 100%);
`;

export const MainTitle = styled.div`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #ffffff;
    padding-top: 77px;
    padding-left: 215px;
    user-select: none;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`;

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 215px;
    margin-top: 57px;
`;

export const CategoryWrapper = styled.ul`
    position: absolute;
    margin: 30px 0px 0px 0px;
    padding: 0;
`;

export const DropdownBody = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DefaultItem = styled.p`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
    user-select: none;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-top: 0;
`;

export const CategoryItemContainer = styled.li`
    user-select: none;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    `;

export const ItemName = styled.p`
    margin: 10px 0px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
`;

export const Icon = styled.div`
    width: 20px;
    height: 12px;
    margin-top: 8px;
    background-repeat: no-repeat;
    background-image: url("https://cdn.discordapp.com/attachments/831153482911973398/1052089076272091166/dropdown.png");
    :hover{
        cursor: pointer;
    }
`;

export const Search = styled.div`
    margin-right: 225px;
    display: flex;
    align-items: flex-end;
`;

export const SearchBar = styled.input`
    width: 240px;
    height: 34px;
    background: none;
    border-bottom: 2px solid #ffffff;
    border-top: none;
    border-left: none;
    border-right: none;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    outline: none;
    padding-left: 20px;
    padding-right: 40px;
    text-align: center;
`;

export const Contour = styled.hr`
    width: 1480px;
    border: 1px solid #ffffff;
    margin: 0 0 0 215px;
`;

export const Category = styled.div`
    width: 100%;
    height: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DiaryNumber = styled.span`
    width: 265px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.span`
    width: 865px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Reporter = styled.span`
    width: 350px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ReportList = styled.div`
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Number = styled.span`
    width: 265px;
    height: 96px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Context = styled.span`
    width: 865px;
    height: 96px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserName = styled.span`
    width: 350px;
    height: 96px;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 83px 0 0 0;
`;

export const PageNumber = styled.span`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: #ffffff;
    margin-right: 45px;
    :hover{
        cursor: pointer;
    }
`;

