import { use, useEffect, useState } from 'react';
import './News.css';


function News() {

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const getNews = async () => {


        try {
            const response = await fetch("https://newsapi.org/v2/top-headliness?country=us&apiKey=9480aea0168c42e886a4cd472701c4b7");
            const data = await response.json();
            setNews(data);


        } catch (error) {
            console.log("MY CATCH ERROR: " + error);
            setErrorMessage("Something Went Wrong !! Please Try Again");

        } finally {

            setIsLoading(false);
        }

    };

    useEffect(() => {
        getNews();
    }, []);

    if (isLoading) {
        return (
            <div className='spinner-border'>
                <h1>.</h1>
            </div>
        );
    }

    return (

        <section className="trending-section">
            {
                errorMessage == "" ? <div></div> : <div className='alert alert-danger'>{errorMessage}</div>
            }
            <div className="container">



                {/* Header */}
                <div className="trending-header">
                    <h2>Trending Places</h2>

                    <button className="view-btn">
                        VIEW ALL <span>↗</span>
                    </button>
                </div>

                <div className="trending-line"></div>

                {/* Cards */}
                <div className="row g-4">

                    
                    {
                        news!=null &&

                        news.articles.map((article) => (

                            <div className="col-lg-3 col-md-6" >
                                <div className="trending-card">
                                    <img
                                        src={article.urlToImage}
                                        alt=""
                                    />

                                    <div className="card-overlay">

                                        <span className="category">CULTRE</span>

                                        <h3>
                                            {article.title}
                                        </h3>

                                        <div className="meta">
                                            <span>📅 27 AUGUST, 2024</span>
                                            <span>⏱ 20 MINS</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }





                </div>
            </div>
        </section >
    );
}

export default News;