import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AbsoluteContainer, ErrorContainer, ErrorMessage, GoBackButton, ResultContainer, ResultDivider, ResultImage, ResultInnerCointainer, ResultParagraph, ResultTitle, TextoCarregando } from "./StyledDisplayStyle";

export default function StyledDisplayRoute() {
    const navigate = useNavigate(); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean>(false);
    
    const [userData, setUserData] = useState<{
        name: string,
        avatar_url: string,
        login: string,
        bio: string | null,
        public_repos: number
    } | null>(null);
    const { id } = useParams(); 
    
    function goBack() {
        return navigate('/');
    }
    async function getGithubData () {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${id}`);
            if (!res.ok) {
                throw new Error();
            }
            const data = await res.json();
            setUserData(data);
        } catch(err) {
            setError(true)
        } finally {
            setLoading(false);
        }
        setLoading(false);
    }
    useEffect(() => {
        getGithubData();
    }, []);


    function QtdRepos({ qtdRepos }: { qtdRepos: number | null }) {
        if (qtdRepos == null || qtdRepos == 0) {
            return (
                <ResultParagraph>Usuário não possui nenhum reposítório público.</ResultParagraph>
            );
        } else if (qtdRepos == 1) {
            return (
                <ResultParagraph>Usuário possui 1 repositório público.</ResultParagraph>
            );
        } else {
            return (
                <ResultParagraph>Usuário possui {qtdRepos} repositórios públicos.</ResultParagraph>
            );
        }
    }

    if (loading) {
        return (
            <TextoCarregando>Carregando...</TextoCarregando>
        )
    }
    else if (error) {
        return (
            <ErrorContainer>
                <ErrorMessage>Erro ao buscar usuário. Verifique se o nome está correto.</ErrorMessage>
                <AbsoluteContainer>
                    <GoBackButton onClick={goBack}>Voltar</GoBackButton>
                </AbsoluteContainer>
            </ErrorContainer>
        )
    }
    else {
        return (
            <ResultContainer>
                <ResultTitle>{userData?.name ?? userData?.login}</ResultTitle>
                <ResultInnerCointainer>
                    <ResultImage src={userData?.avatar_url} alt="Avatar"></ResultImage>
                    <ResultParagraph>{userData?.login}</ResultParagraph>
                    <ResultDivider />
                    <ResultParagraph>{ userData?.bio ?? "Usuário não possui biográfia." }</ResultParagraph>
                    <ResultDivider />
                    <QtdRepos qtdRepos={userData?.public_repos ?? 0 } />
                </ResultInnerCointainer>
                <AbsoluteContainer>
                    <GoBackButton onClick={goBack}>Voltar</GoBackButton>
                </AbsoluteContainer>
            </ResultContainer>
        )
    }
}