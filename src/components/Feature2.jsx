import leader from '../assets/leader.svg'

export default function Feature2() {
    return (
        <section className="bg-white mt-[50px] pt-[30px] flex justify-center items-center">
            <div className=" flex justify-center gap-8 items-center py-8 px-4 mx-auto max-w-[1200px] xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0 relative ml-[10px]">
                    <h2 className="mb-4 text-3xl tracking-wide leading-[45px] font-extrabold text-black">
                        The customer-centric low-code automation platform
                    </h2>
                    <p className="mb-4 text-gray-700 tracking-normal font-bold md:text-lg">See why <span className="text-blue-700">G2</span> named <span className="text-blue-700">Tray.io</span> a Best IT Infrastructure Product for 2022 and 96% of <span className="text-blue-700">Gartner® Peer Insights™</span> reviewers recommend the Tray Platform.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={leader} alt="leader badge" className='h-[390px] w-[250px] ml-[50px]' />
                </div>
            </div>
        </section>
    )
}
