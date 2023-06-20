export default function Footer(current_page) {
    return (
        <nav className="backdrop-blur-sm fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-24">
          <a href="/" className="flex items-center">
            <img src="https://raw.githubusercontent.com/rollestoncollege/logos/main/logos/light/logo_large64.png" className="h-10 mr-3" alt="Flowbite Logo"></img>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Our Work</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li className="w-f">
                {current_page == "home" ? <a href="/" className="navbar-link-current" aria-current="page">Home</a> : <a href="/" className="navbar-link navbar-link">Home</a>}
              </li>
              <li> 
                {current_page == "about" ? <a href="/about" className="navbar-link-current " aria-current="page">About</a> : <a href="/about" className="navbar-link navbar-link">About</a>}
              </li>
              <li>
                {current_page == "services" ? <a href="/about" className="navbar-link-curret " aria-current="page">Services</a> : <a href="/services" className="navbar-link navbar-link" >Services</a>}
              </li>
              <li>
                {current_page == "contact" ? <a href="/contact" className="navbar-link-current " aria-current="page">Contact</a> : <a href="/contact" className="navbar-link navbar-link">Contact</a>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}