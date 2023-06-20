import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className="grid-bg h-screen bg-gray-50">
      {Navbar("contact")}
      <script src="/flowbite.js"></script>

    </main>
  )
}
