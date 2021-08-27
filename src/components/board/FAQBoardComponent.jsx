import React, { Component } from 'react';
import BoardService from 'src/service/BoardService';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CFormGroup,
    CInputGroup,
    CForm,
    CInput,
    CSelect
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import { freeSet } from '@coreui/icons'





class FAQBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page_no: 1,
            keyword: "",
            type: "",
            paging: {},
            boards: []
        }


        this.createBoard = this.createBoard.bind(this);
        this.searchClick = this.searchClick.bind(this);
    }



    typeChange = (e) => {
        this.setState({ type: e.target.value });
    }

    keywordChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    
    searchClick = () => {
        this.setState({ keyword: this.state.keyword });
        this.setState({ type: this.state.type });
        this.listBoard(this.state.page_no, this.state.keyword, this.state.type);
    }

    createBoard() {
        this.props.history.push('/board/create-board/_create');
    }


    readBoard(boardIdx) {
        this.props.history.push(`/board/read-board/${boardIdx}`);
    }

    // rowSelectHandler = () => {
    //     this.readBoard(this.state.boards.boardIdx)
    // }

    componentDidMount() {
        BoardService.getBoards(this.state.page_no, this.state.keyword, this.state.type).then((res) => {
            
            console.log(res);
            this.setState({
                page_no: res.data.pageInfo.currentPageNo,
                type: res.data.pageInfo.searchType,
                keyword: res.data.pageInfo.searchKeyword,
                paging: res.data.pageInfo,
                boards: res.data.boardList
            });

        });

    }

    listBoard(page_no, keyword, type) {
        BoardService.getBoards(page_no, keyword, type).then((res) => {
            
            console.log(res)
            this.setState({
                page_no: res.data.pageInfo.currentPageNo,
                type: res.data.pageInfo.searchType,
                keyword: res.data.pageInfo.searchKeyword,
                paging: res.data.pageInfo,
                boards: res.data.boardList
            });
        });
    }

    viewPaging() {
        const pageNums = [];

        for (let i = this.state.paging.startPageNo; i <= this.state.paging.endPageNo; i++) {
            pageNums.push(i);
        }

        return ((pageNums.map((page) =>
            <a href='#!' onClick={() => this.listBoard(page, this.state.keyword, this.state.type)}>
                <CButton color="secondary" key={page.toString()} >
                    {page}
                </CButton>
            </a>
        )
        ));
    }

    isPagingPrev() {
        if (this.state.paging.prevPage) {
            return (
                <a href="#!" onClick={() => this.listBoard((this.state.paging.currentPageNo - 1), this.state.keyword)} tabIndex="-1">
                    <CButton color="secondary">
                        ‹
                </CButton>
                </a>
            );
        }
    }

    isPagingNext() {
        if (this.state.paging.nextPage) {
            return (
                <a href='#!' onClick={() => this.listBoard((this.state.paging.currentPageNo + 1), this.state.keyword, this.state.type)} tabIndex="-1" >
                    <CButton color="secondary">
                        ›
                    </CButton>
                </a>
            );
        }
    }

    isMoveToFirstPage() {
        if (this.state.page_no !== 1) {
            return (
                <a href='#!' onClick={() => this.listBoard(1, this.state.keyword, this.state.type)} tabIndex="-1">
                    <CButton color="secondary">
                        «
                </CButton>
                </a>
            );
        }
    }

    isMoveToLastPage() {
        if (this.state.page_no !== this.state.paging.pageTotalCount) {
            return (
                <a href="#~" onClick={() => this.listBoard((this.state.paging.pageTotalCount), this.state.keyword, this.state.type)}>
                    <CButton color="secondary">
                        »
                    </CButton>
                </a>
            );
        }
    }



    render() {
        const { keyword } = this.state;
        const { type } = this.state;
        const { typeChange, keywordChange, searchClick } = this;

        const { boards } = this.state;


        return (
            <>
                <CRow>
                    <CCol>
                        <CCard>
                            <CCardHeader>
                                게시글 목록
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    clickableRows
                                    onRowClick={(item) => this.readBoard(item.boardIdx)}
                                    items={boards}
                                    fields={[
                                        { key: 'boardIdx', label: '번호' },
                                        { key: 'title', label: '제목' },
                                        { key: 'content', label: '내용' },
                                        { key: 'writer', label: '작성자' },
                                        { key: 'category', label: '카테고리' },
                                        { key: 'viewCnt', label: '조회수' },
                                        { key: 'noticeYn', label: '공지여부' },
                                        { key: 'deleteYn', label: '삭제여부' }]}
                                    hover
                                    striped
                                    bordered
                                    size="md"
                                />
                                <CButton color="dark" onClick={this.createBoard}> 글 작성
                                </CButton>
                                <nav aria-label="pagination">
                                    <ul className="pagination justify-content-center some-class">
                                        {
                                            this.isMoveToFirstPage()
                                        }
                                        {
                                            this.isPagingPrev()
                                        }
                                        {
                                            this.viewPaging()
                                        }
                                        {
                                            this.isPagingNext()
                                        }
                                        {
                                            this.isMoveToLastPage()
                                        }
                                    </ul>
                                </nav>
                                <CRow>
                                    <CCol xs="12" md="4">
                                    </CCol>
                                    <CCol xs="12" md="4">
                                        <CCardBody align="center">
                                            <CForm className="form-horizontal" >
                                                <CFormGroup row >
                                                    <CCol xs="12" md="12">
                                                        <CInputGroup >
                                                            <CSelect custom name="type" id="type" value={type} onChange={typeChange}>
                                                                <option value="">전체</option>
                                                                <option value="title">제목</option>
                                                                <option value="content">내용</option>
                                                                <option value="writer">작성자</option>
                                                            </CSelect>
                                                            <CInput id="keyword" name="keyword" placeholder="검색어를 입력하세요." value={keyword || ""} onChange={keywordChange} />

                                                            <CButton onClick={searchClick} type="submit" size="sm" color="secondary"><CIcon content={freeSet.cilSearch} /> 검색</CButton>
                                                        </CInputGroup>
                                                    </CCol>
                                                </CFormGroup>
                                            </CForm>
                                        </CCardBody>

                                    </CCol>
                                    <CCol xs="12" md="4">
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </>
        );
    }
}

export default FAQBoardComponent;