import React, { Component } from 'react';
import AdminService from 'src/service/AdminService';
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






class AdminFAQBoardManagementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page_no: 1,
            keyword: "",
            type: "",
            paging: {},
            categoryIdx: 2,
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
        this.listBoard(this.state.page_no, this.state.keyword, this.state.type, this.state.categoryIdx);
    }

    createBoard() {
        this.props.history.push('/admin/createBoard/_create');
    }


    readBoard(idx) {
        this.props.history.push(`/admin/selectOneBoard/${idx}`);
    }

    componentDidMount() {
        AdminService.getBoards(this.state.page_no, this.state.keyword, this.state.type, this.state.categoryIdx)
            .then((res) => {
                console.log(res);
                this.setState({
                    page_no: res.data.pageInfo.currentPageNo,
                    type: res.data.pageInfo.searchType,
                    keyword: res.data.pageInfo.searchKeyword,
                    categoryIdx: res.data.pageInfo.categoryIdx,
                    paging: res.data.pageInfo,
                    boards: res.data.boardList
                });
            });
    }

    listBoard(page_no, keyword, type, categoryIdx) {
        AdminService.getBoards(page_no, keyword, type, categoryIdx)
            .then((res) => {
                console.log(res)
                this.setState({
                    page_no: res.data.pageInfo.currentPageNo,
                    type: res.data.pageInfo.searchType,
                    keyword: res.data.pageInfo.searchKeyword,
                    categoryIdx: res.data.pageInfo.categoryIdx,
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
            <a href='#!' onClick={() => this.listBoard(page, this.state.keyword, this.state.type, this.state.categoryIdx)}>
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
                <a href="#!" onClick={() => this.listBoard((this.state.paging.currentPageNo - 1), this.state.keyword, this.state.type, this.state.categoryIdx)} tabIndex="-1">
                    <CButton color="secondary">
                        ???
                    </CButton>
                </a>
            );
        }
    }

    isPagingNext() {
        if (this.state.paging.nextPage) {
            return (
                <a href='#!' onClick={() => this.listBoard((this.state.paging.currentPageNo + 1), this.state.keyword, this.state.type, this.state.categoryIdx)} tabIndex="-1" >
                    <CButton color="secondary">
                        ???
                    </CButton>
                </a>
            );
        }
    }

    isMoveToFirstPage() {
        if (this.state.page_no !== 1) {
            return (
                <a href='#!' onClick={() => this.listBoard(1, this.state.keyword, this.state.type, this.state.categoryIdx)} tabIndex="-1">
                    <CButton color="secondary">
                        ??
                    </CButton>
                </a>
            );
        }
    }

    isMoveToLastPage() {
        if (this.state.page_no !== this.state.paging.pageTotalCount) {
            return (
                <a href="#~" onClick={() => this.listBoard((this.state.paging.pageTotalCount), this.state.keyword, this.state.type, this.state.categoryIdx)}>
                    <CButton color="secondary">
                        ??
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
                                ????????? ??????
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    clickableRows
                                    onRowClick={(item) => this.readBoard(item.idx)}
                                    items={boards}
                                    fields={[
                                        { key: 'idx', label: '??????' },
                                        { key: 'title', label: '??????' },
                                        { key: 'writer', label: '?????????' },
                                        { key: 'content', label: '??????' },
                                        { key: 'categoryIdx', label: '????????????' },
                                        { key: 'view', label: '?????????' },
                                        { key: 'likeCnt', label: '?????????' },
                                        { key: 'insertTime', label: '????????????' },
                                        { key: 'updateTime', label: '????????????' }]}
                                    hover
                                    striped
                                    bordered
                                    size="md"
                                />
                                <CButton color="dark" onClick={this.createBoard}> ??? ??????
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
                                                                <option value="">??????</option>
                                                                <option value="title">??????</option>
                                                                <option value="content">??????</option>
                                                                <option value="writer">?????????</option>
                                                            </CSelect>
                                                            <CInput id="keyword" name="keyword" placeholder="???????????? ???????????????." value={keyword || ""} onChange={keywordChange} />

                                                            <CButton onClick={searchClick} type="submit" size="sm" color="secondary"><CIcon content={freeSet.cilSearch} /> ??????</CButton>
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

export default AdminFAQBoardManagementComponent;