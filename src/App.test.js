import React from 'react';
import App from './App';
import Landing from './pages/landing'
import { shallow, mount } from 'enzyme'
import { findByTestAttr, storeFactory } from './testUtils'
import {  createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const setup = ()=>{
  const history = createMemoryHistory()
  return mount(
    <Router history={history}>
      <App/>
    </Router>
  )
}

describe("Test Render Without error",()=>{
  it("render APP without crashing", ()=>{
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper,'app-component')
    expect(appComponent).toHaveLength(1)
  })
})

