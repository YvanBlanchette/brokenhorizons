import { Container } from '@/components/container'
import { CrewRoster } from '@/components/crew/crew-roster'
import Hero from '@/components/crew/hero-section'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'

export default function CrewPage() {
  return (
    <main className="overflow-hidden bg-linear-to-br from-gray-50 from-50% to-gray-100">
      <Hero />
      <main className="py-[10vh]">
        <Container>
          <Subheading>Personnel files</Subheading>
          <Heading as="h1" className="mt-2 max-w-3xl">
            Meet the Crew
          </Heading>
          <p className="mt-4 max-w-2xl text-sm/6 text-gray-600">
            Dossiers de bord du <span className="font-medium">UNS Niña</span>.
            Profils, antécédents et fragments de scènes. Accès partiellement
            restreint.
          </p>
          <CrewRoster className="mt-12 sm:mt-16" />
        </Container>
      </main>
      <Footer />
    </main>
  )
}
