import { connect } from 'react-redux'
import Charts from '../components/Charts'

// データをrechartsに合う形式に変換してstateに持たせる
// inputArray 0国名　1　人口　2::　データ
// index-1とindexの差を取る
// 1<index-1であることが必要

function difference(inputArray,i){
    if (i<3 || i===inputArray.length){
        return 0
    }else{
        return Math.max(0,inputArray[i]-inputArray[i-1])
    }
}
// inputArray 0国名　1　人口　2::　データ
// index-range+1からindexまでを抽出
// 1<index-range+1であることが必要
// index-range+1<2の場合を除く
function movingAverage(inputArray,index,range){
    if (index<range+1){
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
// content 0　国名　1　人口　2 データ
function transform(header,content){
    let dataArr = []
    let maximum = 0
    let countryName = content[0]
    const lengthOfArray = header.length
    const differenceArray = content.map(function(item, index) {
        return difference(content,index)
    })

    for (let i = 2; i < lengthOfArray; i += 1) {
        dataArr.push({
            name: header[i],
            number: content[i],
            difference: differenceArray[i],
            movingAverageDiff: movingAverage(differenceArray,i,7),
            movingAverageDiffLong: movingAverage(differenceArray,i,28)
        })
    }
    maximum = Math.max.apply(null, content.slice(2))
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
        difference: state.difference,
        perPop: state.perPop
    })



export default connect(mapStateToProps)(Charts)