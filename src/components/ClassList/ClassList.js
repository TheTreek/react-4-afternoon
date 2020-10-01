import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res=>{
        this.setState({students: res.data});
      }).catch(err=>console.log(err));
  }

  render() {
    console.log(this.state.students);
    const students = this.state.students.map((el,i)=>{
      return (
        <Link to={`/student/${el.id}`} key={i}>
          <h3>{el.first_name} {el.last_name}</h3>
        </Link>
      );
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    )
  }
}