import {Hero} from '@/components'
import Banner from '@/components/Banner'
import Stats from '@/components/Stats'
import Team from '@/components/Team'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner/>
      <Hero/>
      <Team/>
      <Stats/>
    </main>
  )
}
