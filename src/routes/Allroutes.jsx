
import { Moviedetail, Movielist, Search  } from '../pages'
import { Routes, Route } from 'react-router-dom'
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movielist title="All Movies" apiPath="movie/now_playing" />} />
        <Route path="movie/popular" element={<Movielist title="Popular Movies" apiPath="movie/popular" />} />
        <Route path="movie/top_rated" element={<Movielist title="Top Rated Movies" apiPath="movie/top_rated" />} />
        <Route path="movie/upcoming" element={<Movielist title="UpComing Movies" apiPath="movie/upcoming" />} />
        <Route path="movie/:id" element={<Moviedetail />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
       
      </Routes>
    </>
  )
}

export default Allroutes