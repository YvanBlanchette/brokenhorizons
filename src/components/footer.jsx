import logo from '@/assets/images/nebulae-logo.svg'
import Image from 'next/image'
import { Container } from './container'
import { Link } from './link'

function FooterHeading({ children }) {
  return (
    <h3 className="text-xs font-semibold tracking-wider text-white/70 uppercase">
      {children}
    </h3>
  )
}

function FooterLink(props) {
  return (
    <li>
      <Link
        {...props}
        className="text-sm text-white/55 transition hover:text-white/85"
      />
    </li>
  )
}

function SocialIconX(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconInstagram(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 4.33A3.67 3.67 0 108 11.67 3.67 3.67 0 008 4.33zm0 6.02A2.35 2.35 0 118 6a2.35 2.35 0 010 4.35z" />
      <path d="M11.67 4.02a.86.86 0 11-.86-.86.86.86 0 01.86.86z" />
      <path d="M12.12 0H3.88A3.89 3.89 0 000 3.88v8.24A3.89 3.89 0 003.88 16h8.24A3.89 3.89 0 0016 12.12V3.88A3.89 3.89 0 0012.12 0zM14.6 12.12a2.49 2.49 0 01-2.48 2.48H3.88A2.49 2.49 0 011.4 12.12V3.88A2.49 2.49 0 013.88 1.4h8.24A2.49 2.49 0 0114.6 3.88z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Facebook"
        className="text-white/55 transition hover:text-white/85"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        aria-label="Instagram"
        className="text-white/55 transition hover:text-white/85"
      >
        <SocialIconInstagram className="size-4" />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        aria-label="X"
        className="text-white/55 transition hover:text-white/85"
      >
        <SocialIconX className="size-4" />
      </Link>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#070A12]" />

      {/* Subtle holo grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(60% 60% at 50% 10%, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(60% 60% at 50% 10%, black 0%, transparent 70%)',
        }}
      />

      {/* Nebula glow */}
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(238,135,203,0.35), transparent 55%), radial-gradient(circle at 70% 40%, rgba(176,96,255,0.28), transparent 60%), radial-gradient(circle at 50% 70%, rgba(255,241,190,0.18), transparent 60%)',
        }}
      />

      {/* Signal line at top */}
      <div className="relative">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#b060ff]/30 to-transparent" />
      </div>

      <Container className="relative py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Nebulae Publishings"
                className="h-8 w-auto"
              />
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              Broken Horizons explores the fragile boundary between discovery
              and consequence — where the unknown doesn’t just threaten… it
              changes you.
            </p>

            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <FooterHeading>Books</FooterHeading>
              <ul className="mt-4 space-y-3">
                <FooterLink href="/books">All books</FooterLink>
                <FooterLink href="/books/echoes-of-the-long-silence">
                  Book One
                </FooterLink>
                <FooterLink href="/podcast">Podcast</FooterLink>
              </ul>
            </div>

            <div>
              <FooterHeading>Shop</FooterHeading>
              <ul className="mt-4 space-y-3">
                <FooterLink href="/shop">Store</FooterLink>
                <FooterLink href="/shop#signed">Signed copies</FooterLink>
                <FooterLink href="/shop#formats">Formats</FooterLink>
              </ul>
            </div>

            <div>
              <FooterHeading>Explore</FooterHeading>
              <ul className="mt-4 space-y-3">
                <FooterLink href="/series">The series</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/about">About the author</FooterLink>
              </ul>
            </div>

            <div>
              <FooterHeading>Legal</FooterHeading>
              <ul className="mt-4 space-y-3">
                <FooterLink href="/privacy">Privacy policy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Nebulae Editions. All rights reserved.
          </p>

          <p className="text-xs text-white/45">
            <span className="text-white/60">Transmission status:</span> stable —
            signal locked.
          </p>
        </div>
      </Container>
    </footer>
  )
}
