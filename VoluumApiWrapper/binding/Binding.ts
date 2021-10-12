import {Container} from 'inversify'
import {sharedBinding} from './sharedBinding/SharedBinding'
import {layersBinding} from './layersBinding/LayersBinding'

export const binding = (container: Container) => {
  container = sharedBinding(container)
  container = layersBinding(container)

  return container
}