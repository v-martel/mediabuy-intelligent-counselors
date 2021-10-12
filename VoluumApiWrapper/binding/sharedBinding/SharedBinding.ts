import {Container} from 'inversify'
import {configurationBinding} from './ConfigurationBinding'

export const sharedBinding = (container: Container) => {
  container = configurationBinding(container)

  return container
}