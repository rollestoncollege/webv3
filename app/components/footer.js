export default function Navbar() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 mt-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://serv.filmclub.tech/wp-content/uploads/2023/06/20114726/logo_large32-1.png" className="h-8 mr-3" alt="Film Club Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="https://legal.filmclub.tech/Privacy-Policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://legal.filmclub.tech/toc" className="mr-4 hover:underline md:mr-6 ">Terms of Use</a>
                        </li>
                        <li>
                            <a href="https://www.husky.nz" className="mr-4 hover:underline md:mr-6">Provided by HuskyNZ</a>
                        </li>
                        
                        <li>
                            <a href="https://liamsherwin.tech" className="mr-4 hover:underline md:mr-6">Designed By Liam</a>
                        </li>

                        <li>
                            <a href="/" className="mr-4 hover:underline md:mr-6">Content by Rolleston College Film Club</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 - {(new Date().getFullYear())} <a href="https://www.husky.nz" className="hover:underline">HuskyNZ</a> | © 2023  <a href="https://liamsherwin.tech" className="hover:underline">Liam</a> | © 2023  <a href="/" className="hover:underline">Rolleston College Film Club</a>.</span>
            </div>
        </footer>
    )
}

