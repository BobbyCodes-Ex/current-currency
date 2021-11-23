import React, { useEffect, useState } from 'react';
import './Chart.css';

function Chart(props) {
    const {
        currencyOptions,
        selectedCurrency,
        selectedCurrency2,
        //onChangeCurrency,
        //onChangeCurrency2,
        amount,
        amount2,
        //onChangeAmount,
        onChangeAmount2
    } = props


    function addCurrency(e) {
        e.preventDefault()
        console.log(selectedCurrency)
        
    }
   
    return (
        <div>
            <div className="back-ground">
                <div className="test">
                    <div className="holder container">
                    <div className="text-center">
                        <div className="title">Chart</div> 
                    </div>
                    <div className="currency-choice text-center">
                        <form onSubmit={addCurrency} className="text-center">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                                <select className="form-select" id="inputGroupSelect01">
                                    {currencyOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <button type="submit" className="btn btn-primary btn-sm">Add</button>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col col-6-lg chart-title">Currency</div>
                            <div className="col col-6-lg chart-title">Rate</div>
                        </div>
                        <div className="row">
                            <div className="col col-6-lg">{selectedCurrency2}</div>
                            <div className="col col-6-lg">{amount}</div>
                        </div>
                        <div className="row">
                            <div className="col col-6-lg">{selectedCurrency}</div>
                            <div className="col col-6-lg">{amount2}</div>
                        </div>
                        <div className="row">
                            <div className="col col-6-lg">
                            {currencyOptions.map(option => (
                                <div className="row">
                                <div className="col col-6-lg" key={option} value={option}>{option}{amount2}
                                </div>
                                </div>
                            ))}
                            </div>
                            <div value={amount2} onChange={onChangeAmount2}  type="number">{amount2}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
    

}

export default Chart