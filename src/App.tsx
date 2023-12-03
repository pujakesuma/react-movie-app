import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import NowPlayingScreen from './pages/NowPlayingScreen';
import SearchResultScreen from './pages/SearchResultScreen';
import PopularScreen from './pages/PopularScreen';
import TopRatedScreen from './pages/TopRatedScreen';
import UpcomingScreen from './pages/UpcomingScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/movie/:id' element={<DetailScreen />} />
        <Route path='/results' element={<SearchResultScreen />} />
        <Route path='/now-playing' element={<NowPlayingScreen />} />
        <Route path='/popular' element={<PopularScreen />} />
        <Route path='/top-rated' element={<TopRatedScreen />} />
        <Route path='/upcoming' element={<UpcomingScreen />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  )
}

export default App
