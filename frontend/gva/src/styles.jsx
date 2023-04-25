import styled from 'styled-components';


//NavBar

// export const Navgate = styled.nav`
//     /* display: flex;
//     justify-content: space-around;
//     align-items: center;
//     background-color: #E8E1E2;
//     padding: 14px; */
//     h1 a{
//         color: #000;
//     }

//     span{
//         color: red;
//     }
//         /* ul {
//             display: flex;
//             justify-content: space-between;
//             gap: 5px;
//         } */
//         /* li{
//             list-style-type: none;
//             color: #fff;
//             background-color: #000;
//             padding: 8px;
//             border-radius: 4px;
//         } */

// `;
//Main
export const Container = styled.div`
    background-color: #E8E1E2;
    height: 87vh;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        margin-bottom: 20px;
    }
    p {
        width: 270px;
        text-align: center;
        margin-bottom: 20px;
    }
    ul {
        list-style: none;
    }
    li {

    }
    a {
        color: #000;
    }
    a:visited {
        color: #000;
    }
`;

//Setores 
export const Setores = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;




//form
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

//Footer

export const End = styled.footer`
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
// export const Button = styled.button`
//   background-color: ${props => props.disabled ? 'red' : 'blue'};
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

//   &:hover {
//     background-color: ${props => props.disabled ? 'red' : 'darkblue'};
//   }
// `;
export const PacientClassification = styled.input`
    margin-left: 5px;
`;