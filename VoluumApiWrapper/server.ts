import container from './ioc-container'
import {PresentationInterface} from './src/web/PresentationInterface'

const app = container.get<PresentationInterface>('Server')
app.startApp()
