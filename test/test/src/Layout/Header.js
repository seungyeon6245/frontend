import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        const { logged, onLogout } = this.props;

        return (
            <Container>
                <Element>
                    {logged ?
                        <ShortCut><Link to="/" onClick={onLogout}>로그아웃</Link></ShortCut> :
                        <ShortCut><Link to="/login">로그인/회원가입</Link></ShortCut>}
                    <Logo>
                        <img
                            width="100%"
                            height="100%"
                            src="https://t1.daumcdn.net/cfile/tistory/99CD014B5BD01FA412"
                            alt="logo"/>
                    </Logo>
                    <Search>
                        <Link to="/" style={{textDecoration: 'none', color:'#274046'}}>
                            <h1>React Blog</h1>
                        </Link>
                    </Search>
                </Element>
            </Container>
        );
    }
}

export default Header;