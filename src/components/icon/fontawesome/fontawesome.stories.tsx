const Template = ({ type, name, size, color }) => {
    return `<nysoh-fontawesome type="${type}" name="${name}" size="${size}" color="${color}"></nysoh-fontawesome>`;
  };

  
  
  export default {
    title: 'Components/Icons/FontAwesome',
    component: 'fontawesome',
     styleUrl: 'fontawesome.css',
     tags: ['autodocs'],
    argTypes: {
      type: {
        options: ['fas', 'far',   'fab' ],
        control: {
          type: 'radio',
        },
      },
      name: {
        control: { type: "text" },
      },
      size: {
        options: ['x-small', 'small',   'medium' , 'large' , 'x-large' , 'xx-large' ],
        control: {
          type: 'radio',
        },
     },
     color: {
        control: { type: "text" },
      },
    }
  };
  
  export const FontAwesome = Template.bind({});
  
  FontAwesome.args = { 
    type: 'fas', 
    name: 'fa-id-card',
    size: 'medium', 
    color: 'green',
  };