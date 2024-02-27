const Template = () => {
  return `<nysoh-copyright></nysoh-copyright>`;
};

export default {
   title: 'Components/Copyright/Copyright',
   component: 'copyright',
   tags: ['autodocs'],
   argTypes: {
    copyright: {
      control: {
        type: 'text',
      },
    }
  },
};

export const Copyright = Template.bind({});
Copyright.args = { 
  copyright: 'getCurrentYear()'
};