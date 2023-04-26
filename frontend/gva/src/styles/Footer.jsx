import styled from "styled-components";

export const Footerr = styled.footer`
    background-color: #E8E1E2;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    
    ul{
        display: flex;
        gap: 40px;
        list-style: none;
        margin-top: 15px;
    }
    li {
        display: flex;
        align-items: center;
        gap: 3px;
    }
    a {
        color: #000;
    }
    a:visited {
        color: #000;
    }
`;