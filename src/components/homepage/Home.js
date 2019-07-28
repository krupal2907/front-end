import React from "react";

import Sidebar from "./Sidebar";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="spacer"></div>
                {/*  Home Page  */}
                <div className="home-wrapper">
                    <header className="main-head card"><p>The header</p></header>
                    <article className="content card">
                        <h1>Main article area</h1>
                        <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
                    </article>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Home;
