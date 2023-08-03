import gartnerlogo from '../assets/gartnerlogo.svg'

export default function Cta2() {
    return (
        <section className="bg-rebrand-primary-blue-D40 mt-[80px]">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-[1100px] xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-wide leading-[45px] font-extrabold text-gray-900 dark:text-white">
                        Gartner Report - How to Successfully Implement API-First Integration
                    </h2>
                    <button
                        type="button"
                        className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-3xl text-sm px-5 py-3 text-center mr-3 md:mr-0 bg-rebrand-primary-blue-default hover:bg-rebrand-primary-blue-D40 mb-4"
                    >
                        Access the report
                    </button>
                </div>

                <img src={gartnerlogo} alt="Gartner" />
            </div>
        </section>
    )
}
