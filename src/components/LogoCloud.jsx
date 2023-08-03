import eventbrite from '../assets/Eventbrite.svg'
import github from '../assets/Github.svg'
import hackerone from '../assets/hackerone.svg'
import mixpanel from '../assets/mixpanel.svg'
import outreach from '../assets/outreach.svg'
import segment from '../assets/segment.svg'
import thryv from '../assets/thryv.svg'
import typeform from '../assets/typeform.svg'
import udemy from '../assets/udemy.svg'

export default function LogoCloud() {
  return (
    <section className="bg-transparent">
      <div className="flex flex-col justify-center items-center py-8 px-4 mx-auto max-w-[1180px]  sm:py-10 lg:px-9 rounded-2xl overflow-hidden h-[230px]">
        <div className='flex justify-around items-center w-[110%] h-[50%]'>
          <img src={hackerone} alt="hackerone" style={{height: '120px', width: '120px'}}/>
          <img src={typeform} alt="hackerone" style={{height: '120px', width: '120px'}}/>
          <img src={udemy} alt="hackerone" style={{height: '120px', width: '120px'}}/>
          <img src={mixpanel} alt="hackerone" style={{height: '120px', width: '120px'}}/>
          <img src={thryv} alt="hackerone" style={{height: '120px', width: '120px'}}/>
        </div>
        <div className='flex justify-around items-center w-[90%] h-[50%]'>
          <img src={outreach} alt="hackerone" style={{height: '120px', width: '120px'}}/>
          <img src={github} alt="hackerone" style={{height: '120px', width: '120px'}}/>
          <img src={segment} alt="hackerone" style={{height: '120px', width: '120px'}}/>
          <img src={eventbrite} alt="hackerone" style={{height: '120px', width: '120px'}}/>
        </div>
      </div>
    </section>
  )
}
