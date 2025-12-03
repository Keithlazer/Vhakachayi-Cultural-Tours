'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'When visiting sacred sites, what is the most important principle?',
    options: [
      'Take as many photos as possible',
      'Respect and humility, following elder guidance',
      'Explore independently to have your own experience',
      'Share everything on social media immediately',
    ],
    correct: 1,
    explanation: 'Sacred sites require respect, humility, and following the guidance of elders who understand the cultural protocols.',
  },
  {
    id: 2,
    question: 'Before taking photos of elders or ceremonies, you should:',
    options: [
      'Take photos first, ask permission later',
      'Always ask for explicit permission and respect "no"',
      'Only take photos from a distance',
      'Photos are always allowed in public spaces',
    ],
    correct: 1,
    explanation: 'Always ask for explicit permission before photographing elders or ceremonies. Some moments are not meant to be photographed.',
  },
  {
    id: 3,
    question: 'What should you wear when visiting sacred sites?',
    options: [
      'Whatever is comfortable for hiking',
      'Respectful attire that covers shoulders and knees',
      'Traditional clothing only',
      'Bright colors to stand out',
    ],
    correct: 1,
    explanation: 'Respectful attire that covers shoulders and knees is appropriate. Some sites may have additional requirements.',
  },
]

export default function CulturalProtocolQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResults(true)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 80

    return (
      <section className="bg-white rounded-xl p-8 shadow-lg">
        <div className="text-center">
          <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
            passed ? 'bg-deep-green-100' : 'bg-ochre-100'
          }`}>
            {passed ? (
              <CheckCircle className="text-deep-green-600" size={40} />
            ) : (
              <AlertCircle className="text-ochre-600" size={40} />
            )}
          </div>
          <h2 className="text-2xl font-bold text-earth-900 mb-2">
            {passed ? 'Well Done!' : 'Please Review'}
          </h2>
          <p className="text-earth-600 mb-4">
            You scored {score} out of {questions.length} ({percentage}%)
          </p>
          {passed ? (
            <p className="text-deep-green-700 mb-6">
              You understand the cultural protocols. You're ready to book a respectful journey.
            </p>
          ) : (
            <p className="text-ochre-700 mb-6">
              Please review the cultural protocols before booking. Understanding and respect are essential.
            </p>
          )}
          <button onClick={resetQuiz} className="btn-secondary">
            Retake Quiz
          </button>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]
  const selected = selectedAnswers[currentQuestion]

  return (
    <section className="bg-white rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-earth-900">Cultural Protocol Quiz</h2>
          <span className="text-sm text-earth-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-earth-200 rounded-full h-2">
          <div
            className="bg-ochre-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-earth-900 mb-4">{question.question}</h3>
        {question.options.map((option, index) => {
          const isSelected = selected === index
          const isCorrect = index === question.correct
          const showFeedback = selected !== undefined

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selected !== undefined}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                showFeedback
                  ? isCorrect
                    ? 'border-deep-green-500 bg-deep-green-50'
                    : isSelected && !isCorrect
                    ? 'border-ochre-500 bg-ochre-50'
                    : 'border-earth-200 bg-white'
                  : 'border-earth-200 bg-white hover:border-ochre-300 hover:bg-ochre-50'
              } ${selected !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span className={showFeedback && isCorrect ? 'text-deep-green-700 font-medium' : 'text-earth-700'}>
                  {option}
                </span>
                {showFeedback && isSelected && (
                  isCorrect ? (
                    <CheckCircle className="text-deep-green-600" size={20} />
                  ) : (
                    <XCircle className="text-ochre-600" size={20} />
                  )
                )}
              </div>
            </button>
          )
        })}

        {selected !== undefined && (
          <div className={`p-4 rounded-lg mt-4 ${
            question.correct === selected ? 'bg-deep-green-50 border border-deep-green-200' : 'bg-ochre-50 border border-ochre-200'
          }`}>
            <p className={`text-sm ${
              question.correct === selected ? 'text-deep-green-700' : 'text-ochre-700'
            }`}>
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

