export default function Navbar() {
    return (
        
        <nav className="bg-black bg-opacity-70">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="./public/assets/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IT Bootcamp</span>
            </a>
            <div className="flex md:order-2">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul className="flex gap-11 m-2 font-semibold">
                    <li className="text-white hover:text-amber-400">Home</li>
                    <li className="text-white hover:text-amber-400">Profile</li>
                    <li className="text-white hover:text-amber-400">Gallery</li>
                    <li className="text-white hover:text-amber-400">Societies</li>
                    <li className="text-white hover:text-amber-400">Our Team</li>
                </ul>
            </div>
            </div>
        </nav>

    )}