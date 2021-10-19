import {ReportInputInterface} from '../../../domain/Reports/ReportInputInterface'
import {ReportInterface} from '../../../domain/Reports/ReportInterface'
import {SessionReport} from '../../../domain/VoluumSession/SessionReport'

export interface VoluumApiProviderInterface {
  authenticate(email: string, password: string, deviceId: string): Promise<string>
  sessionIsHealthy(authenticationToken: string): Promise<SessionReport>
  getReport(query: ReportInputInterface): Promise<ReportInterface>
}