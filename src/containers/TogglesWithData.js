import { connect } from 'react-redux'
import Toggles from '../components/Toggles'
import {setLog} from "../actions";
import {setDifference} from "../actions";
import {setPerPop} from "../actions"




const mapStateToProps = state => ({
    log: state.log,
    difference: state.difference,
    perPop: state.perPop
})
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(setLog()),
    onClick2:() => dispatch(setDifference()),
    onClick3:() => dispatch(setPerPop())
})


export default connect(mapStateToProps,mapDispatchToProps)(Toggles)