import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import axios from 'axios'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'https://fatauni.herokuapp.com/fata/v1/public'

export default class Message extends Component {

  constructor(props) {
    console.log(props.params)
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      idParams:
      {
        id: props.params.id
      },
      message: ''
    }
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    alert('id: ' + this.state.idParams.id + ' Mensagem Enviada: ' + this.state.message);
    event.preventDefault();
    this.setState({ message: '' });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <textarea value={this.state.message} onChange={this.handleChange} className="form-control" rows="3" placeholder="Escreva Mensagem...">

          </textarea>
          <button className='btn btn-primary' type="submit" >
            Enviar
          </button>
        </div>
      </form>
    )
  }

}


