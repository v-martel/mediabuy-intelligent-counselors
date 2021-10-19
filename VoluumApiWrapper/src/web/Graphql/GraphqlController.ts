import {PresentationInterface} from '../PresentationInterface'
import {injectable} from 'inversify'
import express from 'express'

@injectable()
export class GraphqlController implements PresentationInterface {
  startApp() {
    try {
      const app = express()

      app.get('/HealthCheck', (req, res) => res.sendStatus(200))
      app.listen(3500, () => {
        console.log('Server is running')
      })
    } catch (e) {
      console.error(e)
    }
  }
}