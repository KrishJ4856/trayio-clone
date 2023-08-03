import HomeHero from '../assets/HomeHero.png'

export default function Hero() {
    return (
        <section className="bg-transparent">
            <div className="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-[105px] xl:relative xl:right-[50px] lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-6">
                    <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-normal leading-none md:text-5xl xl:text-6xl text-black">
                        Announcing <br />
                        <span className="text-rebrand-primary-blue-default">Merlin AI</span>
                    </h1>
                    <p className="max-w-2xl mb-4 text-black lg:mb-3 md:text-lg lg:text-xl font-bold tracking-wide">
                    The intelligence powering the first iPaaS that everyone can use to complete business processes using natural language instructions
                    </p>
                    
                    <button
                        type="button"
                        className="text-white bg-rebrand-primary-blue-default hover:bg-rebrand-primary-blue-D40 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-3xl text-sm px-5 py-3 text-center mr-3 md:mr-0 dark:focus:ring-blue-800"
                    >
                        Learn More
                    </button>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
                    <img src={HomeHero} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}
