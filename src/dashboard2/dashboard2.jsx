import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import axios from 'axios'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'https://fatauni.herokuapp.com/fata/v1/public'

export default class Dashboard2 extends Component {

  constructor(props) {
    super(props)
    this.state = { list: [] }
  }

  componentWillMount() {
    axios.get(`${BASE_URL}/company/findall`)
      .then(resp => {
        this.setState({ list: resp.data })
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            {this.props.list.map(e => (
              <ValueBox key={e} cols='12 4' color='green' icon='bus' value={`${e._00}`} text='20 vagas' />

            ))}

            {/*<ValueBox cols='12 4' color='red' icon='bus' value='Van Barreiro' text='10 vagas' />
            <ValueBox cols='12 4' color='blue' icon='bus' value='Van Gameleira' text='15 vagas' />*/}
          </Row>
        </Content>
      </div>
    )
  }

}


