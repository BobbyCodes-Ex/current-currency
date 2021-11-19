import React from 'react';
import './Exchange.css';

class Exchange extends React.Component {

   


    render () {
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
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupSelect01">Currency</label>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col col-lg-6">
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupSelect01">Currency</label>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <i class='fas fa-equals equal-symbol'></i>
                        <div className="row">
                            <div className="col col-lg-6">
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupSelect01">Amount</label>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col col-lg-6">
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupSelect01">Amount</label>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>

            </div>
        )
    }

}

export default Exchange 