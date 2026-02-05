import transitBg from '@/assets/images/transit.jpg'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'

function Hero() {
  return (
    <div
      className="relative h-[95vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${transitBg.src})` }}
    >
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <p className="mb-4 max-w-lg text-base font-medium tracking-wider text-white uppercase">
            Transmission pending
          </p>

          <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-6xl/[0.8] md:text-7xl/[0.8]">
            This section is being prepared
          </h1>

          <p className="mt-8 max-w-lg text-xl/7 font-medium text-white drop-shadow-md sm:text-2xl/8">
            Some files take time to surface.
            <br />
            The crew is still at work, patching systems, reviewing logs, and
            making sure what you find here is worth the wait.
          </p>

          <p className="mt-6 max-w-lg text-base text-white/80">
            Check back soon. The signal will stabilize.
          </p>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/">Return to home</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
