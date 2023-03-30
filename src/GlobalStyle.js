import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    overflow-x: hidden;

    body{
        padding: 0;
        margin: 0;
        width: 100%;
        background-color: #e7e2dc;
        overflow-x: hidden;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    #root{
        margin: 0;
        padding: 0;
        width: 100%;
    }
`;

export default GlobalStyle;