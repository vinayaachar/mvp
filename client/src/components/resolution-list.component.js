import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Resolution = props => (
  <tr>
    <td>{props.resolution.username}</td>
    <td>{props.resolution.description}</td>
    <td>{props.resolution.duration}</td>
    <td>{props.resolution.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.resolution._id}>edit</Link> | <a href='#' onClick={() => {props.deleteResolution(props.resolution._id) }}>delete</a>
    </td>
  </tr>
)

export default class ResolutionList extends Component {
  constructor(props) {
    super(props);

    this.deleteResolution = this.deleteResolution.bind(this);

    this.state = {resolution: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/resolution/')
      .then(response => {
        this.setState({resolution: response.data})
      })
      .catch(err => console.log(err))
  }

  deleteResolution(id) {
    axios.delete('http://localhost:4000/resolution/'+id)
      .then(res => console.log(res.data))

      this.setState({
        resolution: this.state.resolution.filter(el => el._id !== id)
      })
  }

  resolutionList() {
    return this.state.resolution.map(currentresolution => {
      return <Resolution resolution={currentresolution} deleteResolution={this.deleteResolution} key={currentresolution._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Resolutions</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.resolutionList()}
          </tbody>
        </table>
      </div>
    )
  }
}