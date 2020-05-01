import { connect } from 'react-redux'
import { setCountry } from '../actions'
import Filter from '../components/Filter'


const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setCountry(ownProps.countryID))
})

export default connect(null,mapDispatchToProps)(Filter)