import React, { useState } from 'react';
import { Delete, RotateCcw, Equal, Plus, Minus, X, Divide } from 'lucide-react';

const App: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleNumber = (val: string) => {
    if (result !== null) {
      setExpression(val);
      setResult(null);
    } else {
      setExpression((prev) => prev + val);
    }
  };

  const handleOperator = (op: string) => {
    if (result !== null) {
      setExpression(result + op);
      setResult(null);
    } else if (expression !== '' && !['+', '-', '*', '/'].includes(expression.slice(-1))) {
      setExpression((prev) => prev + op);
    }
  };

  const clear = () => {
    setExpression('');
    setResult(null);
  };

  const deleteLast = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Use Function instead of eval for a bit more safety in this scope
      const calculated = new Function(`return ${expression}`)();
      setResult(String(calculated));
    } catch (error) {
      setResult('Error');
    }
  };

  const Button = ({ 
    children, 
    onClick, 
    className = "", 
    variant = "neutral" 
  }: { 
    children: React.ReactNode, 
    onClick: () => void, 
    className?: string,
    variant?: 'neutral' | 'operator' | 'action'
  }) => {
    const variants = {
      neutral: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100",
      operator: "bg-orange-500 hover:bg-orange-400 text-white",
      action: "bg-zinc-700 hover:bg-zinc-600 text-zinc-300"
    };
    
    return (
      <button 
        onClick={onClick}
        className={`h-16 w-full rounded-2xl text-xl font-semibold transition-all active:scale-95 flex items-center justify-center ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="w-full max-w-sm p-6 bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-800">
      <div className="flex flex-col items-end justify-end h-40 px-4 mb-6 space-y-2 overflow-hidden">
        <div className="text-zinc-500 text-2xl truncate w-full text-right h-8">
          {expression || '0'}
        </div>
        <div className="text-6xl font-bold text-white truncate w-full text-right">
          {result !== null ? result : (expression ? '' : '0')}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <Button onClick={clear} variant="action"><RotateCcw size={24} /></Button>
        <Button onClick={deleteLast} variant="action"><Delete size={24} /></Button>
        <Button onClick={() => handleOperator('/')} variant="operator"><Divide size={24} /></Button>
        <Button onClick={() => handleOperator('*')} variant="operator"><X size={24} /></Button>

        <Button onClick={() => handleNumber('7')}>7</Button>
        <Button onClick={() => handleNumber('8')}>8</Button>
        <Button onClick={() => handleNumber('9')}>9</Button>
        <Button onClick={() => handleOperator('-')} variant="operator"><Minus size={24} /></Button>

        <Button onClick={() => handleNumber('4')}>4</Button>
        <Button onClick={() => handleNumber('5')}>5</Button>
        <Button onClick={() => handleNumber('6')}>6</Button>
        <Button onClick={() => handleOperator('+')} variant="operator"><Plus size={24} /></Button>

        <Button onClick={() => handleNumber('1')}>1</Button>
        <Button onClick={() => handleNumber('2')}>2</Button>
        <Button onClick={() => handleNumber('3')}>3</Button>
        <Button onClick={calculate} variant="operator" className="row-span-2 h-[8.5rem]">
          <Equal size={32} />
        </Button>

        <Button onClick={() => handleNumber('0')} className="col-span-2">0</Button>
        <Button onClick={() => handleNumber('.')}>.</Button>
      </div>
    </div>
  );
};

export default App;