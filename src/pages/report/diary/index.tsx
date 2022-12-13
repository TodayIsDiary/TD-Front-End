import React, { useState } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

function Diary(): React.ReactElement {
    const [OptionsOpen, setOptionsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(0);
    return(
        <>
            <S.Page>
                <S.MainTitle>신고 리스트</S.MainTitle>
                <S.Menu>
                    <S.Dropdown>
                        <S.CategoryWrapper>
                            <S.Category>일기</S.Category>
                            <S.Category>댓글</S.Category>
                        </S.CategoryWrapper>
                        <S.Icon />
                    </S.Dropdown>
                    {/* <S.Search>
                        <S.SearchBar type={"text"} />
                    </S.Search> */}
                </S.Menu>
            </S.Page>
        </>
    );
};

export default Diary;