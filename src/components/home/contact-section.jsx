'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { Container } from '../container'
import { Heading, Subheading } from '../text'

export function ContactSection() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    // Honeypot (anti-spam). If filled, silently succeed.
    if (form.company?.value) {
      form.reset()
      setStatus('sent')
      return
    }

    setStatus('sending')

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      form.reset()
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-2 mt-2 overflow-hidden rounded-4xl bg-[#070A12] py-24 sm:py-32"
    >
      {/* Nebula glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(238,135,203,0.30), transparent 55%), radial-gradient(circle at 70% 40%, rgba(176,96,255,0.26), transparent 60%), radial-gradient(circle at 50% 70%, rgba(255,241,190,0.14), transparent 60%)',
        }}
      />

      {/* Subtle holo grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(70% 60% at 50% 0%, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(70% 60% at 50% 0%, black 0%, transparent 70%)',
        }}
      />

      {/* Signal lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#b060ff]/30 to-transparent" />
      </div>

      <Container className="relative">
        <Subheading dark>Contact</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Send a transmission.
        </Heading>

        <p className="mt-4 max-w-2xl text-sm/6 text-white/60">
          For readers, book clubs, podcasts, and press inquiries. I read every
          message — response times may vary depending on orbit conditions.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* Main contact form card */}
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 lg:col-span-4 lg:row-span-2">
            <div className="absolute inset-0 bg-white/3" />
            <div className="absolute inset-0 bg-linear-to-b from-white/6 to-transparent" />

            <div className="relative p-8 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                    Secure channel
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Contact form
                  </p>
                  <p className="mt-2 text-sm/6 text-white/55">
                    Your message goes straight to my inbox. No middlemen. No
                    noise.
                  </p>
                </div>

                <div className="hidden rounded-2xl border border-white/10 bg-white/4 px-3 py-2 sm:block">
                  <p className="text-xs text-white/55">
                    Status:{' '}
                    <span className="text-white/80">
                      {status === 'sending'
                        ? 'sending…'
                        : status === 'sent'
                          ? 'received'
                          : status === 'error'
                            ? 'unstable'
                            : 'signal locked'}
                    </span>
                  </p>
                </div>
              </div>

              <form
                className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                onSubmit={handleSubmit}
              >
                {/* Honeypot (anti-spam) */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="sm:col-span-1">
                  <label className="text-xs font-medium text-white/70">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-white/15"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-xs font-medium text-white/70">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-white/15"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    placeholder="Write your message…"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-white/15"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/45">
                    {status === 'sent'
                      ? '✓ Transmission received — signal locked.'
                      : status === 'error'
                        ? 'Transmission failed — try again later.'
                        : 'By sending, you agree not to transmit malware, drama, or existential paradoxes.'}
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send transmission'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right top card: best reasons */}
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 lg:col-span-2 lg:rounded-tr-3xl">
            <div className="absolute inset-0 bg-white/3" />
            <div className="relative p-8">
              <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                Best reasons to contact
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                Book clubs & media
              </p>
              <ul className="mt-4 space-y-3 text-sm/6 text-white/55">
                <li>• Book club picks & Q&A</li>
                <li>• Podcast appearances</li>
                <li>• Press / review requests</li>
                <li>• Event invitations</li>
              </ul>
              <div className="mt-6 h-px w-full bg-white/10" />
              <p className="mt-4 text-xs text-white/45">
                Tip: include your timeline and preferred format (email / call).
              </p>
            </div>
          </div>

          {/* Right bottom card: direct email */}
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 lg:col-span-2 lg:rounded-br-3xl">
            <div className="absolute inset-0 bg-white/3" />
            <div className="relative p-8">
              <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                Alternate channel
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                Direct contact
              </p>

              <div className="mt-4 space-y-3 text-sm text-white/55">
                <p>
                  Email:{' '}
                  <a
                    className="text-white/80 hover:text-white"
                    href="mailto:davidevanson@brokenhorizons.com"
                  >
                    davidevanson@brokenhorizons.com
                  </a>
                </p>
                <p className="text-xs text-white/45">
                  (You can also reach me via the social links in the footer.)
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-4">
                <p className="text-xs text-white/55">
                  <span className="text-white/80">Reply time:</span> typically
                  within 48–72h when I’m not mid-jump.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
