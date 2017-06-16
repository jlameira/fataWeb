import React from 'react'
import Grid from '../layout/grid'
export default props => (
  <Grid cols={props.cols}>
    <div className='form-group'>
      <label htmlFor={props.name}>{props.label}</label>
      <select {...props.input} className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly} type={props.type}>
        <option value="">Select</option>
        {props.listCompany.map(company => {
          return <option key={company._id} value={company._01}>{company._00}</option>
        })}
      </select>
    </div>
  </Grid>
)