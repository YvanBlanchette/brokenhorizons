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
    <div className="px-4 py-2">
      <div className="text-sm font-semibold tracking-wider text-neutral-950/40 uppercase">
        {k}
      </div>
      <div className="mt-1 text-sm font-medium text-neutral-950">
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
        'mb-10 rounded-3xl bg-neutral-50 p-6 shadow-xl',
        className,
      )}
    >
      <h3 className="text-lg font-semibold tracking-wider text-neutral-950/60 uppercase">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function BulletList({ items }) {
  if (!items?.length) return null
  return (
    <ul className="space-y-3 text-neutral-950/80">
      {items.map((f, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950/60" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  )
}

function TextBlock({ text }) {
  if (!text) return null
  return (
    <p className="max-w-none whitespace-pre-line text-neutral-950">{text}</p>
  )
}

function SpoilerGuard({ readerMode, setReaderMode, className }) {
  return (
    <button
      type="button"
      onClick={() => setReaderMode((v) => !v)}
      className={clsx(
        'cursor-pointer rounded-full border px-5 py-2.5 text-base font-bold uppercase transition duration-300 ease-in-out',
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
    <div className="p-6">
      <p className="text-sm font-semibold tracking-wider text-neutral-950/50 uppercase">
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
        <div className="mt-6 bg-neutral-50 p-5">
          <p className="text-sm font-semibold tracking-wider text-neutral-950/50 uppercase">
            Oversight and restrictions
          </p>

          <div className="mt-3 space-y-2 text-sm text-neutral-950/80">
            {dossier.oversight.medical ? (
              <p>
                <span className="font-semibold">Medical:</span>{' '}
                {dossier.oversight.medical}
              </p>
            ) : null}

            {dossier.oversight.psychological ? (
              <p>
                <span className="font-semibold">Psych:</span>{' '}
                {dossier.oversight.psychological}
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
          <p className="text-sm font-semibold tracking-wider text-neutral-950/50 uppercase">
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
          <div key={`${title}-${idx}`} className="bg-neutral-50 p-6">
            <p className="text-sm font-semibold tracking-wider text-neutral-950/40 uppercase">
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
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
            <p className="mb-4 max-w-lg text-base font-medium tracking-wider text-neutral-50 uppercase">
              {member?.role}
            </p>
            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-neutral-50 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              {member?.name}
            </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-neutral-50 drop-shadow-md sm:text-2xl/8">
              {member?.logline}
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 tracking-wider uppercase sm:flex-row">
              <Button href="#classified">Access classified file</Button>
            </div>
          </div>
        </Container>
      </header>

      {/* MAIN CONTENT */}
      <main className="from-neutral-10 bg-white py-[8vh]">
        <Container>
          {member && (
            <h1 className="font-display mb-8 text-center text-8xl font-semibold">
              {member.name}
            </h1>
          )}

          {!member ? (
            <div className="rounded-4xl border border-neutral-950/10 bg-neutral-950/5 p-10 text-neutral-950/80">
              Crew member not found.
            </div>
          ) : isHiddenByReaderMode ? (
            <div className="rounded-4xl border border-neutral-950/10 bg-neutral-950/5 p-10">
              <h2 className="text-xl font-medium text-neutral-950">
                Profile locked by Reader Mode
              </h2>
              <p className="mt-2 max-w-2xl text-neutral-950/70">
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
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* LEFT: Single standalone card (image + personal) */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-4xl border border-neutral-950/10 bg-neutral-50 shadow-xl">
                  {/* image */}
                  <div className="relative overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image.src || member.image}
                        alt={member.name}
                        className="aspect-4/3 w-full object-cover brightness-125"
                      />
                    ) : (
                      <div className="aspect-4/3 w-full bg-neutral-50" />
                    )}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent from-80% via-transparent to-neutral-50" />
                  </div>

                  {/* personal info directly under image */}
                  <div className="p-4">
                    <div className="bg-neutral-50 p-4">
                      <p className="mb-3 text-sm font-semibold tracking-wider text-neutral-950/50 uppercase">
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
              </div>

              {/* RIGHT: Background */}
              <div className="lg:col-span-6">
                {/* controls under the card */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href="/crew"
                    className="rounded-full border border-neutral-950/10 bg-neutral-950/5 px-5 py-2.5 text-base font-medium text-neutral-950 uppercase data-hover:bg-neutral-950/10"
                  >
                    ← Back to crew roster
                  </Link>
                  <SpoilerGuard
                    readerMode={readerMode}
                    setReaderMode={setReaderMode}
                  />
                </div>

                {/* Background */}
                <Section title="" id="bio">
                  {member.quick?.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {member.quick.map((q) => (
                        <StatPill key={q.k} k={q.k} v={q.v} />
                      ))}
                    </div>
                  ) : null}

                  <div className="bg-neutral-50 p-4">
                    <p className="mb-3 text-sm font-semibold tracking-wider text-neutral-950/40 uppercase">
                      BACKGROUND
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
            <div className="relative min-h-[85vh] w-full rounded-3xl border border-neutral-800/5 bg-neutral-50 p-10 shadow-xl">
              {/* SEAL + CLASSIFICATION BLOCK */}
              <div
                className={clsx(
                  'absolute flex flex-col items-center justify-center text-center',
                  readerMode
                    ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    : 'top-10 right-10 items-end text-right',
                )}
              >
                {/* Seal always visible */}
                <Image
                  src={gecoSeal}
                  alt="GECO seal"
                  width={sealSize}
                  height={sealSize}
                  onDoubleClick={() => setReaderMode((v) => !v)}
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
                  <p className="text-5xl font-black tracking-wider text-neutral-950 uppercase">
                    GECO
                  </p>
                  <p className="text-xl font-bold tracking-wider text-neutral-950 uppercase">
                    Galactic Exploration and Chartering Office
                  </p>
                  <p className="mb-2 text-base">
                    Intelligence Division · Personnel Archive
                  </p>
                  <p className="my-2 text-2xl font-black tracking-wider text-neutral-950 uppercase">
                    Classified
                  </p>
                  <p className="text-sm">Classification: OMEGA-RESTRICTED</p>
                  <p className="text-sm">Clearance Required: GECO-L5</p>

                  <div className="mt-6">
                    <SpoilerGuard
                      readerMode={readerMode}
                      setReaderMode={setReaderMode}
                    />
                  </div>
                </div>
              </div>

              {/* GALLERY HERE !!!!! */}

              {/* UNLOCKED CONTENT */}
              {!readerMode && (
                <div className="pt-24">
                  <h2 className="text-center text-3xl font-semibold uppercase underline">
                    Personnel file: {member?.name}
                  </h2>

                  <div className="mx-auto mt-10 max-w-5xl space-y-8">
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
                      <div className="bg-neutral-50 p-6">
                        <p className="text-sm font-semibold tracking-wider text-neutral-950/50 uppercase">
                          Known facts
                        </p>
                        <div className="mt-4">
                          <BulletList items={member.noSpoilerFacts} />
                        </div>
                      </div>
                    ) : null}

                    {/* Spoiler facts */}
                    {member?.spoilerFacts?.length ? (
                      <div className="bg-neutral-50 p-6">
                        <p className="text-sm font-semibold tracking-wider text-neutral-950/50 uppercase">
                          Redacted addendum
                        </p>
                        <div className="mt-4">
                          <BulletList items={member.spoilerFacts} />
                        </div>
                      </div>
                    ) : null}

                    {/* Gallery */}
                    {member?.gallery?.length ? (
                      <div className="bg-neutral-50 p-6">
                        <p className="text-sm font-semibold tracking-wider text-neutral-950/50 uppercase">
                          Scenes
                        </p>

                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {member.gallery.map((g, i) => (
                            <div
                              key={i}
                              className="overflow-hidden bg-black/20"
                            >
                              <img
                                src={g.src?.src || g.src}
                                alt={g.label || ''}
                                className="aspect-16/10 w-full object-cover"
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
