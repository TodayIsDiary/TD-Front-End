import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

function Diary(): React.ReactElement {

    const dropdownItems = ["댓글", "일기", "유저"];
    const [onSelecting, setOnSelecting] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string>(dropdownItems[0])
    const [list, setList] = useState<{ reportId: number; reporter: string; title: string}>({
        reportId: 1,
        reporter: "",
        title: ""
    });
    const [viewList, setViewList] = useState([]);
    const [reportId, setReportId] = useState(0);
    const [reporter, setReporter] = useState("");
    const [title, setTitle] = useState("");

    async function ReportList() {
        axios.get("https://todayisdiary.site/report/list/user", {
            params: {
                list: [
                    {
                        reportId: reportId,
                        reporter: reporter,
                        title: title
                    }
                ]
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
        })
    };

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
                <S.Contour />
                <S.Category>
                    <S.DiaryNumber>일기 번호</S.DiaryNumber>
                    <S.Text>제목</S.Text>
                    <S.Reporter>신고자</S.Reporter>
                </S.Category>
                <S.Contour />
                {/* {viewList.map(list =>
                    <S.ReportList>
                        <S.Number>{list.reportId}</S.Number>
                    </S.ReportList>
                )} */}
                {/* <S.ReportList>
                    <S.Number>1</S.Number>
                    <S.Context>김호영이 사람을 노동착취 해요.</S.Context>
                    <S.UserName>이상운</S.UserName>
                </S.ReportList>
                <S.Contour />
                <S.ReportList>
                    <S.Number>2</S.Number>
                    <S.Context>김호영이 사람을 노동착취 해요.</S.Context>
                    <S.UserName>이상운</S.UserName>
                </S.ReportList>
                <S.Contour />
                <S.ReportList>
                    <S.Number>3</S.Number>
                    <S.Context>김호영이 사람을 노동착취 해요.</S.Context>
                    <S.UserName>이상운</S.UserName>
                </S.ReportList>
                <S.Contour />
                <S.ReportList>
                    <S.Number>4</S.Number>
                    <S.Context>김호영이 사람을 노동착취 해요.</S.Context>
                    <S.UserName>이상운</S.UserName>
                </S.ReportList>
                <S.Contour />
                <S.ReportList>
                    <S.Number>5</S.Number>
                    <S.Context>김호영이 사람을 노동착취 해요.</S.Context>
                    <S.UserName>이상운</S.UserName>
                </S.ReportList>
                <S.Contour /> */}
                <S.PageWrapper>
                    <S.PageNumber>1</S.PageNumber>
                    <S.PageNumber>2</S.PageNumber>
                    <S.PageNumber>3</S.PageNumber>
                </S.PageWrapper>
            </S.Page>
        </>
    );
};

export default Diary;