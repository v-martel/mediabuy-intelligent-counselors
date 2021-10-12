import {Container} from 'inversify'
import {providersBinding} from './ProvidersBinding'

export const infrastructureBinding = (container: Container) => {
  container = providersBinding(container)

  return container
}