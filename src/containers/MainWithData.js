import { connect } from 'react-redux'
import Main from '../components/Main'





const mapStateToProps = state => ({
    perPop: state.perPop
})


export default connect(mapStateToProps)(Main)