import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsContainer extends Component {

    static defaultProps = {
        country: "in",
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    };


    constructor(props) {
        super(props);
        // console.log("super constructor called inside newscontainer");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `NewsApp - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
    }

    async updateNews() {
        this.props.setProgress(0);
        this.props.setProgress(15);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d3a1536dea9f464e811cf2644a7b9b8d&page=${this.state.page}&pagesize=20`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(75);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }


    async componentDidMount() {
        this.updateNews();
    }

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

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d3a1536dea9f464e811cf2644a7b9b8d&page=${this.state.page}&pagesize=20`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
      };

    render() {

        return (
            <>
                <h2 className='mt-5 text-2xl text-center p-1 sm:text-3xl md:text-4xl font-semibold font-serif mx-3'>NewsApp - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
                {this.state.loading && <Spinner />} 
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}
                    endMessage={
                        <p className='text-center my-5'>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="card-container my-5 mx-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {this.state.articles.map((article) => {
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
}
