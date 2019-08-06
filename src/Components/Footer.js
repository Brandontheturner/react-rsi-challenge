import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div class='container'>
        <div className='row'>
          <div className='col-6 text-center'>
            <h3>Resources For Clients</h3>
            <p>
              <u>CyberCompass Success Story - NY DFS</u>
            </p>
            <p>
              <u>RSI's vCISO Services</u>
            </p>
            <p>
              <u>CyberCompass Case Study (OCR Fine Dismissed)</u>
            </p>
          </div>
          <div className='col-6 text-center'>
            <h3>Resources for Partners</h3>
            <p>
              <u>CyberCompass BattleCard</u>
            </p>
            <p>
              <u>CyberCompass Sales Sheet</u>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
