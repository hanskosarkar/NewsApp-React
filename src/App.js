import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<NewsContainer setProgress={this.setProgress}  key="home" country="in" category="general" />} />
            {/* <Route exact path='/about'><NewsContainer setProgress={this.setProgress}  country="in" category="about" /></Route> */}
            <Route exact path='/business' element={<NewsContainer setProgress={this.setProgress}  key="business" country="in" category="business" />} />
            <Route exact path='/entertainment' element={<NewsContainer setProgress={this.setProgress}  key="entertainment" country="in" category="entertainment" />} />
            <Route exact path='/general' element={<NewsContainer setProgress={this.setProgress}  key="general" country="in" category="general" />} />
            <Route exact path='/health' element={<NewsContainer setProgress={this.setProgress}  key="health" country="in" category="health" />} />
            <Route exact path='/science' element={<NewsContainer setProgress={this.setProgress}  key="science" country="in" category="science" />} />
            <Route exact path='/sports' element={<NewsContainer setProgress={this.setProgress}  key="sports" country="in" category="sports" />} />
            <Route exact path='/technology' element={<NewsContainer setProgress={this.setProgress}  key="technology" country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}



