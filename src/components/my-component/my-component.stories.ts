const Template = ({ imgSrc }) => {
    return `<nysoh-logo img-src='${imgSrc}' alt="NYSOH Logo" aria-label="New York State of Health Logo">
            </nysoh-logo>`;
  };
  
  export default {
    title: 'Components/Logo/NYSOHLogo',
    tags: ['autodocs'],
  };
  
  export const Logo = Template.bind({});
  Logo.args = { imgSrc: 'https://images.contentstack.io/v3/assets/bltd8dd235189eeddf6/blt439d824c52221e91/6307cd6044cff61b783af942/nysoh-logo-main.png' };
  