import {inject, injectable} from 'inversify'
import {Axios} from 'axios'

import {SessionReport} from '../../../domain/VoluumSession/SessionReport'
import {ReportInputInterface} from '../../../domain/Reports/ReportInputInterface'
import {ReportInterface} from '../../../domain/Reports/ReportInterface'
import {LayersConfiguration} from '../../../../shared/configuration/LayersConfiguration'


@injectable()
export class VoluumApiProvider {
  @inject('LayersConfiguration') layersConfiguration: LayersConfiguration

  private client = new Axios()

  authenticate(
    email: string,
    password: string,
    deviceId: string
  ): string {
    const config = this.layersConfiguration
      .infrastructure
      .providers
      .VoluumApiProvider

    this.client.post()

    return 'blabla'
  }

  sessionIsHealthy(authenticationToken: string): SessionReport {
    return {
      alive: true,
      time: 111,
      inaugural: false,
      expirationTimestamp: new Date()
    }
  }

  getReport(query: ReportInputInterface): ReportInterface {
    return {
      totalRows: 0,
      rows: [{}]
    }
  }
}