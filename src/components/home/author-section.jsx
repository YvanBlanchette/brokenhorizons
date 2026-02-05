import DavidEvanson from '@/assets/images/david_evanson.jpg'
import signature from '@/assets/images/signature.svg'
import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import Image from 'next/image'

function AuthorSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A Word from the Author
        </Heading>
        <div className="mt-12 flex justify-evenly">
          <Image
            alt="David Evanson"
            src={DavidEvanson}
            className="w-auto border-12 border-white shadow-md max-sm:mx-auto lg:h-100"
          />
          <div className="mt-12 flex max-w-160 flex-col gap-y-5 text-lg">
            <p>Thank you for being here.</p>

            <p>
              <b>
                My name is David Evanson, and I&apos;m the author of Broken
                Horizons.
              </b>{' '}
              This series began as a simple question that wouldn&apos;t let me
              go: what happens when exploration stops being a triumph and
              becomes a reckoning? Broken Horizons is my attempt to explore that
              space, the fragile moment where curiosity, science, and human
              limits collide.
            </p>

            <p>
              These stories are written for readers who enjoy science fiction
              that takes its time, that sits with uncertainty, and that treats
              discovery not as spectacle, but as consequence. If you&apos;ve
              chosen to step into this universe, to follow these characters
              beyond what feels safe or familiar, I&apos;m genuinely grateful.
              Writing is a solitary act, but reading completes it.
            </p>

            <p>
              I hope Broken Horizons gives you moments of wonder, tension, and
              reflection and that, when you close the page, a small part of the
              unknown lingers with you a little longer than expected.
            </p>

            <div className="flex w-full items-center justify-between">
              <p>— David Evanson</p>
              <Image
                alt="Signature"
                src={signature}
                className="w-auto lg:h-32"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AuthorSection
