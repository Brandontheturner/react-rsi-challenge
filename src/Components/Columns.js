import React, { Component } from "react";

export class Columns extends Component {
  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col-4 text-center border'>
            <h2 class='border-bottom'>Self Assessment +</h2>
            <h1>$600/mo</h1>
            <div className='dropdown'>
              <button
                class='btn btn-primary'
                type='button'
                data-toggle='collapse'
                data-target='.multi-collapse'
                aria-expanded='false'
                aria-controls='column1'
              >
                Details +/-
              </button>
              <div class='row'>
                <div class='col'>
                  <div class='collapse multi-collapse' id='column1'>
                    <div class='card card-body'>
                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item text-left'>
                          -Onsite Security Assessment with our virtual CISO's
                          based on regulation/framework of client's choice.
                        </li>
                        <li class='list-group-item text-left'>
                          -Risk Assessment Report with Compliance Scores
                        </li>
                        <li class='list-group-item text-left'>
                          -Remediation Plan (risks ranked by criticality with
                          Corrective Actions)
                        </li>
                        <li class='list-group-item text-left'>
                          -Government audit preparation and support if required.
                        </li>
                        <li class='list-group-item text-left'>
                          -One Year subscription to CyberCompass
                        </li>
                        <ul>
                          <li class='list-group-item text-right'>
                            --Officer Training for CyberCompass
                          </li>
                          <li class='list-group-item text-right'>
                            --Risk Assessment results available directly from
                            tool.
                          </li>
                          <li class='list-group-item text-right'>
                            --Prioritize Issues Management, Remediation
                            tracking.
                          </li>
                        </ul>
                        <ul />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-4 text-center border'>
            <h2 class='border-bottom'>Remote Assessment</h2>
            <h1>$900/mo</h1>
            <div className='dropdown'>
              <button
                class='btn btn-primary'
                type='button'
                data-toggle='collapse'
                data-target='.multi-collapse'
                aria-expanded='false'
                aria-controls='column1'
              >
                Details +/-
              </button>
              <div class='row'>
                <div class='col'>
                  <div class='collapse multi-collapse' id='column1'>
                    <div class='card card-body'>
                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item text-left'>
                          -Onsite Security Assessment with our virtual CISO's
                          based on regulation/framework of client's choice.
                        </li>
                        <li class='list-group-item text-left'>
                          -Risk Assessment Report with Compliance Scores
                        </li>
                        <li class='list-group-item text-left'>
                          -Remediation Plan (risks ranked by criticality with
                          Corrective Actions)
                        </li>
                        <li class='list-group-item text-left'>
                          -Government audit preparation and support if required.
                        </li>
                        <li class='list-group-item text-left'>
                          -One Year subscription to CyberCompass
                        </li>
                        <ul>
                          <li class='list-group-item text-right'>
                            --Officer Training for CyberCompass
                          </li>
                          <li class='list-group-item text-right'>
                            --Risk Assessment results available directly from
                            tool.
                          </li>
                          <li class='list-group-item text-right'>
                            --Prioritize Issues Management, Remediation
                            tracking.
                          </li>
                        </ul>

                        <ul />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-4 text-center border'>
            <h2 class='border-bottom'>Onsite Assessment</h2>
            <h1>$1000/mo</h1>
            <div className='dropdown'>
              <button
                class='btn btn-primary'
                type='button'
                data-toggle='collapse'
                data-target='.multi-collapse'
                aria-expanded='false'
                aria-controls='column1'
              >
                Details +/-
              </button>
              <div class='row'>
                <div class='col'>
                  <div class='collapse multi-collapse' id='column1'>
                    <div class='card card-body'>
                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item text-left'>
                          -Onsite Security Assessment with our virtual CISO's
                          based on regulation/framework of client's choice.
                        </li>
                        <li class='list-group-item text-left'>
                          -Risk Assessment Report with Compliance Scores
                        </li>
                        <li class='list-group-item text-left'>
                          -Remediation Plan (risks ranked by criticality with
                          Corrective Actions)
                        </li>
                        <li class='list-group-item text-left'>
                          -Government audit preparation and support if required.
                        </li>
                        <li class='list-group-item text-left'>
                          -One Year subscription to CyberCompass
                        </li>
                        <ul>
                          <li class='list-group-item text-right'>
                            --Officer Training for CyberCompass
                          </li>
                          <li class='list-group-item text-right'>
                            --Risk Assessment results available directly from
                            tool.
                          </li>
                          <li class='list-group-item text-right'>
                            --Prioritize Issues Management, Remediation
                            tracking.
                          </li>
                        </ul>

                        <ul />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Columns;
