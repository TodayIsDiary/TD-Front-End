import React, { useState } from "react";
import axios from "axios";

// Styles
import * as S from "./style";

function CommentDetail(): React.ReactElement {
    const dropdownItems = ["일기", "댓글", "유저"];
    const [onSelecting, setOnSelecting] = useState<boolean>(true);
    const [selectedItem, setSelectedItem] = useState<string>(dropdownItems[0])
    return(
        <>
            <S.Page>
                <S.Blank />
                <S.Contour />
                <S.ContextWrapper>
                    <S.ReportTitle>게시글 제목</S.ReportTitle>
                    <S.Context>일기가 너무 선정적입니다.</S.Context>
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
                <S.CommentWrapper>
                    <S.Comment>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</S.Comment>
                </S.CommentWrapper>
                <S.BtnWrapper>
                    <S.CancelBtn>신고 취소</S.CancelBtn>
                    <S.ApproveBtn>신고 승인</S.ApproveBtn>
                </S.BtnWrapper>
            </S.Page>
        </>
    );
};

export default CommentDetail;