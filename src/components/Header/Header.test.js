import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from "./header";
import "../../setupTests";

let useContextMock;

beforeEach(() => {
    useContextMock = React.useContext = jest.fn();
});

afterEach(() => {
    useContextMock.mockReset();
});


describe('The <Header /> component', () => {
    test("renders", () => {
       const wrapper = shallow(<Header />);
       expect(wrapper.exists()).toBe(true);
    });

    test("user name is echoed", () => {
        cont wrapper = shallow(<Header />)
    });
});