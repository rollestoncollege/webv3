import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Markdown from "../components/Markdown";

export default function Home({ content }) {
  const markdownContent = `
  What is this site?
============

This site is for Rolleston College Film Club and is ment to be a thing Rolleston College it a school we are a club DONT COME

//   `;
  return (
    <main className="grid-bg bg-gray-50 flex flex-col min-h-screen">
      {Navbar("our")}
      {/* <Markdown content={markdownContent} /> */}
      <div className="w-screen mt-52 mb-10">
        <div className="w-full max-w-2xl m-auto bg-white border border-gray-200 rounded-lg shadow pt-10">
          <div>
            <div className="flex flex-col items-center pb-10">
              <span className="text-sm text-gray-500  p-5 px-10">
                {/* <Markdown content={markdownContent} /> */}

                
              </span>
            </div>
          </div>
        </div>
      </div>

      {Footer()}
      <script src="/flowbite.js"></script>
    </main>
  );
}
