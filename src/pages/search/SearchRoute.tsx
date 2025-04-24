import { useState } from 'react';
import './SearchRoute.css';
import { useNavigate } from 'react-router';

export default function SearchRoute() {
    const [inputValue, setInputValue] = useState('');
    const [version, setVersion] = useState('Tailwind');
    const navigate = useNavigate(); 
    function checkContent () {
        if (inputValue.trim().length == 0) {
            return;
        } else {
            return navigate(`/${version}/${inputValue}`);
        }
    }
    
    return <div className='container'>
        <div className='inner-container'>
            <div className='title'>Digite o nome de um usuário para pesquisar por ele no github</div>
            <div className='button-container'>
                <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                    className='go-to-page'
                    disabled={ inputValue.trim().length == 0 }
                    onClick={checkContent}>
                    Pesquisar
                </button>
            </div>
            <div className='version-container'>
                <button onClick={() => setVersion('Tailwind')}>
                    Tailwind CSS
                </button>
                <button onClick={() => setVersion('Styled')}>
                    Styled
                </button>
                <div>
                    Versão { version } selecionada.
                </div>
            </div>
        </div>
    </div>;
}