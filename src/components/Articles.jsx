import api from '../assets/api.png'
import blogcover from '../assets/blogcover.png'
import nucleus from '../assets/nucleus.png'
import {BsArrowRightShort} from 'react-icons/bs'

export default function Articles() {
    return (
        <section className="bg-white w-full mb-[200px] flex justify-center items-center flex-col">
            <h2 className='text-4xl mb-[50px] font-bold'>Find integration inspiration from the Tray.io community</h2>

            <div className="max-w-screen-xl flex justify-center items-center">
                <div className="w-[350px] h-[450px] max-w-sm bg-white rounded-[20px] shadow hover:cursor-pointer blogcard mr-[50px]">
                    <a href="#"> 
                        <img
                            className="rounded-t-[20px] h-[200px]"
                            src={blogcover}
                            alt="blogcover"
                        />
                    </a>
                    <button className='bg-rebrand-primary-blue-L30 text-sm text-black font-bold px-[12px] py-[6px] rounded-[30px] mt-[20px] ml-[20px]'>GUIDE</button>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-2xl mb-[50px] tracking-wide mt-[20px] text-black">
                                3 Keys for scaling modern integration demands
                            </h5>
                        </a>
                        <div>
                            <div className='flex justify-center items-center h-[60px] w-[60px] mt-[-30px] ml-[-15px]'>
                                <BsArrowRightShort style={{height: '30px', width: '30px', color: 'blue'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog2 */}

                <div className="w-[350px] h-[450px] max-w-sm bg-white rounded-[20px] shadow hover:cursor-pointer blogcard mr-[50px]">
                    <a href="#" className='flex justify-center items-center'> 
                        <img
                            className="rounded-t-[20px] h-[150px] w-[250px] mb-[45px]"
                            src={nucleus}
                            alt="nucleus logo"
                        />
                    </a>
                    <button className='bg-rebrand-primary-blue-L30 text-sm text-black font-bold px-[12px] py-[6px] rounded-[30px] mt-[20px] ml-[20px]'>GUIDE</button>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-2xl mb-[25px] tracking-wide mt-[20px] text-black">
                                Tray.io named a leader in the 2023 Nucleus Research iPaaS Value Matrix
                            </h5>
                        </a>
                        <div>
                            <div className='flex justify-center items-center h-[60px] w-[60px] mt-[-30px] ml-[-15px]'>
                                <BsArrowRightShort style={{height: '30px', width: '30px', color: 'blue'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog 3 */}

                <div className="w-[350px] h-[450px] max-w-sm bg-white rounded-[20px] shadow hover:cursor-pointer blogcard mr-[40px]">
                    <a href="#"> 
                        <img
                            className="rounded-t-[20px] h-[200px]"
                            src={api}
                            alt="api image"
                        />
                    </a>
                    <button className='bg-rebrand-primary-blue-L30 text-sm text-black font-bold px-[12px] py-[6px] rounded-[30px] mt-[20px] ml-[20px]'>GUIDE</button>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-2xl mb-[50px] tracking-wide mt-[20px] text-black">
                                How to Successfully Implement API-First Integration
                            </h5>
                        </a>
                        <div>
                            <div className='flex justify-center items-center h-[60px] w-[60px] mt-[-30px] ml-[-15px]'>
                                <BsArrowRightShort style={{height: '30px', width: '30px', color: 'blue'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
