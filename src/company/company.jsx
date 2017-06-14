import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Company extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Cadastro de Empresa' small='Cadastro' />
                <Content>
                    Cadastro de Empresa
            </Content>
            </div>
        )
    }
}

export default Company