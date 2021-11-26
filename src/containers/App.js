import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = ({ rootChannels, channels }) => ({
  rootChannels,
  channels,
});
const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
