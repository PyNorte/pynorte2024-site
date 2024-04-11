import { GrTwitter, GrInstagram, GrFacebook, GrLinkedin } from 'react-icons/gr'

export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between bg-sunset-950 px-8 py-12 md:flex-row md:px-28 lg:px-40">
      <div className="space-y-8 md:mr-16">
        <p className="max-w-md text-sm text-zinc-300 md:text-base">
          Python Norte é uma conferência sem fins lucrativos dirigida por
          voluntários para promover a linguagem de programação Python de código
          aberto. É apoiado pela Associação Python Brasil (APyB).
        </p>

        <section className="flex items-center gap-4">
          <a
            className="text-2xl"
            href="https://twitter.com/pynorte"
            target="_blank"
            rel="noreferrer"
          >
            <GrTwitter />
          </a>

          <a
            className="text-2xl"
            href="https://www.instagram.com/pynorteoficial/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>

          <a
            className="text-2xl"
            href="https://www.facebook.com/pynorte"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebook fill="#fff" />
          </a>

          <a
            className="text-2xl"
            href="https://www.linkedin.com/company/pynorte/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
        </section>
      </div>
    </footer>
  )
}
