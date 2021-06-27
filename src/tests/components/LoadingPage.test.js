import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoadingPage from "../../components/LoadingPage";

configure({ adapter: new Adapter() });
test("should correctly render LoadingPage", () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
