'use client'
import './stylesFAQ.css' // Importa o arquivo CSS

import React from 'react'

type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  isLast: boolean
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  isLast,
}) => {
  return (
    <div className={`faq-item mb-0 ${isLast && isOpen ? 'last-open' : ''}`}>
      <div
        className={`faq-question flex cursor-pointer items-center justify-between bg-[#DD7002] p-4 font-semibold text-white ${isLast ? '' : 'border-b'}`}
        onClick={onClick}
      >
        {question}
        <span
          className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ⌄
        </span>
      </div>
      <div className={`faq-answer bg-[#7A310D] ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </div>
  )
}

export default FAQItem
