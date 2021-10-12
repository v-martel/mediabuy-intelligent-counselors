import {Container} from 'inversify'
import {infrastructureBinding} from './infrastructureBinding/InfrastructureBinding'

export const layersBinding = (container: Container) => {
  container = infrastructureBinding(container)

  return container
}