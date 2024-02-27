import MultiBalviharPage from './MultiBalviharPage';
class OrlandoBVPage extends MultiBalviharPage {
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
            "ui:placeholder": "023-222-6666"
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

export default OrlandoBVPage;