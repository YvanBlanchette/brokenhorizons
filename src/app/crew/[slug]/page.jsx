'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import CrewDetails from '@/components/crew/crew-details'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'

import gecoSeal from '@/assets/images/geco.svg'

function StatPill({ k, v }) {
  return (
    <div className="rounded-2xl border border-neutral-950/10 bg-white px-4 py-3 shadow-sm">
      <div className="text-[11px] font-semibold tracking-wider text-neutral-950/45 uppercase sm:text-xs">
        {k}
      </div>
      <div className="mt-1 text-sm font-medium break-words text-neutral-950 sm:text-[15px]">
        {v ?? '—'}
      </div>
    </div>
  )
}

function Section({ title, id, children, className }) {
  return (
    <section
      id={id}
      className={clsx(
        'mb-10 rounded-3xl bg-neutral-50 p-5 shadow-xl sm:p-6 lg:p-8',
        className,
      )}
    >
      {title ? (
        <h3 className="text-base font-semibold tracking-wider text-neutral-950/60 uppercase sm:text-lg">
          {title}
        </h3>
      ) : null}
      <div className={clsx(title ? 'mt-4' : '')}>{children}</div>
    </section>
  )
}

function BulletList({ items }) {
  if (!items?.length) return null
  return (
    <ul className="space-y-3 text-sm leading-6 text-neutral-950/80 sm:text-base">
      {items.map((f, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950/60" />
          <span className="break-words">{f}</span>
        </li>
      ))}
    </ul>
  )
}

function TextBlock({ text }) {
  if (!text) return null
  return (
    <p className="max-w-none text-sm leading-7 whitespace-pre-line text-neutral-950 sm:text-base">
      {text}
    </p>
  )
}

function SpoilerGuard({ readerMode, setReaderMode, className }) {
  return (
    <button
      type="button"
      onClick={() => setReaderMode((v) => !v)}
      className={clsx(
        'cursor-pointer rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase transition duration-300 ease-in-out sm:px-5 sm:py-2.5 sm:text-base',
        readerMode
          ? 'border-green-400/40 bg-neutral-950/5 text-green-400 shadow-[0_0_18px_rgba(34,197,94,0.6),inset_0_0_6px_rgba(34,197,94,0.35)]'
          : 'border-neutral-950/10 bg-neutral-950/5 text-neutral-400 shadow-sm',
        className,
      )}
    >
      Spoiler Guard
    </button>
  )
}

