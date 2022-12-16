import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

function Diary(): React.ReactElement {

    const dropdownItems = ["일기", "댓글", "유저"];
    const [onSelecting, setOnSelecting] = useState<boolean>(true);
    const [selectedItem, setSelectedItem] = useState<string>(dropdownItems[0])

    return(
        <>
            <S.Page>
                <S.MainTitle>신고 리스트</S.MainTitle>
                <S.Menu>
                    <S.Dropdown>
                        <S.DropdownBody onClick={()=>setOnSelecting(!onSelecting)}>
                            <S.DefaultItem>{selectedItem}</S.DefaultItem>
                            <S.Icon />
                        </S.DropdownBody>
                            {onSelecting ?
                                <S.CategoryWrapper>
                                    {dropdownItems.map((item) => (
                                        <>
                                            {item !== selectedItem ?
                                                <S.CategoryItemContainer id="item" key={item} onClick={()=>setSelectedItem(item)}>
                                                    <S.ItemName id="comment">{item}</S.ItemName>
                                                </S.CategoryItemContainer>
                                                :
                                                <></>
                                            }
                                        </>
                                    ))}
                                </S.CategoryWrapper>
                                :
                                <></>
                            }
                    </S.Dropdown>
                    <S.Search>
                        <S.SearchBar type={"text"} />
                    </S.Search>
                </S.Menu>
            </S.Page>
        </>
    );
};

export default Diary;