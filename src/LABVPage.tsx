import MultiBalviharPage from './MultiBalviharPage';
class LABVPage extends MultiBalviharPage {
constructor(){
super(); 
 this.uiSchema = {
       
        title: {
              "ui:widget": "color" 
              },
         
          name: {
                 classNames: 'threeColumn',

               },

           
            email:{
              classNames:'halfWidth',
              "ui:autofocus": true

            },
            phone:{
            classNames:'halfWidth',
            
            },
            dateofbirth:{
            classNames:'halfWidth'
            }, 
            profession:{classNames:'halfWidth',  
                       },
            address:{
            classNames: 'threeColumn'
            }
       
  };
 }
}

export default LABVPage;