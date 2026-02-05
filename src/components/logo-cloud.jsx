import amazonLogo from '@/assets/images/amazon_logo.svg'
import applePodcastsLogo from '@/assets/images/apple_podcasts_logo.svg'
import audibleLogo from '@/assets/images/audible_logo.svg'
import ibooksLogo from '@/assets/images/ibooks_logo.svg'
import spotifyLogo from '@/assets/images/spotify_logo.svg'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function LogoCloud({ className }) {
  return (
    <div
      className={clsx(
        className,
        'flex items-center justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <Link href={'www.audible.com'} target="_blank">
        <Image
          alt="Audible"
          src={audibleLogo}
          className="h-9 w-auto max-sm:mx-auto sm:h-8 lg:h-13"
        />
      </Link>
      <Link
        href={'https://open.spotify.com/show/5ON1DiFWZTyzloqX5NQpTI'}
        target="_blank"
      >
        <Image
          alt="Spotify"
          src={spotifyLogo}
          className="h-8 w-auto max-sm:mx-auto sm:h-8 lg:h-10"
        />
      </Link>
      <Link href={'https://a.co/d/09BNS1Z7'} target="_blank">
        <Image
          alt="Amazon"
          src={amazonLogo}
          className="h-9 w-auto max-sm:mx-auto sm:h-8 lg:h-10"
        />
      </Link>
      <Link href={'https://podcasts.apple.com/'} target="_blank">
        <Image
          alt="Apple Podcasts"
          src={applePodcastsLogo}
          className="h-9 w-auto max-sm:mx-auto sm:h-8 lg:h-13"
        />
      </Link>
      <Link href={'https://www.apple.com/ca/fr/apple-books/'} target="_blank">
        <Image
          alt="iBooks"
          src={ibooksLogo}
          className="h-9 w-auto max-sm:mx-auto sm:h-8 lg:h-14"
        />
      </Link>
    </div>
  )
}
