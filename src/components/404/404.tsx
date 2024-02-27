import { Component,  h } from '@stencil/core';

@Component({
  tag: 'nysoh-404',
  shadow: true,
   //assetsDirs: [ '../../css' ]
   styleUrl: '404.scss',
})
export class NYSOH_404 {

  render() {
    return (
      <div class="container">
        <label class="header_404">404</label>
        <h2>We are sorry.  It looks like the page you are trying to access is not available.</h2>
         <p>We are sorry for the inconvenience.  The NY Health Plan Marketplace has come across an unexpected error.  We are working to fix the problem.  Try again in a few minutes.</p>
       
        <h2>Don't worry! Your personal information is safe.</h2>
	    <p>The NY Health Plan Marketplace cares about your privacy.  The Marketplace keeps your information safe and secure through authentication, monitoring, auditing, and encryption.  These security procedures have been integrated into the design, implementation, and day-to-day operations of the Marektplace.</p>
        <p>If you have any questions or would like more information, take a look at <a href="http://info.nystateofhealth.ny.gov/" target="_blank">"About Us"</a>, <a href="http://info.nystateofhealth.ny.gov/resources" target="_blank" >"Additional Resources"</a> or <a href="/frequently-asked-questions.html" title="Frequently Asked Questions" target="_blank">"Frequently Asked Questions"</a>.</p>
    </div>
    );
  }

  

}