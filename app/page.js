import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'
import MarkdownDisplay from './components/MarkdownDisplay'

export default function Home({content}) {
  return (
    <main className="grid-bg bg-gray-50 flex flex-col min-h-screen">
      {Navbar("home")}
      <MarkdownDisplay content={content} />
      {Footer()}
      <script src="/flowbite.js"></script>
      
    </main>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'content.md');
  const content = fs.readFileSync("/test.md", 'utf-8');

  return {
    props: {
      content,
    },
  };
}