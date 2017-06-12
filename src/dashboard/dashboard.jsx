import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bus' value='Van Buritis' text='20 vagas' />
                        <ValueBox cols='12 4' color='red' icon='bus' value='Van Barreiro' text='10 vagas' />
                        <ValueBox cols='12 4' color='blue' icon='bus' value='Van Gameleira' text='15 vagas' />

                    </Row>
                </Content>
            </div>
        )
    }

}

export default Dashboard


