import React from 'react';
import './Chart.css';

class Chart extends React.Component {
    render () {
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
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupSelect01">Currency</label>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
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

}

export default Chart