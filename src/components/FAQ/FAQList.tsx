'use client'
import './stylesFAQ.css' // Importa o arquivo CSS

import React, { useState } from 'react'

import { LinkTitleToContent } from '../link-title-to-content'
import FAQItem from './FAQItem'

type FAQ = {
  question: string
  answer: string
}

const FAQList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: 'O que é o Python Norte 2024?',
      answer:
        'Python Norte 2024 é um evento dedicado à tecnologia e à inclusão, promovendo diversidade ao longo de dois dias em setembro. É uma conferência feita pela comunidade e para a comunidade, com o objetivo de fortalecer laços humanos, compartilhar conhecimento tecnológico e promover mudanças positivas.',
    },
    {
      question: 'Quem pode participar do evento?',
      answer:
        'O evento é aberto a todos os interessados em tecnologia, especialmente aqueles que desejam promover e participar de um ambiente inclusivo e diversificado.',
    },
    {
      question: 'Como posso me inscrever?',
      answer:
        'As inscrições estão abertas agora! Visite o nosso site e inscreva-se para garantir sua participação.',
    },
    {
      question: 'Como são selecionadas as palestras?',
      answer:
        'As palestras são escolhidas pela própria comunidade, garantindo uma ampla variedade de temas e perspectivas.',
    },
    // Add more FAQs as needed
  ]

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <LinkTitleToContent title="FAQ" hrefId="FAQList" />
      <div className="pt-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
            isLast={index === faqs.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQList
