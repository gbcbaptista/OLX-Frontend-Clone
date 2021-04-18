import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
import useApi from '../../helpers/OlxAPI'



import { PageContainer } from '../../components/MainComponents'
import AdItem from '../../components/partials/AdItem';

const Page = () => {
    const api = useApi();

    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([])

    useEffect(()=>{
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect (() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 12
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, [])

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder = "O que você procura?" />
                            <select name="state">
                            <option></option>
                                <option>SP</option>
                                <option>MG</option>
                                <option>RJ</option>
                                <option>PB</option>
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                            )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                            <div className="list">
                                {adList.map((i,k)=>
                                    <AdItem key={k} data={i} />
                                )}
                            </div>
                            <Link to="/ads" className="seeAllLink">Ver Todos</Link>
                            <hr/>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </PageArea>
            </PageContainer>
        </>
        
    );
}

export default Page;