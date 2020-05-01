import React from 'react'
import Header from '../containers/Header'
import Filters from "./Filters";
import ChartsWithData from '../containers/ChartsWithData'

const App = () => (
    <div>
        <Header/>
        <ChartsWithData />
        <Filters/>
    </div>
)

export default App