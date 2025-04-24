import styled from "styled-components";

const TextoCarregando = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`
const ErrorContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
const ErrorMessage = styled.div`
    color: red;
    font-size: 1.15rem;
`;
const AbsoluteContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
`;
const GoBackButton = styled.button`
    background: red;
    background: #ee0000;
    font-size: 1.2rem;
    color: white;
    padding: 3px 10px 3px 10px;

    &:hover {
        background: #aa0000;
        cursor: pointer;
    }
`

const ResultContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column; align-items: center;
    justify-content: center;
    padding: 15px;
`;
const ResultTitle = styled.h1`
    font-size: 1.3rem;
`
const ResultInnerCointainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
`;
const ResultImage = styled.img`
    width: 150px;
`
const ResultDivider = styled.hr`
    background: black;
    heightt: 8px;
    width: 100%;
`;
const ResultParagraph = styled.div`
    font-size: 1rem;
`



export { 
    TextoCarregando,
    ErrorContainer,
    ErrorMessage,
    AbsoluteContainer,
    GoBackButton,
    ResultContainer,
    ResultTitle,
    ResultInnerCointainer,
    ResultImage,
    ResultDivider,
    ResultParagraph
}