import 'reflect-metadata'
import {Container} from 'inversify'
import {binding} from './binding/Binding'

const bind = (): Container => {
  return binding(new Container())
}

const container = bind()
export default container