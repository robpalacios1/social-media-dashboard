import React from 'react'
import Card from './Card'

const cardListData = [
    {
        username: '@Pepito'
    },
    {
        username: '@Luisa'
    },
    {
        username: '@Michu'
    },
    {
        username: '@Blacky'
    }
]

function TopCardList() {
    return (
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map((cardData) =>
                            <Card key={cardData.mapusername} username={cardData.username} />
                        )
                    }

                    {/*<article className="card twitter">
                        <p className="card-title">
                            <img src="images/icon-twitter.svg" alt="" />
                            @RobertoPalacios
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">28k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt="" />
                            12 Today
                        </p>
                    </article>
                    <article className="card instagram">
                        <p className="card-title">
                            <img src="images/icon-instagram.svg" alt="" />
                            @RobertoPalacios
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">6k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt="" />
                            12 Today
                        </p>
                    </article>
                    <article className="card youtube">
                        <p className="card-title">
                            <img src="images/icon-youtube.svg" alt="" />
                            @RobertoPalacios
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">12k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt="" />
                            12 Today
                        </p>
                    </article>*/}
                </div>
            </div>
        </section>
    )
}

export default TopCardList
