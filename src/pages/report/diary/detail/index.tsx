import React, { useState } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

function DiaryDetail(): React.ReactElement {
    const dropdownItems = ["일기", "댓글", "유저"];
    const [onSelecting, setOnSelecting] = useState<boolean>(true);
    const [selectedItem, setSelectedItem] = useState<string>(dropdownItems[0])
    return(
        <>
            <S.Page>
                <S.Blank />
                <S.Content>
                    <S.Contour />
                    <S.ContextWrapper>
                        <S.ReportTitle>신고제목</S.ReportTitle>
                        <S.DividingLine>|</S.DividingLine>
                        <S.Context>일기가 너무 선정적입니다.</S.Context>
                    </S.ContextWrapper>
                    <S.Contour />
                    <S.ContextWrapper>
                        <S.ReportTitle>신고내용</S.ReportTitle>
                        <S.DividingLine>|</S.DividingLine>
                        <S.Context>글을 봤는데 보니 너무 선정적이에요...</S.Context>
                    </S.ContextWrapper>
                    <S.Contour />
                    <S.ContextWrapper>
                        <S.ReportTitle>신고자</S.ReportTitle>
                        <S.LongDividingLine>|</S.LongDividingLine>
                        <S.Context>곰겜</S.Context>
                    </S.ContextWrapper>
                    <S.Contour />
                    <S.ContextWrapper>
                        <S.ReportTitle>글쓴이</S.ReportTitle>
                        <S.LongDividingLine>|</S.LongDividingLine>
                        <S.Context>곰겜</S.Context>
                    </S.ContextWrapper>
                    <S.Contour />
                    <S.TitleWrapper>
                        <S.Title>뭘해도 되는 날</S.Title>
                        <S.Date>2022.07.13 (일)</S.Date>
                    </S.TitleWrapper>
                    <S.Writing>
                        <S.Contents>오늘 정말 뭔가 되는 날인거 같았다. 뭐만 하면 성공쪽으로 갔었고, 뭔가 실수해도 빠르게 해결이 되었다. 오늘은 다른날과 무척 달랐다. 매일 실수를 해서 혼났던</S.Contents>
                        <S.Contour />
                        <S.Contents>내가 오늘은 칭찬까지 받았단 말이다. 오늘 혼났던 내가 오늘은 칭찬까지 받았단 말이다. 오늘은 왠지 뭘해도 될거 같다. 그래서 난 오늘 편의점에서 로또를 사기</S.Contents>
                        <S.Contour />
                        <S.Contents>로 하였다.</S.Contents>
                        <S.Contour />
                    </S.Writing>
                    <S.BtnWrapper>
                        <S.CancelBtn>신고 취소</S.CancelBtn>
                        <S.ApproveBtn>신고 승인</S.ApproveBtn>
                    </S.BtnWrapper>
                </S.Content>
            </S.Page>
        </>
    );
};

export default DiaryDetail;