import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
        width: 80%;

    }
    label span {
        margin-bottom: .3em;
        font-weight: bold;
        text-align: center;
    }
    input {
        border: none;
        border-bottom: 1px solid #ccc;
        padding: .8em 0;
        background-color: transparent;
    }
    input::placeholder {
        text-align: center;
    }
    input:focus {
        outline: none;
    }
    
`;

