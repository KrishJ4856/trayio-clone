import homepagevideo from '../assets/homepagevideo.webm'

export default function Feature() {
    return (
        <section className="bg-transparent mt-[80px]">
            <div className=" flex justify-center gap-8 items-center py-8 px-4 mx-auto max-w-[1200px] xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-wide leading-[45px] font-extrabold text-black">
                        Automation happens here
                    </h2>
                    <p className="mb-4 text-gray-700 tracking-normal font-bold md:text-xl">The Tray.io platform makes it simple to connect apps and automate processes at scale, faster than ever before.</p>
                    <button
                        type="button"
                        className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-3xl text-sm px-5 py-3 text-center mr-3 md:mr-0 bg-rebrand-primary-blue-default hover:bg-rebrand-primary-blue-D40 mb-4"
                    >
                        How it works
                    </button>
                </div>

                <video autoPlay loop muted className='ml-[80px]'>
                    <source src={homepagevideo} type='video/webm' />
                </video>
            </div>
        </section>
    )
}
