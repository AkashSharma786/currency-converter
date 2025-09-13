import { useState } from 'react'
import InputBox from './InputBox.jsx'
import GetData from './GetData.jsx';

function App() {
  
  const [fromAmount, onFromAmountChange] = useState(1);
  const [toAmount, onToAmountChange] = useState(1);
  const [fromCurrency, onFromCurrencyChange] = useState("inr");
  const [toCurrency, onToCurrencyChange] = useState("usd");

  const data = GetData();
  const currencies = data ? Object.keys(data) : [];

  function convert() {
    console.log(fromAmount, fromCurrency, toCurrency);
    if (!data) return null;

    const fromRate = data[fromCurrency];
    const toRate = data[toCurrency];

    if (!fromRate || !toRate) return null;

    const convertedAmount = (fromAmount / fromRate) * toRate;
    onToAmountChange(convertedAmount.toFixed(2));

  }
  function swapCurrencies() {
    const tempAmount = fromAmount;
    const tempCurrency = fromCurrency;

    onFromAmountChange(toAmount);
    onFromCurrencyChange(toCurrency);

    onToAmountChange(tempAmount);
    onToCurrencyChange(tempCurrency);
  }

  return (
    <>
      <div className="flex flex-col  gap-x-3 gap-6 bg-gray-50 bg-opacity-50 p-10 rounded-lg shadow-lg">
        <h1 className='text-2xl  mb-5'>Currency Converter</h1>
        <InputBox
          label="From"
          currencies={currencies}
          amount={fromAmount} 
          onAmountChange={onFromAmountChange} 
          selectedCurrency={fromCurrency} 
          onCurrencyChange={onFromCurrencyChange}
        />
        <button className='bg-blue-500 text-white p-2 rounded fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3'
        onClick={swapCurrencies}
        >Swap</button>
        <InputBox
          label="To" 
          currencies={currencies}
          amount={toAmount} 
          onAmountChange={onToAmountChange} 
          selectedCurrency={toCurrency} onCurrencyChange={onToCurrencyChange}
        />
        <button
          className='bg-green-500 p-2 text-white  rounded hover:bg-green-600 transition'
        onClick={convert}
        >Convert</button>
      </div>
    </>
  )
}

export default App
