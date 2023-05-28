import { shallowMount } from '@vue/test-utils'
import TeleApp from '../../src/teleporting/TeleApp.vue'

describe('TeleApp.vue', () => {
  it('It should render Telecast', () => {
    const msg = 'Teleport Example'
    const wrapper = shallowMount(TeleApp)
    expect(wrapper.text()).toMatch(msg)
  })
})
