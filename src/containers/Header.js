import React from 'react'
import { connect } from 'react-redux'
import { addConfirmed,addRecovered,addDeaths,setCountry } from '../actions'
import {readRemoteFile} from "react-papaparse";
import logo from "../logo.png"
import Navbar from "react-bootstrap/Navbar";


function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
    )
}



const Header = ({ dispatch }) => {
    const confirmedFilePath = require("../data/confirmed.csv")
    const deathsFilePath = require("../data/deaths.csv")
    const recoveredFilePath = require("../data/recovered.csv")
    readRemoteFile(
        confirmedFilePath,
        {
            complete: (results) => {

                let data = results.data
                dispatch(addConfirmed(data))
            }
        })
    readRemoteFile(
        deathsFilePath,
        {
            complete: (results) => {
                let data = results.data
                sleep(250).then(()=> {
                    dispatch(addDeaths(data))
                })


            }
        })
     readRemoteFile(
        recoveredFilePath,
        {
            complete: (results) => {
                let data = results.data
                sleep(750).then(()=> {
                    dispatch(addRecovered(data))
                })
                sleep(2000).then(()=> {

                    dispatch(setCountry(186))
                })

            }
        })
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Corona Charts
            </Navbar.Brand>
        </Navbar>
    )
}

export default connect()(Header)