function DossierCard({ dossier }) {
  if (!dossier) return null

  return (
    <div className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">
        GECO dossier
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {dossier.fileType ? (
          <StatPill k="File type" v={dossier.fileType} />
        ) : null}
        {dossier.fileId ? <StatPill k="File ID" v={dossier.fileId} /> : null}
        {dossier.status ? <StatPill k="Status" v={dossier.status} /> : null}
        {dossier.classification ? (
          <StatPill k="Classification" v={dossier.classification} />
        ) : null}
        {dossier.clearanceRequired ? (
          <StatPill k="Clearance required" v={dossier.clearanceRequired} />
        ) : null}
        {dossier.division ? (
          <StatPill k="Division" v={dossier.division} />
        ) : null}
        {dossier.primaryAsset ? (
          <StatPill k="Primary asset" v={dossier.primaryAsset} />
        ) : null}
        {dossier.assignmentModel ? (
          <StatPill k="Assignment model" v={dossier.assignmentModel} />
        ) : null}
      </div>

      {dossier.oversight ? (
        <div className="mt-6 rounded-2xl border border-neutral-950/10 bg-neutral-50 p-4 sm:p-5">
          <p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">
            Oversight and restrictions
          </p>

          <div className="mt-3 space-y-2 text-sm text-neutral-950/80 sm:text-base">
            {dossier.oversight.medical ? (
              <p>
                <span className="font-semibold">Medical:</span>{' '}
                <span className="break-words">{dossier.oversight.medical}</span>
              </p>
            ) : null}

            {dossier.oversight.psychological ? (
              <p>
                <span className="font-semibold">Psych:</span>{' '}
                <span className="break-words">
                  {dossier.oversight.psychological}
                </span>
              </p>
            ) : null}

            {dossier.oversight.restrictions?.length ? (
              <div className="pt-2">
                <BulletList items={dossier.oversight.restrictions} />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {dossier.notes?.length ? (
        <div className="mt-6">
          <p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">
            Internal notes
          </p>
          <div className="mt-3">
            <BulletList items={dossier.notes} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

function renderStructuredSections(sections, readerMode) {
  if (!sections?.length) return null

  const visible = sections.filter((s) => {
    if (!s) return false
    if (s.visibility === 'locked') return false
    if (readerMode && s.visibility === 'spoiler') return false
    return true
  })

  if (!visible.length) return null

  return (
    <div className="space-y-6">
      {visible.map((s, idx) => {
        const title = s.title || `SECTION ${idx + 1}`
        const kind = s.kind || 'text'
        const content = s.content

        return (
          <div
            key={`${title}-${idx}`}
            className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-sm sm:p-6"
          >
            <p className="text-xs font-semibold tracking-wider text-neutral-950/45 uppercase sm:text-sm">
              {title}
            </p>
            <div className="mt-4">
              {kind === 'bullets' ? (
                <BulletList items={Array.isArray(content) ? content : []} />
              ) : kind === 'text' ? (
                <TextBlock text={typeof content === 'string' ? content : ''} />
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function CrewMemberDetailPage() {
  const params = useParams()
  const slug = params?.slug

  const [readerMode, setReaderMode] = useState(true)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bh_reader_mode')
      if (saved !== null) setReaderMode(saved === '1')
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('bh_reader_mode', readerMode ? '1' : '0')
    } catch {}
  }, [readerMode])

  const member = useMemo(() => {
    if (!slug) return null
    return CrewDetails.find((c) => c.slug === slug) || null
  }, [slug])

  const crewHeader = member?.header

  const isHiddenByReaderMode =
    !!member &&
    readerMode &&
    (member.slug === 'sadie' || member.isSpoilerSensitive)

  const sealSize = readerMode ? 200 : 125
  const personal = member?.personal

  return (
    <div className="mx-auto min-h-screen">
      {/* HERO */}
      <header
        className="relative h-[95vh] bg-cover bg-center"
        style={{
          backgroundImage: crewHeader?.src ? `url(${crewHeader.src})` : 'none',
        }}
      >
        {/* Optional dark overlay for readability on bright headers */}
        <div className="absolute inset-0 bg-black/30" />

        <Container className="relative">
          <Navbar />
          <div className="pt-14 pb-20 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
            <p className="mb-3 max-w-lg text-sm font-medium tracking-wider text-neutral-50 uppercase sm:mb-4 sm:text-base">
              {member?.role}
            </p>

            <h1 className="font-display text-5xl/[0.95] font-medium tracking-tight text-balance text-neutral-50 sm:text-7xl/[0.85] md:text-9xl/[0.8]">
              {member?.name}
            </h1>

            <p className="mt-6 max-w-lg text-lg/7 font-medium text-neutral-50 drop-shadow-md sm:mt-8 sm:text-2xl/8">
              {member?.logline}
            </p>

            <div className="mt-10 flex flex-col gap-4 tracking-wider uppercase sm:mt-12 sm:flex-row sm:gap-x-6">
              <Button href="#classified">Access classified file</Button>
            </div>
          </div>
        </Container>
      </header>

      {/* MAIN CONTENT */}
      <main className="bg-white py-[8vh]">
        <Container>
          {member && (
            <h1 className="font-display mb-8 text-center text-4xl font-semibold sm:text-6xl lg:text-8xl">
              {member.name}
            </h1>
          )}

          {!member ? (
            <div className="rounded-4xl border border-neutral-950/10 bg-neutral-950/5 p-6 text-neutral-950/80 sm:p-10">
              Crew member not found.
            </div>
          ) : isHiddenByReaderMode ? (
            <div className="rounded-4xl border border-neutral-950/10 bg-neutral-950/5 p-6 sm:p-10">
              <h2 className="text-lg font-medium text-neutral-950 sm:text-xl">
                Profile locked by Reader Mode
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-neutral-950/70 sm:text-base">
                This dossier contains information best discovered in the story.
                Disable Reader Mode to access it.
              </p>
              <div className="mt-6">
                <Button onClick={() => setReaderMode(false)}>
                  Disable Spoiler Guard
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* LEFT: Single standalone card (image + personal) */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-4xl border border-neutral-950/10 bg-neutral-50 shadow-xl">
                  {/* image */}
                  <div className="relative overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image.src || member.image}
                        alt={member.name}
                        className="aspect-[4/3] w-full object-cover brightness-110 sm:aspect-[16/10] lg:aspect-[4/3]"
                      />
                    ) : (
                      <div className="aspect-[4/3] w-full bg-neutral-50" />
                    )}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent from-70% via-transparent to-neutral-50" />
                  </div>

                  {/* personal info directly under image */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <p className="mb-4 text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">
                      Personal information
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <StatPill
                        k="Full name"
                        v={`${personal?.firstName ?? ''} ${personal?.middleName ?? ''} ${personal?.lastName ?? ''}`
                          .replace(/\s+/g, ' ')
                          .trim()}
                      />
                      <StatPill k="Status" v={personal?.status} />
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <StatPill k="Date of birth" v={personal?.dob} />
                      <StatPill k="Place of birth" v={personal?.pob} />
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <StatPill k="Height" v={personal?.height} />
                      <StatPill k="Weight" v={personal?.weight} />
                      <StatPill k="Eyes" v={personal?.eyeColor} />
                      <StatPill k="Hair" v={personal?.hairColor} />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Background */}
              <div className="lg:col-span-6">
                {/* controls under the card */}
                <div className="mb-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/crew"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-950/10 bg-neutral-950/5 px-4 py-2 text-sm font-medium tracking-wider text-neutral-950 uppercase data-hover:bg-neutral-950/10 sm:px-5 sm:py-2.5 sm:text-base"
                  >
                    ← Back to crew roster
                  </Link>

                  <div className="flex justify-center sm:justify-end">
                    <SpoilerGuard
                      readerMode={readerMode}
                      setReaderMode={setReaderMode}
                    />
                  </div>
                </div>

                {/* Background */}
                <Section title="" id="bio">
                  {member.quick?.length ? (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {member.quick.map((q) => (
                        <StatPill key={q.k} k={q.k} v={q.v} />
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-4 rounded-3xl border border-neutral-950/10 bg-white p-4 shadow-sm sm:p-6">
                    <p className="mb-3 text-xs font-semibold tracking-wider text-neutral-950/45 uppercase sm:text-sm">
                      Background
                    </p>
                    <TextBlock text={member.bio} />
                  </div>
                </Section>
              </div>
            </div>
          )}
        </Container>

        {/* CLASSIFIED PANEL */}
        <Container>
          <div id="classified" className="mt-10">
            <div className="relative min-h-[85vh] w-full rounded-3xl border border-neutral-800/5 bg-neutral-50 p-5 shadow-xl sm:p-8 lg:p-10">
              {/* SEAL + CLASSIFICATION BLOCK */}
              <div
                className={clsx(
                  'absolute flex flex-col items-center justify-center text-center',
                  readerMode
                    ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4'
                    : 'top-6 right-6 items-end text-right sm:top-8 sm:right-8 lg:top-10 lg:right-10',
                )}
              >
                {/* Seal always visible */}
                <Image
                  src={gecoSeal}
                  alt="GECO seal"
                  width={sealSize}
                  height={sealSize}
                  onDoubleClick={() => setReaderMode((v) => !v)}
                  className={clsx(
                    readerMode ? 'max-w-[160px] sm:max-w-none' : '',
                  )}
                />

                {/* Classification text (fades out when unlocked) */}
                <div
                  className={clsx(
                    'mt-4 transition-all duration-200',
                    readerMode
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0 select-none',
                  )}
                >
                  <p className="text-3xl font-black tracking-wider text-neutral-950 uppercase sm:text-5xl">
                    GECO
                  </p>
                  <p className="text-base font-bold tracking-wider text-neutral-950 uppercase sm:text-xl">
                    Galactic Exploration and Chartering Office
                  </p>
                  <p className="mb-2 text-sm sm:text-base">
                    Intelligence Division · Personnel Archive
                  </p>
                  <p className="my-2 text-xl font-black tracking-wider text-neutral-950 uppercase sm:text-2xl">
                    Classified
                  </p>
                  <p className="text-xs sm:text-sm">
                    Classification: OMEGA-RESTRICTED
                  </p>
                  <p className="text-xs sm:text-sm">
                    Clearance Required: GECO-L5
                  </p>

                  <div className="mt-6">
                    <SpoilerGuard
                      readerMode={readerMode}
                      setReaderMode={setReaderMode}
                    />
                  </div>
                </div>
              </div>

              {/* UNLOCKED CONTENT */}
              {!readerMode && (
                <div className="pt-16 sm:pt-20 lg:pt-24">
                  <h2 className="text-center text-xl font-semibold tracking-wider uppercase sm:text-3xl">
                    Personnel file: {member?.name}
                  </h2>

                  <div className="mx-auto mt-8 max-w-5xl space-y-8 sm:mt-10">
                    {/* Dossier */}
                    {member?.dossier && (
                      <DossierCard dossier={member.dossier} />
                    )}

                    {/* Structured sections */}
                    {member?.sections?.length
                      ? renderStructuredSections(member.sections, readerMode)
                      : null}

                    {/* Known facts */}
                    {member?.noSpoilerFacts?.length ? (
                      <div className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-sm sm:p-6">
                        <p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">
                          Known facts
                        </p>
                        <div className="mt-4">
                          <BulletList items={member.noSpoilerFacts} />
                        </div>
                      </div>
                    ) : null}

                    {/* Spoiler facts */}
                    {member?.spoilerFacts?.length ? (
                      <div className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-sm sm:p-6">
                        <p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">
                          Redacted addendum
                        </p>
                        <div className="mt-4">
                          <BulletList items={member.spoilerFacts} />
                        </div>
                      </div>
                    ) : null}

                    {/* Gallery */}
                    {member?.gallery?.length ? (
                      <div className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-sm sm:p-6">
                        <p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">
                          Scenes
                        </p>

                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {member.gallery.map((g, i) => (
                            <div
                              key={i}
                              className="overflow-hidden rounded-2xl bg-black/10"
                            >
                              <img
                                src={g.src?.src || g.src}
                                alt={g.label || ''}
                                className="aspect-[16/10] w-full object-cover"
                              />
                              {g.label ? (
                                <div className="border-t border-neutral-950/10 px-4 py-3 text-sm text-neutral-950/70">
                                  {g.label}
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
