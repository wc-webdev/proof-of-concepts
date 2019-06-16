import * as StyletronEngineBase from 'styletron-engine-atomic'

export default function StyletronEngine(environment) {
  switch (environment) {
    default:
    case 'browser':
      break
    case 'server':
      return new StyletronEngineBase.Server()
  }
  return new StyletronEngineBase.Client()
}
