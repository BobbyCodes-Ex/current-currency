import React from 'react';
import './Exchange.css';
import Footer from './Footer';


function Exchange (props) {

    const {
        currencyOptions,
        selectedCurrency,
        selectedCurrency2,
        onChangeCurrency,
        onChangeCurrency2,
        amount,
        amount2,
        onChangeAmount,
        onChangeAmount2
    } = props
    
    return (
        <div>
        <div className="back-ground">
            <div className="test">
                <div className="holder container">
                    <div className="text-center">
                        <div className="title">Exchange</div> 
                    </div>
                    <div className="row text-center">
                            <div className="col col-6-lg exchange-title">My Currency</div>
                            <div className="col col-6-lg exchange-title">Currency I Want</div>
                        </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                                <select value={selectedCurrency2} onChange={onChangeCurrency2} className="form-select" id="inputGroupSelect01">
                                    {currencyOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col col-lg-6">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                                <select value={selectedCurrency} onChange={onChangeCurrency} className="form-select" id="inputGroupSelect01">
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
                                <input value={Number(amount).toFixed(2)} onChange={onChangeAmount}  id="inputGroupSelect01" type="number" min="1"></input>  
                            </div>
                        </div>
                        <div className="col col-lg-6">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Amount</label>
                                <input value={Number(amount2).toFixed(2)} onChange={onChangeAmount2} id="inputGroupSelect01" type="number" min="1"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom"><Footer></Footer></div>
           
        </div>

        </div>
    )


}

export default Exchange 