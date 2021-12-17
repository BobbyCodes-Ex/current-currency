import React, { useEffect, useState } from 'react';
import './Chart.css';
import Footer from './Footer';

const base_URL = 'https://altexchangerateapi.herokuapp.com/latest?'

function Chart(props) {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  
  const [base, setBase] = useState('USD');
  const [amount, setAmount] = useState(1);
  
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch(base_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([...Object.keys(data.rates)]);
    })
  }, [])

  useEffect(() =>{
    if(base != null) {

      fetch(`${base_URL}&base=${base}`)
     .then(res => res.json())
     .then(data => {
        setRates(data.rates);
      })
    }
  }, [base]) 

  function onChangeAmount(e) {
    setAmount(e.target.value)
  }

  const handleCurrencyChange = (e) => {
    console.log(e.target.value)
    setBase(e.target.value)
  }

  return (
    <div>
      <div className="back-ground">
        <div className="test">
          <div className="holder-2 container">
            <div className="text-center">
              <div className="title">Chart</div>
            </div>
            <div className="currency-choice text-center">
              <div className="row">
                <div className="col col-6-lg chart-title">Currency</div>
                <div className="col col-6-lg chart-title">Rate</div>
              </div>
              <div className="row">
                <div className="col col-lg-6">
                  <div className="input-group mb-3">
                    <select value={base} onChange={handleCurrencyChange} className="text-center form-select" >
                      {currencyOptions.map(cur => (
                        <option key={cur} value={cur}>{cur}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col col-lg-6 text-center">
                  <div className="input-group mb-3 text-center">
                    <input className="text-center"value={amount} onChange={onChangeAmount} id="inputGroupSelect01" type="number" min="1"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                {Object.keys(rates).map(sym => (
                <div className="col-12" key={sym}>
                  {sym}: {(amount * rates[sym]).toFixed(2)}
                </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      
    </div>
    
  )
  

}

export default Chart