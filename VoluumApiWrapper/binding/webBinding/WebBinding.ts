import {Container} from 'inversify'
import {PresentationInterface} from '../../src/web/PresentationInterface'
import {GraphqlController} from '../../src/web/Graphql/GraphqlController'

export const webBinding = (container: Container): Container => {
  container.bind<PresentationInterface>('Server').to(GraphqlController)

  return container
}