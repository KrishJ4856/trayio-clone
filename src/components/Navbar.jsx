import {AiOutlineDown} from 'react-icons/ai'
import tray from '../assets/Tray.png'

export default function Navbar() {
    return (
        <nav className="bg-white fixed w-full z-20 left-0 mt-[50px]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center relative right-[100px]">
                    {/* tray.io icons */}
                    <img src={tray} alt="Tray.io" className='w-[140px] h-[40px]'/>
                </a>
                <div className="flex md:order-2 flex-row relative left-[100px]">
                    <button
                        type="button"
                        className="text-blue-700 hover:text-blue-800 font-bold text-md px-5 py-3 text-center mr-3 md:mr-0"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="text-white bg-rebrand-primary-blue-default hover:bg-rebrand-primary-blue-D40 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-sm px-5 py-3 text-center mr-3 md:mr-0"
                    >
                        Get started
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full relative left-[20px] md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li className='pr-1'>
                            <a
                                href="#"
                                className="py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 font-bold flex justify-center items-center"
                                aria-current="page"
                            >
                                Products <AiOutlineDown style={{height: '20px', width: '16px', marginLeft: '7px', marginTop: '2px'}} className='dropdownImg'/>
                            </a>
                        </li>
                        <li className="pr-1">
                            <a
                                href="#"
                                className="flex justify-center items-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 font-bold"
                            >
                                Connectors <AiOutlineDown style={{height: '20px', width: '16px', marginLeft: '7px', marginTop: '2px'}}/>
                            </a>
                        </li>
                        <li className="pr-1">
                            <a
                                href="#"
                                className="flex justify-center items-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 font-bold"
                            >
                                Solutions <AiOutlineDown style={{height: '20px', width: '16px', marginLeft: '7px', marginTop: '2px'}}/>
                            </a>
                        </li>
                        <li className="pr-1">
                            <a
                                href="#"
                                className="flex justify-center items-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 font-bold"
                            >
                                Customers <AiOutlineDown style={{height: '20px', width: '16px', marginLeft: '7px', marginTop: '2px'}}/>
                            </a>
                        </li>
                        <li className="pr-1">
                            <a
                                href="#"
                                className="flex justify-center items-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 font-bold"
                            >
                                Resource & Support <AiOutlineDown style={{height: '20px', width: '16px', marginLeft: '7px', marginTop: '2px'}}/>
                            </a>
                        </li>
                        <li className="pr-1">
                            <a
                                href="#"
                                className="flex justify-center items-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 font-bold"
                            >
                                Company <AiOutlineDown style={{height: '20px', width: '16px', marginLeft: '7px', marginTop: '2px'}}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
