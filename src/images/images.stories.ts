const Template = ({ imgSrc, alt, aria_label }) => {
  return `<nysoh-img img-src=${imgSrc} alt=${alt} aria-label=${aria_label}>
  <img src=${imgSrc} alt=${alt} aria-label=${aria_label}/>
  </nysoh-img>`;
};  

export default {
  title: 'Components/Images/NYSOHImages',
  component: 'images',
  tags: ['autodocs'],
  argTypes: {
   imgSrc: {
     control: {
        type: 'text'
     },
   },
   alt: {
      control: {
         type: 'text'
      },
    },
    aria_label: {
      control: {
         type: 'text'
      },
    },

 },
};

export const Img = Template.bind({});
Img.args = { 
  imgSrc: 'https://images.contentstack.io/v3/assets/bltd8dd235189eeddf6/blt54b88b542772cb5a/6307c9bdd6f96e04e700d3be/search_by_health_plan_pro_fac.svg',
  alt: 'Search by Health Plan, Provider, or Facility',
  aria_label: 'Search by Health Plan, Provider, or Facility'
 };
