import { shallowMount } from "@vue/test-utils";
import index from "../pages/index";


const factory = () => {
  return shallowMount(index, {
  });
};

describe("index", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});