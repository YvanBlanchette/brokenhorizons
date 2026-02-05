'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { crew } from './crew-data'

function roleAccent(role) {
  switch (role) {
    case 'Command':
      return 'from-[#fff1be]/25 via-white/0 to-white/0'
    case 'Pilot':
      return 'from-[#ee87cb]/22 via-white/0 to-white/0'
    case 'Navigation':
      return 'from-[#b060ff]/22 via-white/0 to-white/0'
    case 'Engineering':
      return 'from-[#ee87cb]/18 via-white/0 to-white/0'
    case 'Science':
      return 'from-[#b060ff]/18 via-white/0 to-white/0'
    case 'AI':
      return 'from-white/18 via-white/0 to-white/0'
    default:
      return 'from-white/12 via-white/0 to-white/0'
  }
}

function StatusPill({ status }) {
  const styles =
    status === 'Active'
      ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200'
      : status === 'Injured'
        ? 'border-amber-400/25 bg-amber-400/10 text-amber-200'
        : 'border-white/15 bg-white/5 text-white/70'

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide',
        styles,
      )}
    >
      {status}
    </span>
  )
}

function CrewCard({ member }) {
  return (
    <Link
      href={`/crew/${member.slug}`}
      className="group relative overflow-hidden rounded-3xl bg-[#070A12] ring-1 ring-white/10 transition hover:ring-white/20"
    >
      {/* glow */}
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100',
          'bg-linear-to-br',
          roleAccent(member.role),
        )}
      />

      {/* holo grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(70% 70% at 50% 20%, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(70% 70% at 50% 20%, black 0%, transparent 70%)',
        }}
      />

      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-wider text-white/55 uppercase">
              {member.role}
              {member.callsign ? ` • ${member.callsign}` : ''}
            </p>
            <p className="mt-1 truncate text-lg font-semibold text-white">
              {member.name}
            </p>
          </div>
          <StatusPill status={member.status} />
        </div>

        {/* portrait */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/3">
          <div className="relative aspect-16/10">
            <Image
              src={member.portrait}
              alt={member.name}
              fill
              className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
          </div>

          <div className="p-4">
            <p className="text-xs text-white/60">
              <span className="text-white/75">Origin:</span> {member.origin}
            </p>
            <p className="mt-1 text-xs text-white/60">
              <span className="text-white/75">Specialty:</span>{' '}
              {member.specialty}
            </p>

            {member.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {member.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {member.sceneThumb ? (
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-3">
            <div className="relative h-10 w-14 overflow-hidden rounded-xl border border-white/10">
              <Image
                src={member.sceneThumb}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-wider text-white/55 uppercase">
                Scene fragment
              </p>
              <p className="truncate text-xs text-white/70">
                Open file → view key moments
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  )
}

export function CrewRoster({ className }) {
  return (
    <section className={clsx('relative', className)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {crew.map((member) => (
          <CrewCard key={member.slug} member={member} />
        ))}
      </div>
    </section>
  )
}
