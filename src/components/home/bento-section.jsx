import audibleLogo from '@/assets/images/audible_logo-light.svg'
import audiobookImg from '@/assets/images/audiobook.jpg'
import BH1Image from '@/assets/images/bh1.jpg'
import crewImage from '@/assets/images/crew.jpg'
import podcastImg from '@/assets/images/podcast.jpg'
import spotifyLogo from '@/assets/images/spotify_logo.svg'
import universeImage from '@/assets/images/universe.jpg'
import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import Image from 'next/image'
import Link from 'next/link'

function BentoSection() {
  return (
    <Container>
      <Subheading>BROKEN HORIZONS</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more About the Series
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="CHARACTERS"
          title="Meet the crew"
          description="A closer look at the people behind the mission: not heroes, but humans shaped by uncertainty, loyalty, and the weight of what they've seen."
          graphic={
            <div className="group relative h-80 w-full overflow-hidden">
              <Image
                src={crewImage}
                alt="The crew"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                priority={false}
              />

              {/* Click layer on top */}
              <Link
                href="/crew"
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label="Meet the crew"
              />
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="THE UNIVERSE"
          title="Beyond the Story"
          description="Explore the deeper layers of Broken Horizons: the history, science, and unseen forces that exist beyond the page."
          graphic={
            <div className="group relative h-80 w-full overflow-hidden">
              <Image
                src={universeImage}
                alt="The Universe"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                priority={false}
              />

              {/* Click layer on top */}
              <Link
                href="/construction"
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label="Go deeper than the story"
              />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="PODCAST"
          title="Get Extra Data"
          description="Explore Broken Horizons through an immersive audio companion series, featuring exclusive extras and expanded material from the universe."
          graphic={
            <div className="group relative h-80 w-full overflow-hidden">
              <Image
                src={podcastImg}
                alt="Podcast Image"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.00]"
                priority={false}
              />

              {/* <Link
                href="/broken-horizons/bh1"
                aria-disabled="true"
                tabIndex={-1}
                className="absolute inset-0 z-20 cursor-not-allowed"
              /> */}

              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

              <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-2">
                <Image
                  alt="Spotify"
                  src={spotifyLogo}
                  className="h-9 w-auto max-sm:mx-auto sm:h-8 lg:h-14"
                />
                <div className="rounded-full bg-black/70 px-6 py-1 text-sm font-medium tracking-wide text-white">
                  Coming soon
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="BOOK ONE"
          title="Echoes of the Long Silence"
          description="A routine mission into the unknown uncovers a presence that can't
            wait to be found."
          graphic={
            <div className="group relative h-80 w-full overflow-hidden">
              <Image
                src={BH1Image}
                alt="Echoes of the Long Silence"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                priority={false}
              />

              {/* Click layer on top */}
              <Link
                href="/broken-horizons/bh1"
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label="Go deeper than the story"
              />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="AUDIOBOOK"
          title="The story, &nbsp;fully voiced"
          description="Broken Horizons will soon be available as a professionally narrated audiobook on Audible, bringing the universe to life through sound."
          graphic={
            <div className="group relative h-80 w-full overflow-hidden">
              <Image
                src={audiobookImg}
                alt="Audiobook Image"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.00]"
                priority={false}
              />

              {/* <Link
                href="/broken-horizons/bh1"
                aria-disabled="true"
                tabIndex={-1}
                className="absolute inset-0 z-20 cursor-not-allowed"
              /> */}

              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

              <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-2">
                <Image
                  alt="Audible"
                  src={audibleLogo}
                  className="h-9 w-auto translate-x-6 max-sm:mx-auto sm:h-8 lg:h-20"
                />
                <div className="rounded-full bg-black/70 px-6 py-1 text-sm font-medium tracking-wide text-white">
                  Coming soon
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default BentoSection
