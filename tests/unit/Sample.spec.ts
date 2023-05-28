import { shallowMount } from "@vue/test-utils";
import Sample from './Sample.vue'
import ComputeDemo from './ComputeDemo.vue'

describe('Sample suite', () => {
    it('render sample correctly', () => {
        const dom = shallowMount(Sample)
        expect(dom.text()).toMatch('Vue and TDD')
    })

    it(`Testing computed properties`, () => {
        const dom = shallowMount(ComputeDemo)
        expect(dom.vm.greet).toMatch(`welcome`)
    })
})