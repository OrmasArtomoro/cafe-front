import { shallowMount } from "@vue/test-utils";
import detail from "../pages/detail";


const factory = () => {
  return shallowMount(detail, {
  });
};

describe("detail", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});