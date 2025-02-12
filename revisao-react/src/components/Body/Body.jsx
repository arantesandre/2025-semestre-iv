
// importando componentes
import "./Body.css"
import Demo1 from "../Demo1/Demo1";
import Demo2 from "../Demo2/Demo2";

const Body = () => {

    return (
        <div className="container-body">
            <h1>Body</h1>
            <Demo1 />
            <Demo2 />
        </div>
    );

}

export default Body;