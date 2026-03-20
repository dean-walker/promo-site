import { Container } from "@/components/Container";
import { MotionDiv } from "@/components/Motion";

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          For now this uses placeholder info. Replace the email + links with your real ones.
        </p>
      </header>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h2 className="text-base font-semibold tracking-tight">Send a message</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            This is a lightweight, no-backend form (yet). Use the email button or wire this up to a
            provider later.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Jane Developer"
                className="mt-2 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                className="mt-2 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What are you building?"
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:you@example.com"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Email me
              </a>
              <a
                href="https://cal.com/your-handle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
              >
                Book a call
              </a>
            </div>
          </form>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h2 className="text-base font-semibold tracking-tight">Details</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500 dark:text-zinc-400">Email</dt>
              <dd className="font-medium">you@example.com</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500 dark:text-zinc-400">Timezone</dt>
              <dd className="font-medium">Local / Remote-friendly</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500 dark:text-zinc-400">Typical work</dt>
              <dd className="font-medium">Web apps, landing pages</dd>
            </div>
          </dl>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/30">
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              If you share a quick blurb about scope + timeline, I’ll reply with a next step and a
              rough estimate.
            </p>
          </div>
        </MotionDiv>
      </div>
    </Container>
  );
}
