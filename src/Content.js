import { Fragment } from "react";
import Switch from "./switch/Switch";

const Content = () => {
    return (
        <Fragment>
            <div className="container" style={{height:"100vh"}}>
                <h1>First title.</h1>
                <h3>Second title: subtitle or whatever.</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora similique id expedita unde nulla iusto tenetur pariatur rerum quidem ipsum voluptatem accusamus,
                    natus molestias blanditiis, quisquam repellat fugiat vitae nam.
                </p>
                <Switch></Switch>
            </div>
        </Fragment>
    );
}
 
export default Content;