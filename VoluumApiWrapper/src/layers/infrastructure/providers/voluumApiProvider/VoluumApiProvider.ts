import {inject, injectable} from 'inversify'
import {Axios} from 'axios'

import {SessionReport} from '../../../domain/VoluumSession/SessionReport'
import {ReportInputInterface} from '../../../domain/Reports/ReportInputInterface'
import {ReportInterface} from '../../../domain/Reports/ReportInterface'
import {LayersConfiguration} from '../../../../shared/configuration/LayersConfiguration'
import {VoluumApiProviderInterface} from './VoluumApiProviderInterface'


@injectable()
export class VoluumApiProvider implements VoluumApiProviderInterface {
  @inject('LayersConfiguration') layersConfiguration: LayersConfiguration

  private client = new Axios()

  authenticate = async (
    email: string,
    password: string,
    deviceId: string
  ): Promise<string> => {
    const config = this.layersConfiguration
      .infrastructure
      .providers
      .VoluumApiProvider

    this.client.post(config.auth.url)

    return 'blabla'
  }

  sessionIsHealthy = async (authenticationToken: string): Promise<SessionReport> => {
    return {
      alive: true,
      time: 111,
      inaugural: false,
      expirationTimestamp: new Date()
    }
  }

  getReport = (query: ReportInputInterface): Promise<ReportInterface> => {
    return {
      totalRows: 0,
      rows: [{}]
    }
  }
}