import { useState } from 'react';
import { Button, ButtonContainer, Container, InnerContainer, Input, Title } from './SearchRouteStyle';
import { useNavigate } from 'react-router';

export default function SearchRoute() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); 

    function checkContent () {
        console.log(`/users/${inputValue}`)
        if (inputValue.trim().length == 0) {
            return;
        } else {
            return navigate(`/users/${inputValue}`);
        }
    }
    
    return <Container>
        <InnerContainer>
            <Title>Digite o nome de um usuário para pesquisar por ele no github</Title>
            <ButtonContainer>
                <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button onClick={checkContent}>Pesquisar</Button>
            </ButtonContainer>
        </InnerContainer>
    </Container>;
}