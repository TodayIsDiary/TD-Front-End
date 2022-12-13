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
`;

export const Dropdown = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 215px;
    margin-top: 57px;
`;

export const CategoryWrapper = styled.ul`
    margin: 0;
    padding: 0;
`;

export const Category = styled.li`
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
    user-select: none;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    :first-child{
        margin-bottom: 10px;
    }
`;

export const Icon = styled.div`
    width: 20px;
    height: 12px;
    margin-top: 13px;
    background-repeat: no-repeat;
    background-image: url("https://cdn.discordapp.com/attachments/831153482911973398/1052089076272091166/dropdown.png");
    :hover{
        cursor: pointer;
    }
`;

export const Search = styled.div`

`;

export const SearchBar = styled.input`

`;