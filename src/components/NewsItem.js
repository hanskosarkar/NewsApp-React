import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let { title, description, imgUrl, newsUrl, author, publishedOn, source } = this.props;

        return (
            <div className="max-w-sm h-fit relative mx-auto bg-white border border-gray-200 rounded-lg shadow">

                <img className="rounded-t-lg" src={imgUrl} alt="img" />
                

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                    <span className="bg-red-100 absolute top-0 text-red-800 text-xs font-medium m-0 right-0 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{source}</span>
                    <p className="mb-3 font-normal text-gray-700">{description}</p>
                    <p className='mb-3 text-sm text-gray-600'>By {author ? author : "unknown"} on {new Date(publishedOn).toGMTString()}</p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>
        )
    }
}
