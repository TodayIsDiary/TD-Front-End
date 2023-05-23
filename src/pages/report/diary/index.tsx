import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

function Diary(): React.ReactElement {
    const dropdownItems = ["일기", "댓글", "유저"];
    const [onSelecting, setOnSelecting] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string>(dropdownItems[0])
    const [list, setList] = useState<{ report_id: number; reporter: string; title: string }[]>([]);
    const [viewList, setViewList] = useState<{ report_id: number; reporter: string; title: string }[]>([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get("https://todayisdiary.site/report/list/diary", {
                headers: {
                Authorization: `${localStorage.getItem("TD-Atk")}`,
                },
            });
            setList(response.data.list);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        setViewList(list);
    }, [list]);

    const handleSearch = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = event.target.value;
        const filteredList = list.filter((item) =>
            item.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setViewList(filteredList);
        },
        [list]
    );

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
                        <S.SearchBar placeholder="일기 제목을 검색하세요." type={"text"} onChange={handleSearch} />
                    </S.Search>
                </S.Menu>
                <S.Contour />
                <S.Category>
                    <S.DiaryNumber>일기 번호</S.DiaryNumber>
                    <S.Text>제목</S.Text>
                    <S.Reporter>신고자</S.Reporter>
                </S.Category>
                <S.Contour />
                {viewList.map((data) => (
                    <>
                    <S.ReportList key={data.report_id}>
                        <S.Number>{data.report_id}</S.Number>
                        <S.Context>{data.title}</S.Context>
                        <S.Reporter>{data.reporter}</S.Reporter>
                    </S.ReportList>
                    <S.Contour />
                    </>
                ))}
                <S.PageWrapper>
                    <S.PageNumber>1</S.PageNumber>
                    <S.PageNumber>2</S.PageNumber>
                    <S.PageNumber>3</S.PageNumber>
                </S.PageWrapper>
            </S.Page>
        </>
    )
};

export default Diary;