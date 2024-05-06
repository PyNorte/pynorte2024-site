import { LinkTitleToContent } from '@/components/link-title-to-content'

export function About() {
  return (
    <div className="space-y-4">
      <LinkTitleToContent hrefId="about-python" title="Sobre a Python" />

      <p className="text-base leading-relaxed lg:text-lg">
        Durante todo o processo de concepção da nossa conferência (desde a
        formação da equipe organizadora até a seleção do local, estruturação do
        programa de palestras e convites de palestrantes principais), nossa
        organização priorizou a criação de um ambiente que fosse muito mais do
        que apenas um evento de tecnologia. Estamos extremamente orgulhosos em
        afirmar que a PyN24 é uma edição feita pela comunidade, para a
        comunidade. Nossa missão é proporcionar uma experiência enriquecedora,
        pautada na pluralidade, diversidade, respeito e inclusão. Estamos
        comprometidos em promover conexões significativas entre pessoas, não
        apenas compartilhando conhecimento em tecnologia, mas também
        fortalecendo laços humanos e impulsionando mudanças positivas em nossa
        comunidade.
      </p>
    </div>
  )
}
