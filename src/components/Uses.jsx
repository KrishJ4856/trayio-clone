import employee1 from '../assets/employee1.png'
import employee2 from '../assets/employee2.png'
import employee3 from '../assets/employee3.png'
import pointer from '../assets/pointer.svg'

export default function Uses() {
  return (
    <section className="bg-transparent">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-0 lg:space-y-0">
          {/* Pricing Card */}
          <div className="flex flex-col justify-center items-center p-6 mx-auto max-w-[350px] text-center text-black bg-white rounded-3xl shadow xl:px-8 xl:py-4">
            <h3 className="mb-4 text-xl font-semibold">For business users</h3>
            <img src={employee1} alt="employee1" style={{ height: '180px', width: '280px' }} />
            <h2 className='mt-5 text-2xl font-semibold tracking-wide'>A collaborative, low-code UX</h2>
            {/* List */}
            <ul role="list" className="mb-8 mt-6 space-y-4 text-left">
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>Connect instantly to over 600+ apps</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>Eliminate manual work, without limits</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>
                  Build as a team to innovate fast
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-3xl text-sm px-5 py-3 text-center mr-3 md:mr-0 bg-rebrand-primary-blue-default hover:bg-rebrand-primary-blue-D40 mb-4"
            >
              Try Automation Platform
            </button>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col justify-center items-center p-6 mx-auto max-w-[350px] text-center text-black bg-white rounded-3xl shadow xl:px-8 xl:py-4">
            <h3 className="mb-4 text-xl font-semibold">For technologists + IT</h3>
            <img src={employee2} alt="employee2" style={{ height: '180px', width: '280px' }} />
            <h2 className='mt-5 text-2xl font-semibold tracking-wide'>Stay in control with robust governance</h2>
            {/* List */}
            <ul role="list" className="mb-8 mt-6 space-y-4 text-left">
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>Limit your risk with enterprise security and compliance</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>Scale elastically, without costly provisioning</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>
                  Empower your business teams to automate
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-3xl text-sm px-5 py-3 text-center mr-3 md:mr-0 bg-rebrand-primary-blue-default hover:bg-rebrand-primary-blue-D40 mb-4"
            >
              Enterprise-class
            </button>
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col justify-center items-center p-6 mx-auto max-w-[350px] text-center text-black bg-white rounded-3xl shadow xl:px-8 xl:py-4">
            <h3 className="mb-4 text-xl font-semibold">For ISVs + service teams</h3>
            <img src={employee3} alt="employee3" style={{ height: '180px', width: '280px' }} />
            <h2 className='mt-5 text-2xl font-semibold tracking-wide'>Deliver customer integrations, fast</h2>
            {/* List */}
            <ul role="list" className="mb-8 mt-6 space-y-4 text-left">
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>Scale integrations fully embedded in your app</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>Deliver bespoke integrations 10X faster</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                {/* Icon */}
                <img src={pointer} alt="=>" style={{position: 'relative', top: '7px'}}/>
                <span>
                  Transform integrations into a revenue driver
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-3xl text-sm px-5 py-3 text-center mr-3 md:mr-0 bg-rebrand-primary-blue-default hover:bg-rebrand-primary-blue-D40 mb-4"
            >
              Try Embedded
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
