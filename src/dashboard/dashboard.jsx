import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getListCompany } from './dashboardAction'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    componentWillMount() {
        this.props.getListCompany()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        {this.props.list.map(e => (
                            <ValueBox key={e._id} cols='12 4' color='green' icon='bus' value={`${e._00}`} text='20 vagas' />

                        ))}
                    </Row>
                </Content>
            </div>
        )
    }

}
const mapStateToProps = state => ({ list: state.dashboard.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getListCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


