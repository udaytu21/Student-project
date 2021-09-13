import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      student:[],
      id:0,
      Name:'',
      Dob:'',
      Clas:['I', 'II', 'III', 'IV', 'V', 'V1', 'V11', 'V111', '1X','X','X11','X12'],
      Div:['A','B','C'],
      Gender:''
    }
    this.onChangeValue =this.onChangeValue.bind(this);
  }
  onChangeValue(event) {
    console.log(event.target.value);
}

  componentDidMount(){
   axios.get("http://localhost:8080/api/")
   .then((res)=>{
     this.setState({
       student:res.data,
       id:0,
       Name:'',
       Dob:'',
       Clas:'',
       Div:'',
       Gender:''
     }) 
   })
  }
  submit(evenet,id){
    evenet.preventDefault();
    if(id===0){
    axios.post("http://localhost:8080/api/",
    {
      id:this.state.id,
      Name:this.state.Name,
      Dob:this.state.Dob,
      Clas:this.state.Clas,
      Div:this.state.Div,
      Gender:this.state.Gender
}).then(()=>{
  this.componentDidMount();
})
    }else{
      axios.put("http://localhost:8080/api/",{
        id:this.state.id,
        Name:this.state.Name,
        Dob:this.state.Dob,
        Clas:this.state.Clas,
        Div:this.state.Div,
        Gender:this.state.Gender
  }).then(()=>{
    this.componentDidMount();
  })
    }
  }
  render(){
  return (
    
    <div className="container">
      <div className="row">
      <div className="col s6">     
                <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                <div className="input-field col s12">
          <input type="text" value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})}   />
        </div>
        <div className="input-field col s12">
      
          <input type="date" value={this.state.Dob} onChange={(e)=>this.setState({Dob:e.target.value})}  />
          
          </div>
    <div>
          <Dropdown placeholder="Select Class" options={this.state.Clas}/>    
     </div>
     <p>
     <div>
          <Dropdown placeholder="Select Division" options={this.state.Div}/>    
     </div>
     </p>
     
         <div class="input-field col s12" onChange={this.onChangeValue}> 
       
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
     
         </div>       
    <p>         
        <input type="button" value="Submit" />
   </p>
            </form>
         </div>
         <div className="col s6">
         <table>
         <thead>
           <tr>
               <th>Admission No:</th>
              <th> Name</th>
              <th>Dob</th>
              <th>Class</th>
               <th>Div</th>
             <th>Gender</th>
          </tr>

         </thead>

         <tbody>
        {
            this.state.student.map(student =>
              <tr key={student.id}>
              <td> {student.Name}</td>
              <td>{student.Dob}</td>
              <td>{student.Clas}</td>
              <td>{student.Div}</td>
              <td>{student.Gender}</td>
            </tr>
  
              )
          }
        </tbody>
      </table>
        </div>
      </div>
       </div>
  );
}
}
export default App;