import { connect } from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs";

const mapStateToProps = ({ channels, breadcrumbs }) => ({
  items: Object.keys(breadcrumbs).reduce((acc, id) => {
    const namedBreadcrumbs = breadcrumbs[id].map((id) => channels[id].name);
    return { ...acc, [id]: namedBreadcrumbs };
  }, {}),
});
const BreadcrumbsContainer = connect(mapStateToProps)(Breadcrumbs);
export default BreadcrumbsContainer;
