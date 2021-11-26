import { connect } from "react-redux";
import NavItem from "../components/Navitem";
import { toggleBreadcrumb } from "../reducers";

const mapStateToProps = ({ channels, breadcrumbs }, { id }) => ({
  channel: channels[id],
  isActive: breadcrumbs.hasOwnProperty(id),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (rootChannelId, channel) =>
    dispatch(toggleBreadcrumb(rootChannelId, channel)),
});
const NavItemContainer = connect(mapStateToProps, mapDispatchToProps)(NavItem);
export default NavItemContainer;
