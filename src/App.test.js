import React from 'react';
import App from './App';
import Landing from './pages/landing'
import { shallow, mount } from 'enzyme'
import store from './store'
import { Provider } from 'react-redux'
import { storeFactory } from '../testUtils'
import toJson from 'enzyme-to-json'

const setup = ()=>{
  const store = storeFactory()
  return mount(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

describe("Test Render Without error",()=>{
  it("render APP without crashing", ()=>{
    const wrapper = setup();
    const appComponent = wrapper.find(`[data-test="app-component"]`)
    expect(appComponent).toHaveLength(1)
  })
})
