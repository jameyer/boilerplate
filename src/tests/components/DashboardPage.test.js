import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DashboardPage from "../../components/DashboardPage";

configure({ adapter: new Adapter() });
test("should render DashboardPage correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
