import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>Erro 404 - Página não encontrada</h1>

            <Link to="/">Volte para Pagina Principal</Link>
        </div>
    );
}

export default Page;