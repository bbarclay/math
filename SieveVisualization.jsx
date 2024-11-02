import React, { useState } from 'react';

const SieveVisualization = () => {
  const gridSize = 100;
  const [step, setStep] = useState(0);
  
  // Generate array of numbers from 1 to gridSize
  const numbers = Array.from({ length: gridSize }, (_, i) => i + 1);
  
  // Function to get color for a number based on current step
  const getColor = (num) => {
    if (num === 1) return 'bg-gray-200'; // 1 is neither prime nor composite
    
    // Check if number is crossed out by previous primes
    if (step >= 1 && num % 2 === 0 && num !== 2) return 'bg-red-200';
    if (step >= 2 && num % 3 === 0 && num !== 3) return 'bg-orange-200';
    if (step >= 3 && num % 5 === 0 && num !== 5) return 'bg-yellow-200';
    if (step >= 4 && num % 7 === 0 && num !== 7) return 'bg-green-200';
    
    // Prime numbers
    if (num === 2) return 'bg-blue-500';
    if (num === 3) return 'bg-blue-500';
    if (num === 5) return 'bg-blue-500';
    if (num === 7) return 'bg-blue-500';
    
    // Numbers not yet processed
    if (step < 4) return 'bg-white';
    
    // Check if number is prime
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return 'bg-gray-100';
    }
    return 'bg-blue-500';
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Sieve of Eratosthenes Visualization</h2>
      <div className="mb-4">
        <button 
          onClick={() => setStep(s => Math.min(s + 1, 4))}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next Step
        </button>
        <button 
          onClick={() => setStep(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
      <div className="mb-4">
        {step === 0 && <p>Click "Next Step" to start removing multiples of 2</p>}
        {step === 1 && <p>Multiples of 2 removed (except 2 itself)</p>}
        {step === 2 && <p>Multiples of 3 removed (except 3 itself)</p>}
        {step === 3 && <p>Multiples of 5 removed (except 5 itself)</p>}
        {step === 4 && <p>Multiples of 7 removed (except 7 itself)</p>}
      </div>
      <div className="grid grid-cols-10 gap-1">
        {numbers.map(num => (
          <div 
            key={num}
            className={`aspect-w-1 aspect-h-1 flex items-center justify-center p-2 ${getColor(num)} border border-gray-300`}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
            <span>Prime Numbers</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-200 mr-2"></div>
            <span>Multiples of 2</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-200 mr-2"></div>
            <span>Multiples of 3</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-200 mr-2"></div>
            <span>Multiples of 5</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-200 mr-2"></div>
            <span>Multiples of 7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SieveVisualization;
