import React from 'react'
import Header from '../containers/HeaderWithData'
import Filters from "./Filters";
import MainWithData from "../containers/MainWithData";
import Alert from "react-bootstrap/Alert";
import MenuWithData from "../containers/MenuWithData";
import ChartsRatioWithData from "../containers/ChartsRatioWithData";

const App = () => (
    <div>
        <Header/>
        <MenuWithData/>
        <MainWithData />
        <Alert variant="info">
            出典：<a href={"https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases"}>The Humanitarian Data Exchange</a><br></br>
            注意：新規人数は、元データの基準日の累積値から前日の値を減算して求めたものです
        </Alert>
        <Filters/>
    </div>
)

export default App