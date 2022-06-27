const data = {
  msg: 'good stuff!'
}
const json = JSON.stringify(data, null, 2)

export async function handleAPIRequest(request: Request): Promise<Response> {
  if (Math.floor(Math.random() * 100) < 50) {
    return new Response(JSON.stringify({ error: 'darn!'}, null, 2), {
      status: 400,
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }
  return new Response(json, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
