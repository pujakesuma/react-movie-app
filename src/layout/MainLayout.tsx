import { ReactNode, useState } from "react"
import Head from "../components/Head"
import { useNavigate } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import { Bars3Icon } from "@heroicons/react/24/outline"


type Props = {
  children: ReactNode,
  title: string
}

const MainLayout = ({ children, title }: Props) => {
  const [isNavClicked, setIsNavClicked] = useState(false)
  const navigate = useNavigate()

  const sideMenu = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/now-playing',
      name: 'Now Playing',
    },
    {
      path: '/popular',
      name: 'Popular',
    },
    {
      path: '/top-rated',
      name: 'Top Rated',
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
    }
  ]
  return (
    <>
      <Head title={title} />
      <header className="z-[9999] h-[64px] grid grid-cols-2 md:grid-cols-5 gap-6 sticky top-0 bg-black">
        <div className="flex w-full items-center justify-start md:justify-center px-4 md:px-0">
          <button type="button" onClick={() => setIsNavClicked(!isNavClicked)} className="focus:outline-none mr-3 block md:hidden">
            <Bars3Icon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
          <div className="text-white text-2xl md:text-4xl font-bold cursor-pointer" onClick={() => navigate('/')}>
            NEBLIX
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 flex justify-end items-center px-4">
          <SearchBar />
        </div>
      </header>
      <main className="min-h-full">
        <ul className={`${isNavClicked ? 'w-full' : 'w-0'} z-[999] h-screen bg-black top-0 left-0 md:w-full fixed block md:hidden px-2 transition-[width] duration-500 ease-in-out`}>
          {
            sideMenu.map((v, i) => (
              <li key={i} className={`${isNavClicked ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
                <button className={title.includes(v.name) ? 'bg-gray-500/20 w-full p-4 rounded-lg' : 'bg-black text-white w-full p-4 rounded-lg hover:bg-gray-500/20'} onClick={() => navigate(v.path)}>{v.name}</button>
              </li>
            ))
          }
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <aside className="h-screen hidden md:col-span-1 md:block sticky top-[64px] bg-black">
            <ul className="w-full px-2">
              {
                sideMenu.map((v, i) => (
                  <li key={i} className="w-full">
                    <button className={title.includes(v.name) ? 'bg-gray-500/20 w-full p-4 rounded-lg' : 'bg-black text-white w-full p-4 rounded-lg hover:bg-gray-500/20'} onClick={() => navigate(v.path)}>{v.name}</button>
                  </li>
                ))
              }
            </ul>
          </aside>
          <div className="md:col-span-4 px-4 md:px-0">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default MainLayout