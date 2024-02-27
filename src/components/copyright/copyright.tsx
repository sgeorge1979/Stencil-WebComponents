import { Component,  h } from '@stencil/core';

@Component({
  tag: 'nysoh-copyright',
  shadow: true,
  assetsDirs: [ '../../css' ]
})
export class Copyright {
    getCurrentYear() {
        return new Date().getFullYear();
    }

  render() {
    return (
     <span> ©{this.getCurrentYear()} NY State of Health, All Rights Reserved. </span>
    );
  }

 }