const Template = ({ name, size, color }) => {
    return `<nysoh-material-icon  size="${size}" color="${color}">${name}</nysoh-material-icon>`;
  };

  export default {
    title: 'Components/Icons/MaterialIcon',
    component: 'material',
     styleUrl: 'material.css',
     tags: ['autodocs'],
    argTypes: {
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
  
  export const Material = Template.bind({});
  
  Material.args = { 
    name: 'important_devices',
    size: 'medium', 
    color: 'green',
  };