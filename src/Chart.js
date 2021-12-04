import React, { useEffect, useState } from 'react';
import './Chart.css';
import Footer from './Footer';

function Chart(props) {
    const {
        currencyOptions,
        selectedCurrency,
        selectedCurrency2,
        onChangeCurrency,
        onChangeCurrency2,
        amount,
        amount2,
        onChangeAmount,
        onChangeAmount2,
        rates
    } = props


    function addCurrency(e) {
        e.preventDefault()
        console.log(selectedCurrency2)
        
    }
   
    console.log(rates)

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
                                        <select value={selectedCurrency2} onChange={onChangeCurrency2} className="text-center form-select" id="inputGroupSelect01">
                                            {currencyOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col col-lg-6 text-center">
                                    <div className="input-group mb-3 text-center">
                                        <input className="text-center"value={amount} onChange={onChangeAmount} id="inputGroupSelect01" type="number"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {Object.keys(rates).map(sym => (
                                <div className="col-12" value={selectedCurrency} onChange={onChangeCurrency}key={sym}>
                                    {sym}: {amount * rates[sym].toFixed(4)}
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