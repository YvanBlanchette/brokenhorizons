import crewBg from '@/assets/images/crew-bg.png'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'

function Hero() {
  return (
    <div
      className="relative h-[95vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${crewBg.src})` }}
    >
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <p className="mb-4 max-w-lg text-base font-medium tracking-wider text-white">
            MEET THE CREW OF THE NIÑA
          </p>
          <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-6xl/[0.8] md:text-7xl/[0.8]">
            The Ones Who Went First
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-white drop-shadow-md sm:text-2xl/8">
            Not heroes. Not legends. Just people sent beyond charted space,
            carrying their doubts, their scars, and the quiet hope that the
            universe would make sense.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button className="" href="#">
              LEARN MORE ABOUT THE CREW
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
