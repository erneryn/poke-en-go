import React from 'react';
import { storeFactory , findByTestAttr} from '../testUtils'
import { Provider } from 'react-redux'
import { shallow , mount} from 'enzyme'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './landing'



const setup = (initalState ={}, )=>{
    const store = storeFactory(initalState)
    return mount(
      <Provider store={store}>
          <Router>
              <Route path='/'>
                <Landing/>
              </Route>
          </Router>
      </Provider>
    )
  }

    it('render all component',()=>{
        const wrapper = setup([{
            name:"wobbuffet",
            url:"https://pokeapi.co/api/v2/pokemon/202/"
        }
        ])
        const container = findByTestAttr(wrapper,'landing-page')
        expect(container.length).toBe(1)
    })
  
