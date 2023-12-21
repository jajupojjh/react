import React from 'react';
import Main from '../components/section/Main';
import { developerText } from '../data/developer';
import { Link } from 'react-router-dom';

const Developer = () => {
    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            <section className="developerpage">
                <div className="developer__inner">
                    {developerText.map((developerpage, key) => (
                        <div className="developer" key={key}>
                            <div className="developer__img play__icon">
                                <Link to={'/channel/${developerpage.channelId}'}>
                                    <img src={developerpage.img} alt={developerpage.name} />
                                </Link>
                            </div>
                            <div className="developer__info">
                            <Link to={'/channel/${developerpage.channelId}'}>
                                {developerpage.name}
                            </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    );
};

export default Developer;