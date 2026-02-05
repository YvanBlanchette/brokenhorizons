'use client'

import logo from '@/assets/images/nebulae-logo.svg'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from './link'
import { PlusGridItem } from './plus-grid'

const links = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/login', label: 'Login' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden items-center gap-1 lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex w-full items-center rounded-xl px-4 py-2.5 text-base font-medium text-gray-50/90 backdrop-blur-3xl"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-xl text-gray-50/90 data-hover:bg-white/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-5 py-5">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.07 },
            }}
            key={href}
          >
            <Link
              href={href}
              className="nav-link-hud inline-flex w-full items-center rounded-xl px-3 py-2 text-base font-medium text-gray-50/90 data-hover:bg-white/5 data-hover:text-white"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* double hairline “panel seams” */}
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-white/10" />
        <div className="absolute inset-x-0 top-2 border-t border-white/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }) {
  return (
    <Disclosure
      as="header"
      className="nav-glass relative z-50 flex items-center justify-between px-10 pt-5 pb-4"
    >
      {/* subtle top specular highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />

      {/* optional banner slot (you were passing it but not rendering it) */}
      {banner ? (
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          {banner}
        </div>
      ) : null}

      <Link href="/" title="Home" className="relative flex items-center gap-3">
        <Image src={logo} alt="Nebulae Publishings" className="h-8 w-auto" />
      </Link>

      <DesktopNav />
      <MobileNavButton />
      <MobileNav />

      {/* energy line */}
      <div className="pointer-events-none absolute right-8 bottom-0 left-8 h-px animate-pulse bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* corner “nodes” */}
      <div className="pointer-events-none absolute bottom-1 left-3 size-1.5 -translate-y-1/2 animate-pulse rounded-full bg-cyan-300/35 blur-[0.2px]" />
      <div className="pointer-events-none absolute bottom-1 left-6 size-1.5 -translate-y-1/2 animate-pulse rounded-full bg-cyan-300/35 blur-[0.2px]" />
      <div className="pointer-events-none absolute bottom-1 left-9 size-1.5 -translate-y-1/2 animate-pulse rounded-full bg-cyan-300/35 blur-[0.2px]" />
      <div className="pointer-events-none absolute right-3 bottom-1 size-1.5 -translate-y-1/2 animate-pulse rounded-full bg-cyan-300/35 blur-[0.2px]" />
      <div className="pointer-events-none absolute right-6 bottom-1 size-1.5 -translate-y-1/2 animate-pulse rounded-full bg-cyan-300/35 blur-[0.2px]" />
      <div className="pointer-events-none absolute right-9 bottom-1 size-1.5 -translate-y-1/2 animate-pulse rounded-full bg-cyan-300/35 blur-[0.2px]" />
    </Disclosure>
  )
}
