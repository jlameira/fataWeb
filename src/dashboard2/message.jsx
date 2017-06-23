import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import axios from 'axios'
import { toastr } from 'react-redux-toastr'

export default class Message extends Component {

  constructor(props) {
    console.log(props.params)
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      idEmpresa: props.params.idEmpresa,
      idRequisicao: props.params.idRequisicao,
      message: '',
      number: 0
    }
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }
  handleInputChange(event) {
    this.setState({ number: event.target.value })
  }

  handleSubmit(event) {
    const idRequisicao = this.state.idRequisicao
    const values = {
      "company": this.state.idEmpresa,
      "value": this.state.number,
      "text": this.state.message
    }
    axios.post(`https://fatauni.herokuapp.com/fata/v1/protected/transport/response/${idRequisicao}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.')
        event.preventDefault();
        this.setState({ message: '', number: 0 });
      })
      .catch(e => {
        if (e.response) {
          Object.keys(e.response.data).forEach(error => toastr.error('Erro ', error))
        } else {

          toastr.error('Erro ', e.message)
        }
      })

  }


  render() {
    return (
      <form>

        <div className='input-group'>
          <br />
          <label className='col-sm-2 control-label'>
            Valor:
          </label>
          <div className='col-sm-10'>
            <input
              name="valor"
              type="number"
              className='form-control'
              value={this.state.number}
              onChange={this.handleInputChange} />
          </div>

        </div>
        <br />
        <div className='form-group'>
          <textarea value={this.state.message} onChange={this.handleChange} className="form-control" rows="3" placeholder="Escreva Mensagem...">

          </textarea>
          <button className='btn btn-primary' type="button" onClick={this.handleSubmit} >
            Enviar
          </button>
        </div>
      </form>
    )
  }

}


