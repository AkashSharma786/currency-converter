import { useState } from 'react'
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencies = ["usd", "inr", "eur"],
    selectedCurrency = "inr",
    
}) {

  return (
    <>
        <div className='flex flex-col bg-white rounded'>
            <div className='flex justify-between mb-2 w-11/12'>
                <label >{label} </label>
                <select value={selectedCurrency} 
                 onChange={(e) => onCurrencyChange(e.target.value)}
                >
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
            <input  type="text" placeholder="Enter amount" value={amount} 
            onChange={(e) => onAmountChange(e.target.value)}
            className='p-2 border border-gray-300 rounded '
            />
        </div>
    </>
  );
}

export default InputBox;
