import React,{Component} from 'react';

const Header = ({userData}) => (
    
    <header>
        <p>
            Welcome to the Weight Loss Tracker, {userData.user}
        </p>
        <p>Your goal is {userData.goal}</p>
    </header>
);

export default Header;
