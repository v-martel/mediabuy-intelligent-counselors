import {Container} from 'inversify'
import {LayersConfiguration} from '../../src/shared/configuration/LayersConfiguration'

export const configurationBinding = (container: Container) => {
  container.bind<LayersConfiguration>('LayersConfiguration').to(LayersConfiguration)

  return container
}