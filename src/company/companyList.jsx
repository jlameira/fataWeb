import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from './companyAction'

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
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)