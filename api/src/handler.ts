const data = {
  msg: 'good stuff!'
}
const json = JSON.stringify(data, null, 2)

export async function handleAPIRequest(request: Request): Promise<Response> {
  if (Math.floor(Math.random() * 100) < 50) {
    return new Response('it failed!', {
      status: 400
    })
  }
  return new Response(json, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
