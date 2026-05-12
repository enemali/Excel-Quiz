/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { questions, Question } from './constants/questions';
import { Check, X, Circle } from 'lucide-react';

export default function App() {
  const [quizQuestions] = useState(() => {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 3);
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>([null, null, null]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selected: string) => {
    const isCorrect = selected === quizQuestions[currentIndex].correctAnswer;
    const newResults = [...results];
    newResults[currentIndex] = isCorrect;
    setResults(newResults);

    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const allCorrect = useMemo(() => results.every(res => res === true), [results]);

  const launchTV = () => {
    if ((window as any).fully && (window as any).fully.startApplication) {
      (window as any).fully.startApplication('com.google.android.tvlauncher');
    } else {
      console.error("Fully Kiosk not detected or startApplication not supported.");
      alert("Could not launch TV. Fully Kiosk API not available.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-cyan-400">Excel Master TV Quiz</h1>
      
      {/* Score Status Bar */}
      <div className="flex gap-4 mb-12 bg-neutral-800 p-4 rounded-full border border-neutral-700">
        {results.map((res, i) => (
          <div key={i} className={`p-3 rounded-full ${res === null ? 'bg-neutral-700' : res ? 'bg-green-600' : 'bg-red-600'}`}>
            {res === null ? <Circle size={24} /> : res ? <Check size={24} /> : <X size={24} />}
          </div>
        ))}
      </div>

      {!isFinished ? (
        <div className="w-full max-w-2xl bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
          <h2 className="text-2xl mb-8 text-neutral-100">{quizQuestions[currentIndex].question}</h2>
          <div className="flex flex-col gap-4">
            {quizQuestions[currentIndex].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="w-full p-6 text-left text-lg bg-neutral-700 hover:bg-neutral-600 focus:bg-cyan-600 focus:ring-4 focus:ring-cyan-400 rounded-xl transition-all outline-none"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl mb-8">Quiz Complete!</h2>
          {allCorrect ? (
            <button
              onClick={launchTV}
              className="px-8 py-4 bg-green-600 hover:bg-green-500 focus:bg-yellow-500 rounded-full text-xl font-bold transition-all outline-none focus:ring-4 focus:ring-yellow-400"
            >
              Correct! Launch TV
            </button>
          ) : (
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-red-600 hover:bg-red-500 rounded-full text-xl font-bold"
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
