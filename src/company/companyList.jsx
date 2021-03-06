import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './companyAction'

class CompanyList extends Component {
  componentWillMount() {
    this.props.getList()

  }

  renderRows() {
    const list = this.props.list || []
    return list.map(cp => (
      <tr key={cp._id}>
        <td>{cp._00}</td>
        <td>{cp._03}</td>
        <td>{cp._04}</td>
        <td>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(cp)}>
            <i className='fa fa-pencil'></i>
          </button>
          {/*fatorar aula todo*/}
          <button className='btn btn-danger' onClick={() => this.props.showDelete(cp)}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
      </tr>

    ))
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {this.renderRows()}

          </tbody>

        </table>
      </div>
    )
  }
}
const mapStateToProps = state => ({ list: state.company.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)