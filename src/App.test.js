import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import LogIn from '../src/Routes/LogIn';
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

describe("register", () => {
    it("Mostra a página de Registo?", () => {
        const wrapper = shallow(<Router><LogIn/></Router>);
        const a = wrapper.find('.register1');
        expect(a.text()).toBe("Register");
    })

    it("O Link para a página criar conta existe?", () => {
        const wrapper = shallow(<Router><LogIn/></Router>);
        const link = wrapper.find("Link");
        expect(link.props().to).toBe("/signUp");
      });
});