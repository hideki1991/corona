import { connect } from 'react-redux'
import Menu from '../components/Menu'


function lastElement(array){
    if (array){
        return array.slice(-1)[0]
    }else{
        return ""
    }
}

function firstElement(array){
    if (array){
        return array[0]
    }else{
        return ""
    }
}

const mapStateToProps = state => ({
    country: firstElement(state.data.confirmed[state.countryid]),
    date: lastElement(state.data.confirmed[0]),
})


export default connect(mapStateToProps)(Menu)