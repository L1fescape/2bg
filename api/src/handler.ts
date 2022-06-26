const data = {
  msg: 'hello from the api'
}
const json = JSON.stringify(data, null, 2)

export async function handleAPIRequest(request: Request): Promise<Response> {
  return new Response(json, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
