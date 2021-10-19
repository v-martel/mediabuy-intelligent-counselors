import {Container} from 'inversify'
import {sharedBinding} from './sharedBinding/SharedBinding'
import {layersBinding} from './layersBinding/LayersBinding'
import {webBinding} from './webBinding/WebBinding'

export const binding = (container: Container) => {
  container = sharedBinding(container)
  container = layersBinding(container)
  container = webBinding(container)

  return container
}