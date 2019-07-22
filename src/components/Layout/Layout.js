import React from 'react';

const layout = ( props ) => {
    return (
        <div className="container">
        	<div>Toolbar, SideDrawer, Backdrop</div>
        	<main>
        		{props.children}
        	</main>
        </div>
    );
};

export default layout;
