import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostTickets from '../components/Host/HostTickets.jsx';

const mapStateToProps = state => ({
  hostTickets: state.hostTicketsReducer.hostTicketList,
  username: state.authReducer.username,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostTicketsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostTickets);

export default HostTicketsContainer;
