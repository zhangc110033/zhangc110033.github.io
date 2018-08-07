import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import FormValid from './demo/form-valid/formValid'
import 'antd/dist/antd.css'

render((
    <BrowserRouter>
        <Route path="/" component={FormValid} />
    </BrowserRouter>
), document.getElementById('root'))