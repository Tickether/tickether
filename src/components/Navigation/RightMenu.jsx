import React from 'react';
import {Menu, Grid} from 'antd';
import {Button} from 'antd';

const {useBreakpoint} = Grid;

const RightMenu = () => {
    const {md} = useBreakpoint();
    return (
        <Button style={{
            background: "#000",
            color: "white",
            fontSize: '12px',
            height: '45px',
            borderRadius: '4px',
            boxShadow: '0 2px 3px 0 #ccc'
        }}>CREATE YOUR OWN EVENT</Button>
    );
}

export default RightMenu;