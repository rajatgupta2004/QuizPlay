import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Quiz } from '../types';

interface QuizModalProps {
  quiz: Quiz;
  onClose: () => void;
  onComplete: (score: number) => void;
}

export function QuizModal({ quiz, onClose, onComplete }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (selectedIndex: number) => {
    if (answered) return;
    
    setAnswered(true);
    if (selectedIndex === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
      } else {
        onComplete(score);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Quiz Time!</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 rounded-full h-2 transition-all"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl mb-4">{quiz.questions[currentQuestion].text}</h3>
          <div className="space-y-3">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border transition-colors ${
                  answered
                    ? index === quiz.questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : 'hover:bg-gray-100 border-gray-200'
                }`}
                disabled={answered}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}