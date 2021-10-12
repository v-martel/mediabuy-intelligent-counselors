import { Container } from "inversify";
import {VoluumApiProviderInterface} from '../../../src/layers/infrastructure/providers/voluumApiProvider/VoluumApiProviderInterface'
import {VoluumApiProvider} from '../../../src/layers/infrastructure/providers/voluumApiProvider/VoluumApiProvider'

export const providersBinding = (container: Container): Container => {
  container.bind<VoluumApiProviderInterface>('VoluumApiProvider').to(VoluumApiProvider)

  return container
}