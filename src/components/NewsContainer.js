import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsContainer = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const updateNews = async () => {
        props.setProgress(0);
        props.setProgress(15);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=d3a1536dea9f464e811cf2644a7b9b8d&page=${page}&pagesize=20`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);
        props.setProgress(75);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        document.title = `NewsApp - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`
        // eslint-disable-next-line
    }, []);

    // handleNextClick = () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     });
    //     this.updateNews();

    // }

    // handlePrevClick = () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     });
    //     this.updateNews();
    // }

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=d3a1536dea9f464e811cf2644a7b9b8d&page=${page}&pagesize=20`;
        
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };


    return (
        <>
            <h2 className='mt-5 text-2xl text-center p-1 sm:text-3xl md:text-4xl font-semibold font-serif mx-3'>NewsApp - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
                endMessage={
                    <p className='text-center my-5'>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className="card-container my-5 mx-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {articles.map((article) => {
                        return (
                            <NewsItem key={article.url} title={article.title} description={article.description} author={article.author} publishedOn={article.publishedAt} source={article.source.name} imgUrl={article.urlToImage ? article.urlToImage : "https://ichef.bbci.co.uk/news/1024/branded_news/D6CC/production/_130388945_gettyimages-1368413671.jpg"} newsUrl={article.url} />
                        )
                    })}
                </div>
            </InfiniteScroll>
            {/* <div className="flex justify-between items-center my-3 mx-5">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className={`${this.state.page <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        &larr; Previous
                    </button>
                    <button>{this.state.page}</button>
                    <button disabled={this.state.page === Math.ceil(this.state.totalResults / 20)} onClick={this.handleNextClick} className={`${this.state.page === Math.ceil(this.state.totalResults / 20) ? 'cursor-not-allowed' : 'cursor-pointer'} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        Next &rarr;
                    </button>
                </div> */}


        </>
    )

}


NewsContainer.defaultProps = {
    country: "in",
    category: "general"
}

NewsContainer.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
};

export default NewsContainer;