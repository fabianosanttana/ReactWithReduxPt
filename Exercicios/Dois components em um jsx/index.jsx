import React from 'react';
import ReactDom from 'react-dom'
import {Primeiro,Segundo} from './component'
ReactDom.render(
<div><Segundo value='Show!'/><Primeiro value='Show!'/>
</div>,document.getElementById('app'))

