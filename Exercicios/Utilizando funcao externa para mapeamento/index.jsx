import React from 'react';
import ReactDom from 'react-dom'
import Family from './Family'
import Member from './member'
ReactDom.render(<Family lastName="Silva">
    <Member name='Teste' />
    <Member name='Rafael' />
    <Member name='Julia' />
    <Member name='Piao' />
</Family>,document.getElementById('app'))

