import {inject, injectable} from 'inversify'
import {Axios, AxiosResponse} from 'axios'

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
  ): Promise<any> => {
    const config = this.layersConfiguration
      .infrastructure
      .providers
      .VoluumApiProvider
      .auth

    const res: AxiosResponse = await this.client.post(
      config.url!,
      {email, password, deviceId},
      {
        headers: config.headers!
      }
    )

    return res || ''
  }

  sessionIsHealthy = async (authenticationToken: string): Promise<SessionReport> => {
    console.log(authenticationToken)
    return {
      alive: true,
      time: 111,
      inaugural: false,
      expirationTimestamp: new Date()
    }
  }

  getReport = async (query: ReportInputInterface): Promise<ReportInterface> => {
    console.log(query)
    return {
      totalRows: 0,
      rows: [{}]
    }
  }
}