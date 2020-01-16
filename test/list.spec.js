import { shallowMount } from "@vue/test-utils";
import list from "../pages/list";


const factory = () => {
  return shallowMount(list, {
  });
};

describe("list", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});