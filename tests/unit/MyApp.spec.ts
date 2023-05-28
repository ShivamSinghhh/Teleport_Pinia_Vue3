import { shallowMount } from "@vue/test-utils";

import MyApp from "./MyApp.vue";

describe("MyApp", () => {
  it("should show the calculation perfectly", async () => {
    const wrapper = shallowMount(MyApp);

    expect(wrapper.html()).toContain(`Vue3 app`);
    expect(wrapper.html()).toContain(`Count: 10`);

    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain(`Count: 11`);
  });
});
