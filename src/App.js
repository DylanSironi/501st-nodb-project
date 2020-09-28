import React, {Component} from 'react';
import Header from './Components/Header';
import Recruiter from './Components/Recruiter';
import Roster from './Components/Roster';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myTroopers: []
    }
    this.recruitTroopers = this.recruitTroopers.bind(this);
  }

  componentDidMount(){

    axios.get('/api/my-troopers')
    .then(res => {
      this.setState({myTroopers: res.data})
    })
    .catch(err => console.log(err));
  }

  recruitTroopers(troopers){
    axios.post('/api/my-troopers', {troopers: troopers})
    .then(res => {
      this.setState({myTroopers: res.data})
      console.log(res.data)
    })
    .catch(err => console.log(err));
    
  }
  
  editName = (id, newName) => {
    let body = {name: newName};

    axios.put(`/api/my-troopers/${id}`, body)
    .then(res => {
      this.setState({myTroopers: res.data})
    })
    .catch(err => console.log(err));
  }

  KIATroopers = (id) => {
    axios.delete(`/api/my-troopers/${id}`)
    .then(res => {
      this.setState({myTroopers: res.data})
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Recruiter 
          recruitFn={this.recruitTroopers}/>
        <Roster 
          myTroopers={this.state.myTroopers}
          nameFn={this.editName}
          KIAFn={this.KIATroopers}/>
      </div>
    )
  }
}

export default App;