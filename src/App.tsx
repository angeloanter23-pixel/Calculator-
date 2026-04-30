import React, { useState } from 'react';
import { Calculator, History, RotateCcw, Delete, Equal, Minus, Plus, X, Divide, Percent } from 'lucide-react';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [lastResult, setLastResult] = useState<number | null>(null);

  const handleNumber = (num: string) => {
    if (display === '0' || lastResult !== null) {
      setDisplay(num);
      setLastResult(null);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const fullEquation = equation + display;
      // Basic eval-like logic for simple ops
      const result = eval(fullEquation.replace('×', '*').replace('÷', '/'));
      setDisplay(String(Number(result.toFixed(8))));
      setEquation('');
      setLastResult(result);
    } catch (e) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setLastResult(null);
  };

  const deleteLast = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const toggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const percentage = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const Button = ({ children, onClick, variant = 'default', className = '' }: any) => {
    const variants: any = {
      default: 'bg-slate-800 hover:bg-slate-700 text-white',
      operator: 'bg-orange-500 hover:bg-orange-400 text-white',
      action: 'bg-slate-600 hover:bg-slate-500 text-white',
      special: 'bg-slate-700 hover:bg-slate-600 text-teal-400 font-bold',
    };

    return (
      <button
        onClick={onClick}
        className={`h-16 w-full rounded-2xl text-xl font-medium transition-all active:scale-95 flex items-center justify-center shadow-lg ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm bg-slate-900 p-6 rounded-[2.5rem] shadow-2xl border border-slate-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Calculator size={20} />
            <span className="text-xs font-semibold uppercase tracking-widest">Calculator</span>
          </div>
          <History size={20} className="text-slate-500 cursor-pointer hover:text-slate-300 transition-colors" />
        </div>

        {/* Display */}
        <div className="mb-8 px-2 text-right min-h-[120px] flex flex-col justify-end overflow-hidden">
          <div className="text-slate-500 text-lg h-8 mb-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {equation}
          </div>
          <div className="text-6xl font-light text-white overflow-x-auto whitespace-nowrap scrollbar-hide">
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-4">
          <Button onClick={clear} variant="action">
            <RotateCcw size={22} className="text-orange-400" />
          </Button>
          <Button onClick={toggleSign} variant="action">+/-</Button>
          <Button onClick={percentage} variant="action"><Percent size={20} /></Button>
          <Button onClick={() => handleOperator('/')} variant="operator"><Divide size={24} /></Button>

          <Button onClick={() => handleNumber('7')}>7</Button>
          <Button onClick={() => handleNumber('8')}>8</Button>
          <Button onClick={() => handleNumber('9')}>9</Button>
          <Button onClick={() => handleOperator('*')} variant="operator"><X size={24} /></Button>

          <Button onClick={() => handleNumber('4')}>4</Button>
          <Button onClick={() => handleNumber('5')}>5</Button>
          <Button onClick={() => handleNumber('6')}>6</Button>
          <Button onClick={() => handleOperator('-')} variant="operator"><Minus size={24} /></Button>

          <Button onClick={() => handleNumber('1')}>1</Button>
          <Button onClick={() => handleNumber('2')}>2</Button>
          <Button onClick={() => handleNumber('3')}>3</Button>
          <Button onClick={() => handleOperator('+')} variant="operator"><Plus size={24} /></Button>

          <Button onClick={() => handleNumber('0')} className="col-span-1">0</Button>
          <Button onClick={() => handleNumber('.')}>.</Button>
          <Button onClick={deleteLast}><Delete size={22} /></Button>
          <Button onClick={calculate} variant="operator" className="bg-gradient-to-br from-orange-500 to-orange-600">
            <Equal size={28} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;