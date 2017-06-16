import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './vanAction'

class VanList extends Component {
  componentWillMount() {
    this.props.getList()

  }

  renderRows() {
    const list = this.props.list || []
    return list.map(cp => (
      <tr key={cp._id}>
        <td>{cp._00}</td>
        <td>{cp._01}</td>
        <td>{cp._05}</td>
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
              <th>Placa</th>
              <th>Capacidade</th>
              <th>Cidade Principal</th>
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
const mapStateToProps = state => ({ list: state.van.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VanList)