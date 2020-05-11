import { connect } from 'react-redux'
import Charts from '../components/Charts'
import {setLog} from "../actions";
import {setDifference} from "../actions";


// データをrechartsに合う形式に変換してstateに持たせる

function difference(inputArray,i){
    if (i<2 || i===inputArray.length){
        return 0
    }else{
        return Math.max(0,inputArray[i]-inputArray[i-1])
    }
}

function movingAverage(inputArray,index,range){
    if (index<range){
        return 0
    }else{
        let sum = 0
        let targetArray = []
        targetArray = inputArray.slice(index-range+1,index+1)
        for (let num of targetArray){
            sum = sum + Number(num)
        }
        let roundedReturn = (sum/range)|0
        return roundedReturn
    }
}

function transform(header,content){
    let dataArr = []
    let maximum = 0
    let countryName = content[0]
    const lengthOfArray = header.length
    const differenceArray = content.map(function(item, index) {
        return difference(content,index)
    })

    for (let i = 1; i < lengthOfArray; i += 1) {
        dataArr.push({
            name: header[i],
            number: content[i],
            difference: differenceArray[i],
            movingAverageDiff: movingAverage(differenceArray,i,7),
            movingAverageDiffLong: movingAverage(differenceArray,i,28)
        })
    }
    maximum = Math.max.apply(null, content.slice(1))
    return [dataArr,maximum,countryName]
}

function transformData(data,ID) {
    if(data.length !== 0) {
        console.log("in")
        let header = data[0]
        let content = data[ID]
        let returnArray = transform(header, content)
        let dataArr = returnArray[0]
        let max = returnArray[1]
        let countryName = returnArray[2]
        return [dataArr, max, countryName]
    }else{
        console.log("out")
        return []
    }
}

const mapStateToProps = state => ({
        confirmed: transformData(state.data.confirmed,state.countryid),
        deaths: transformData(state.data.deaths,state.countryid),
        recovered: transformData(state.data.recovered,state.countryid),
        log: state.log,
        difference: state.difference
    })
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(setLog()),
    onClick2:() => dispatch(setDifference())
})


export default connect(mapStateToProps,mapDispatchToProps)(Charts)