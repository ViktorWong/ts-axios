// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

export default function axios(config: AxiosRequestConfig): void {
  xhr(config)
}
