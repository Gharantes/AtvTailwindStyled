import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
` 
const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px; 
`;

const Title = styled.div`
    font-size: 1.2rem;
` 

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    height: 40px;
    gap: 10px;
` 

const Input = styled.input`
    font-size: 1rem;
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 1px solid black;
`

const Button = styled.button`
    background: #295ea2;
    color: white;
    font-size: 1rem;
    height: 40px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background:rgb(33, 82, 145);
    }
`;

export { Container, InnerContainer, Title, ButtonContainer, Input, Button }