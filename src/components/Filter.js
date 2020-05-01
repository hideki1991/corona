import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import Button from "react-bootstrap/Button";

const scrollToTop = () => {
    scroll.scrollToTop()
};

const Filter = ({ children, onClick }) => (
    <Button
        variant="outline-dark"
        size="lg"
        onClick={function(event){
            onClick()
            scrollToTop()
        }}
        style={{
            marginLeft: '16px',
            marginRight: '16px',
            fontSize: '16px',

        }}
    >
        {children}
    </Button>
)


export default Filter