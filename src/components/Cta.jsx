import svg from '../assets/image.svg'

export default function Cta() {
  return (
    <section className="bg-transparent mt-9">
  <div className="flex flex-row py-8 px-4 mx-auto bg-rebrand-primary-blue-D40 max-w-[1100px] sm:py-10 lg:px-9 rounded-2xl overflow-hidden h-[380px]">
    <div className="max-w-screen-sm">
      <h2 className="mb-5 mt-2 text-4xl tracking-wide font-extrabold text-gray-900 dark:text-white">
      Love your work, automate the rest
      </h2>
      <p className="font-light text-white sm:text-base tracking-wide">
      Tray.io is a low-code automation platform designed for both non-technical and technical users to create sophisticated workflow automations that facilitate efficient data movement and actions across multiple applications. Our low-code builder and new Merlin AI transform the automation process by bringing together the power of flexible, scalable automation; support for advanced business logic; and native generative AI capabilities that anyone can use.
      </p>
    </div>
    <img src={svg} alt="svg" style={{width: '500px', height: '500px', position: 'relative', left: '80px', bottom: '80px', filter: 'opacity(0.3)'}} />
  </div>
</section>
  )
}
