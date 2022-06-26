import { handleAPIRequest } from './handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleAPIRequest(event.request))
})
