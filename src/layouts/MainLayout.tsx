import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

interface MainLayoutProps {
  children?: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-all duration-300">
      <Navbar />
      <main className="flex-grow pt-16">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  )
}