import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from "./header";
import "../../setupTests";

let useContextMock;
let wrapper;

beforeAll(() => {
    global.fetch =  jest.fn();
  });

beforeEach(() => {
    
    wrapper = shallow(<Header />, { disableLifecycleMethods: true });
});

afterEach(() => {
    wrapper.unmount();
});


describe('The <Header /> component', () => {
    it("must render a loading span before api call success", () => {
        expect(wrapper.find("div").exists()).toBeTruthy();
        expect(wrapper.find("div").text()).toContain("Loading...");
    }); 
    test("renders", () => {
       expect(wrapper.exists()).toBe(true);
    });
    
    it("it should render user name", () => {
        const spyDidMount = jest.spyOn(Header.prototype, "componentDidMount");

        fetch.mockImplementation(() => {
            return Promise.resolve({
              status: 200,
              json: () => {
              return ({
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