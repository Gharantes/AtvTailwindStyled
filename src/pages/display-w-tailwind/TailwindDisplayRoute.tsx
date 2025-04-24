import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function TailwindDisplayRoute() {
    const navigate = useNavigate(); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
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
            setError("Erro ao buscar usuário. Verifique se o nome está correto.")
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
            return 'Usuário não possui nenhum reposítório público.';
        } else if (qtdRepos == 1) {
            return 'Usuário possui 1 repositório público.';
        } else {
            return `Usuário possui ${qtdRepos} repositórios públicos.`;
        }
    }
    if (loading) {
        return (
            <div className="flex w-full h-screen items-center justify-center">
                <div className="text-lg">Carregando...</div>
            </div>
        )
    }
    else if (error != null) {
        return (
            <div className="flex w-full h-screen items-center justify-center">
                <div className="text-red-500 text-lg">{ error }</div>
                <div className="absolute bottom-3 left-3">
                    <button 
                        className="bg-red-500 text-lg text-gray-50 pl-3 pr-3 pt-1 pb-1 hover:bg-red-700 hover:cursor-pointer"
                        onClick={goBack}>Voltar</button>
                </div>
            </div>
        )
    }
    else {
        return <div className="flex flex-col gap-2 items-center justify-center w-full h-screen p-3">
            <h1 className="text-2xl">
                {userData?.name ?? userData?.login}
            </h1>
            <div className="flex flex-col items-center justify-center">
                <img 
                    src={userData?.avatar_url} 
                    alt="Avatar" 
                    width="150" 
                />
                <p className="text-md">
                    {userData?.login}
                </p>
                </div>
                <hr className="bg-stone-950 h-0.5 w-9/12"/>
                <div>{ userData?.bio ?? "Usuário não possui biográfia." }</div>
                <hr className="bg-stone-950 h-0.5 w-9/12"/>
                <div><QtdRepos qtdRepos={userData?.public_repos ?? 0}></QtdRepos>
                <div className="absolute bottom-3 left-3">
                    <button 
                        className="bg-red-500 text-lg text-gray-50 pl-3 pr-3 pt-1 pb-1 hover:bg-red-700 hover:cursor-pointer"
                        onClick={goBack}>Voltar</button>
                </div>
            </div>
        </div>
    }
}