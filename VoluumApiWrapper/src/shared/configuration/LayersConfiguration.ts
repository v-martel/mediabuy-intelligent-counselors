import {injectable} from 'inversify'


@injectable()
export class LayersConfiguration {
  application = {}
  domain = {}
  infrastructure = {
    providers: {
      VoluumApiProvider: {
        auth: {},
        healthCheck: {},
        report: {
          url: process.env.REPORT_URL,
          headers: {
            'authority': process.env.AUTHORITY,
            'sec-ch-ua': process.env.SEC_CH_UA,
            'sec-ch-ua-mobile': process.env.SEC_CH_UA_MOBILE,
            'user-agent': process.env.USER_AGENT,
            'cwauth-panel-token': process.env.CWAUTH_PANEL_TOKEN,
            'content-type': process.env.CONTENT_TYPE,
            'accept': process.env.ACCEPT,
            'clientid': process.env.CLIENT_ID,
            'sec-ch-ua-platform': process.env.SEC_UA_PLATFORM,
            'origin': process.env.ORIGIN,
            'sec-fetch-site': process.env.SEC_FETCH_SITE,
            'sec-fetch-mode': process.env.SEC_FETCH_MODE,
            'sec-fetch-dest': process.env.SEC_FETCH_DEST,
            'referer': process.env.REFERER,
            'accept-language': process.env.ACCEPT_LANGUAGE
          }
        }
      }
    }
  }
}