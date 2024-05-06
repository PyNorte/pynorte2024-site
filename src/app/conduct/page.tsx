import Link from 'next/link'

export default function CodeOfConduct() {
  return (
    <div className="w-full space-y-4 text-base lg:text-lg">
      <h2 className="text-2xl font-bold lg:text-4xl">Código de conduta</h2>

      <p className="leading-loose">
        O evento Python Norte é um ambiente amistoso, de boa convivência,
        inclusivo e livre de intimidação, onde todas as pessoas são bem-vindas e
        a civilidade é exigida. Com esta finalidade, a organização do evento
        conta com uma Equipe de Resposta que atua para garantir um ambiente com
        essas qualidades.
      </p>

      <p>Por isso:</p>

      <ul className="list-disc pl-6 leading-relaxed md:pl-8">
        <li>
          Não é tolerado nenhum tipo de assédio, discriminação inapropriada ou
          humilhação pública;
        </li>
        <li>Não é tolerado o descumprimento das leis brasileiras;</li>
        <li>
          Toda pessoa presente no evento, independente do seu papel, está
          sujeita a estas regras.
        </li>
      </ul>

      <p>Desta forma, entendemos que:</p>

      <ul className="list-disc pl-6 leading-relaxed md:pl-8">
        <li>
          Assédio é a ação de insistir, perseguir ou coagir outra pessoa a um
          comportamento involuntário;
        </li>
        <li>
          Discriminação inapropriada é o ato de separar, injuriar ou humilhar
          alguém promovendo sua exclusão por atributo particular da mesma;
        </li>
        <li>
          Humilhação pública é o ato de submeter, rebaixar, ridicularizar ou
          promover o vexame de outro publicamente.
        </li>
      </ul>

      <p className="leading-loose">
        O público alvo do evento também inclui crianças e adolescentes, por isso
        buscamos manter um ambiente apropriado para todas as faixas etárias.
        Sendo assim, linguagem e imagens sexualizadas não são adequados para
        palestras e ações promocionais de patrocinadores. Se você se sentiu
        assediado, discriminado indevidamente ou humilhado, ou presenciou alguma
        destas atitudes, por favor entre em contato com a Equipe de Resposta.
        Para isso basta nos escrever no email{' '}
        <Link
          className="text-river-400 hover:underline"
          href="mailto:msm.ecp19@uea.edu.br"
        >
          pynorteam@gmail.com
        </Link>{' '}
        com o assunto &quot;Violação do Código de Conduta&quot; relatando o
        ocorrido.
      </p>

      <p className="leading-loose">
        Havendo um relato de violação destes princípios, a Equipe de Resposta
        realizará a devida análise e, quando necessário, tomará as ações para
        impedir a reincidência. Estas ações podem, mas não se restringem nem
        implicam em ir desde uma conversa em busca da retratação até um convite
        a se retirar do evento por tempo indeterminado.
      </p>
    </div>
  )
}
