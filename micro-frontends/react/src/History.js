import * as HistoryFactory from 'history'

export default function History(environment) {
  switch (environment) {
    default:
    case 'browser':
      break
    case 'server':
      return HistoryFactory.createMemoryHistory()
  }
  return HistoryFactory.createMemoryHistory()
}
