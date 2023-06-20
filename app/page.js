import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home({content}) {
  return (
    <main className="grid-bg bg-gray-50 flex flex-col min-h-screen">
      {Navbar("home")}
      {Footer()}
      <script src="/flowbite.js"></script>
      
    </main>
  )
}
