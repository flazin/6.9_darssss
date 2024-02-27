import MultiBalviharPage from './MultiBalviharPage';
class BostonBVPage extends MultiBalviharPage {
constructor(){
super();  
 this.uiSchema = {   
        title: {
              "ui:widget": "color" 
              }, 
          name: {
                 classNames: 'threeColumn',
                  middle:{
                  "ui:widget": "hidden" 
                 }
               },
         
            email:{
              classNames:'halfWidth'
            },
            phone:{
            classNames:'halfWidth'
            },
            dateofbirth:{
            classNames:'halfWidth'
            },
            address:{
            classNames: 'threeColumn'
            }
       
  };
 }
}

export default BostonBVPage;