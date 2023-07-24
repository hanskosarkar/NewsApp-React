import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<NewsContainer setProgress={setProgress} key="home" country="in" category="general" />} />
          {/* <Route exact path='/about'><NewsContainer setProgress={setProgress}  country="in" category="about" /></Route> */}
          <Route exact path='/business' element={<NewsContainer setProgress={setProgress} key="business" country="in" category="business" />} />
          <Route exact path='/entertainment' element={<NewsContainer setProgress={setProgress} key="entertainment" country="in" category="entertainment" />} />
          <Route exact path='/general' element={<NewsContainer setProgress={setProgress} key="general" country="in" category="general" />} />
          <Route exact path='/health' element={<NewsContainer setProgress={setProgress} key="health" country="in" category="health" />} />
          <Route exact path='/science' element={<NewsContainer setProgress={setProgress} key="science" country="in" category="science" />} />
          <Route exact path='/sports' element={<NewsContainer setProgress={setProgress} key="sports" country="in" category="sports" />} />
          <Route exact path='/technology' element={<NewsContainer setProgress={setProgress} key="technology" country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;