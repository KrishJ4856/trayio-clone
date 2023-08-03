import {AiOutlineRight} from 'react-icons/ai'

export default function Banner() {
  return (
    <div
  id="sticky-banner"
  tabIndex={-1}
  className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 bg-rebrand-primary-blue-D40 hover:bg-rebrand-primary-blue-D30 transition-colors h-[50px] text-center"
>
  <div className="flex items-center mx-auto">
    <p className="flex items-center text-white font-bold text-md">
      <span className='flex justify-center items-center text-[14px] tracking-wide'>
        Tray.io launches solution to remove manual finance work and automate order-to-cash
        <AiOutlineRight style={{color: 'white', width: 'fit-content', height: '20px', marginLeft: '3px', font: 'bold'}}/>
      </span>
    </p>
  </div>
</div>
  )
}