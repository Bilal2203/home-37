import { withRouter } from "react-router-dom";
function User(props)
{
    console.warn(props);
    return(
        <div><h1>{props.match.params.route}</h1></div>
    )
}

export default withRouter(User);