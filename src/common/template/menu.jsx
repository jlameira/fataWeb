import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#company' label='Cadastro de Empresa' icon='building' />
            <MenuItem path='#van' label='Cadastro de Vans' icon='bus' />
        </MenuTree>
    </ul>
)