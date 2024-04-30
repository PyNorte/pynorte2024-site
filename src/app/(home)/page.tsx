import { About } from './about'
import { Schedule } from './schedule'
import { Subscribe } from './subscribe'

export default function Home() {
  return (
    <div className="w-full">
      <Subscribe />

      <div id="about-python" className="pt-32">
        <About />
      </div>

      <div id="schedule" className="pt-32">
        <Schedule />
      </div>
    </div>
  )
}
