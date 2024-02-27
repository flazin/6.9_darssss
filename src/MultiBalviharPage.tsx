import * as React from 'react';
import Form from 'react-jsonschema-form';
import './FormPage.css';
class MultiBalviharPage extends React.Component {
protected schema : any;
protected uiSchema : any;
//protected ui1Schema : any;
constructor(){
super();
  
this.schema= {
              title: 'Balavihar Registration',
              type: 'object',
              properties: {
              name: {
                          type: 'object',
                          title: '',
                          properties: {
                            'first': {type: 'string', title: 'First Name'},
                            'middle':{type: 'string', title: 'Middle Name'},
                            'last':  {type: 'string', title: 'Last Name'}
                            }
                    },   
                email: {type: 'string', format: 'email'},
               
                phone: {type: 'string', title: 'Phone'},
                dateofbirth:{type: 'string', format: 'date'}, 
                profession: {
                    type: "string",
                    title: "Profession",
                     enum: ["Account Manager","Alternative Medicine","Architecture","Art & Fabrics","Biostatistician",
                  "Clinical Lab Scientist","Clinical Research","Dance & Fine Arts","Dentist",
                  "Engineering - Biomedical","Engineering - Chemical","Engineering - Civil",
                  "Engineering - Electrical","Engineering - Electronics", "Engineering - Environmental",
                  "Engineering - Industrial","Engineering - Management","Engineering - Mechanical",
                  "Engineering - Metallurgy","Engineering - Other","Entreprenuer - Construction",
                  "Entreprenuer - Education","Entreprenuer - Electronics","Entreprenuer - Food Industry",
                  "Entreprenuer - Hospitality Industry","Entreprenuer - Import & Export","Entreprenuer - Other",
                  "Entreprenuer - Real Estate","Entreprenuer - Software Industry","Finance - Accounting",
                  "Finance - CPA","Finance - Mortgage","Finance - Other","Finance - Personal Banker",
                  "Finance - Personal Finance","Finance - Tax Consulting","Finance - Wealth Management",
                  "Front Office Management","Government","Graduate Student","Histotechnologist","Homemaker",
                  "Hotel Management","Human Resources","Insurance Agents","Journalism","Lab Associate","Lawyer",
                  "Medical Assistant","Network Engineer","Nurse","Pharmacist","Physician - Cardiology",
                  "Physician - Internal Medicine","Physician - Nephrologist","Physician - Neurosurgeon",
                  "Physician - OB/GYN","Physician - Oncology","Physician - Ophthalmologists",
                  "Physician - Optometrist","Physician - Orthopedics","Physician - Other","Physician - Pediatrician",
                  "Professor - College","Project Management","Psychotherapist","Regulatory Affairs","Rehabilitation",
                  "Research","Sales & Marketing","Social Work","Software - Big Data/Statistics","Software - Business/System Analyst",
                  "Software - Cloud (AWS)","Software - Cloud (others)","Software - Database","Software - Development",
                  "Software - iOS/Android Development","Software - Management/Executive","Software - Other","Software - Testing",
                  "Software - UI/UX Designer","Teacher - Elementary School","Teacher - High School","Teacher - Middle School",
                  "Teacher - Other","Teacher - PreSchool","Teacher - Private Tutoring"]
                  },
                address: {
                          type: 'object',
                          properties: {
                            "street_address": { "type": "string" },
                            "city":           { "type": "string" },
                            "state":          { "type": "string" },
                            "country":        { "type": "string" },
                            "zip_code":       { "type": "string" }
                           },
                       }
                }
            };

}
render() {
    return (
        <div className="App">
            <h1>Chinmaya Mission Worldwide</h1>
            <Form
              schema={this.schema}
              uiSchema={this.uiSchema}
             
            />
        </div>
      );
  }
}

export default MultiBalviharPage;