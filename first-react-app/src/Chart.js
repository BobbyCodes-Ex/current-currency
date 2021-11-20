import React from 'react';
import './Chart.css';

function Chart(props) {
    const {
        currencyOptions
    } = props
   
    return (
        <div>
            <div className="back-ground">
                <div className="test">
                    <div className="holder container">
                    <div className="text-center">
                        <div className="title">Chart</div> 
                    </div>
                    <div className="currency-choice text-center">
                        <form className="text-center">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                                <select className="form-select" id="inputGroupSelect01">
                                    {currencyOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <button type="button" className="btn btn-primary btn-sm">Add</button>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col col-6-lg chart-title">Currency</div>
                            <div className="col col-6-lg chart-title">Rate</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
    

}

export default Chart