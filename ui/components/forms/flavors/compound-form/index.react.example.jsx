/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only' style={{width: '440px'}}>
  <fieldset className={pf('form--compound')}>
    <legend className={pf('form-element__label')}>Location</legend>
    <div className={pf('form-element__group')}>
      <div className={pf('form-element__row')}>
        <label className={pf('form-element__control size--1-of-2')}>
          <span className={pf('form-element__helper')}>Latitude</span>
          <input className={pf('input')} type="text" />
        </label>
        <label className={pf('form-element__control size--1-of-2')}>
          <span className={pf('form-element__helper')}>Longitude</span>
          <input className={pf('input')} type="text" />
        </label>
      </div>
    </div>
  </fieldset>

  <fieldset className={pf('form--compound')}>
    <legend className={pf('form-element__label')}>Address</legend>
    <div className={pf('form-element__group')}>
      <div className={pf('form-element__row')}>
        <label className={pf('form-element__control size--1-of-1')}>
          <span className={pf('form-element__helper')}>Street</span>
          <input className={pf('input')} type="text" />
        </label>
      </div>
      <div className={pf('form-element__row')}>
        <label className={pf('form-element__control size--1-of-2')}>
          <span className={pf('form-element__helper')}>City</span>
          <input className={pf('input')} type="text" />
        </label>
        <label className={pf('form-element__control size--1-of-2')}>
          <span className={pf('form-element__helper')}>State</span>
          <input className={pf('input')} type="text" />
        </label>
      </div>
      <div className={pf('form-element__row')}>
        <label className={pf('form-element__control size--1-of-2')}>
          <span className={pf('form-element__helper')}>ZIP Code</span>
          <input className={pf('input')} type="text" />
        </label>
      </div>
    </div>
  </fieldset>
</div>
);
