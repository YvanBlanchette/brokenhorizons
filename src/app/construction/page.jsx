import Hero from '@/components/construction/hero-section'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'

export default function CrewPage() {
  return (
    <main className="overflow-hidden bg-linear-to-br from-gray-50 from-50% to-gray-100">
      <Hero />

      <main className="py-[10vh]">
        <Container>
          <Subheading>System status</Subheading>

          <Heading as="h1" className="mt-2 max-w-3xl">
            Section under preparation
          </Heading>

          <p className="mt-4 max-w-2xl text-sm/6 text-gray-600">
            This section is currently being assembled. Content is being
            reviewed, organized, and prepared for release.
          </p>

          <p className="mt-6 max-w-2xl text-sm text-gray-500">
            Please check back soon. Some sections may remain temporarily
            restricted.
          </p>
        </Container>
      </main>

      <Footer />
    </main>
  )
}
