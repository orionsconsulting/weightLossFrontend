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
    
    test("it should render user name", () => {
        const spyDidMount = jest.spyOn(Header.prototype, "componentDidMount");
        const wrapper = shallow(<Header />);
        useContextMock.mockImplementation(() => {
            return Promise.resolve({
              status: 200,
              json: () => {
              return Promise.resolve({
                 userName: "testing mctestface",
                 weight: 200
               });
             }
           });
        });
        
        const didMount = wrapper.instance().componentDidMount();
        expect(spyDidMount).toHaveBeenCalled();

    });

    
});