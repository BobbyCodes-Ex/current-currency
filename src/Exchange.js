import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './Exchange.css';
import Footer from './Footer';
import { checkStatus, json } from './utils/fetchUtils';

const base_URL = 'https://altexchangerateapi.herokuapp.com/latest?'
const test_URL = 'http://api.exchangeratesapi.io/v1/latest'

let chart;

function Exchange () {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [fromAmount, setFromAmount] = useState()
  const [toAmount, setToAmount] = useState(true)
  const [initialFetch, setInitialFetch] = useState(false);
  const [rates, setRates] = useState([]);

  useEffect(() => {
      fetch(base_URL)
          .then(res => res.json())
          .then(data => {
              const firstCurrency = Object.keys(data.rates)[1];
              const secondCurrency = Object.keys(data.rates)[0];
              setCurrencyOptions([...Object.keys(data.rates)]);
              setRates(data.rates);
              
              setFromCurrency(secondCurrency);
              setToCurrency(firstCurrency);
              setExchangeRate(data.base[firstCurrency]);
              setInitialFetch(true);
              console.log(data.base)
          })
  }, [])

  function handleFromAmountChange(e) {
    const amount = e.target.value;
    setFromAmount(amount)
    setToAmount((amount * exchangeRate).toFixed(2))
  }

  function handleToAmountChange(e) {
    const amount = e.target.value;
    setToAmount(amount)
    setFromAmount((amount / exchangeRate).toFixed(2))
  }

  const getHistoricalRates = (base, quote) => {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date((new Date).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    console.log('getH')

    fetch(`https://altexchangerateapi.herokuapp.com/${startDate}..${endDate}?from=${base}&to=${quote}`)
      .then(checkStatus)
      .then(json)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        console.log('a')

        const chartLabels = Object.keys(data.rates);
        const chartData = Object.values(data.rates).map(rate => rate[quote]);
        const chartLabel = `${base}/${quote}`;
        buildChart(chartLabels, chartData, chartLabel);
      })
      .catch(error => console.error(error.message));
  }

  const buildChart = (labels, data, label) => {
    const chartObj = document.getElementById('chartCanvas').getContext("2d");
    console.log(chartObj)
    if (typeof chart !== "undefined") {
      chart.destroy();
    }

    chart = new Chart(chartObj, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: label,
            data,
            fill: false,
            tension: 0,
          }
        ]
      },
      options: {
        responsive: true,
      }
    })
  }

  useEffect(() =>{
    if(fromCurrency != null && toCurrency != null) {
      fetch(`${base_URL}&base=${fromCurrency}&symbols=${toCurrency}`)
     .then(res => res.json())
     .then(data => {
        setExchangeRate(data.rates[toCurrency])
        getHistoricalRates(fromCurrency, toCurrency);
      })
    }
  }, [fromCurrency, toCurrency]) 

  if (!initialFetch) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
    <div className="back-ground">
      <div className="test">
        <div className="holder container">
          <div className="text-center">
            <div className="title">Exchange 2</div> 
          </div>
          <div className="row text-center">
              <div className="col col-6-lg exchange-title">My Currency</div>
              <div className="col col-6-lg exchange-title">Currency I Want</div>
            </div>
          <div className="row">
            <div className="col col-lg-6">
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} className="form-select" id="inputGroupSelect01">
                  {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} className="form-select" id="inputGroupSelect01">
                  {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <i className='fas fa-equals equal-symbol'></i>
          <div className="row">
            <div className="col col-lg-6">
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Amount</label>
                <input value={fromAmount || ''} onChange={handleFromAmountChange}  id="inputGroupSelect01" type="number" min="1"></input>  
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Amount</label>
                <input value={toAmount || ''} onChange={handleToAmountChange} id="inputGroupSelect01" type="number" min="1"></input>
              </div>
            </div>
            <div></div>
          </div>
          <canvas id="chartCanvas" />
        </div>
      </div>
      <div className="fixed-bottom"><Footer></Footer></div>
       
    </div>

    </div>
  )


}

export default Exchange 