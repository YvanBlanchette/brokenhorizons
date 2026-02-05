import heroBg from '@/assets/images/hero-bg.png'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'

function Hero() {
  return (
    <div
      className="relative h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <p className="mb-4 max-w-lg text-base font-medium tracking-wider text-white">
            NEW SCI-FI SERIES AVAILABLE NOW
          </p>
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Broken Horizons
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-white drop-shadow-md sm:text-2xl/8">
            Exploring the edge of the unknown, where discovery reshapes those
            who dare to look.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button className="" href="#">
              ENTER THE UNIVERSE
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
