import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import BentoSection from '@/components/home/bento-section'
import { ContactSection } from '@/components/home/contact-section'
import Hero from '@/components/home/hero-section'
import { LogoCloud } from '@/components/logo-cloud'
import { Testimonials } from '@/components/testimonials'
import AuthorSection from '../components/home/author-section'

export const metadata = {
  description:
    'Exploring the edge of the unknown, where discovery reshapes those who dare to look.',
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-linear-to-br from-gray-50 from-50% to-gray-100">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="py-32">
          <AuthorSection />
          <BentoSection />
        </div>
        <ContactSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
