export const html = `
<!DOCTYPE html lang="en">
<head>
  <title>2bg.gg</title>
  <style>
    html, body {
      background: #222;
      color: #eee;
      margin: 0;
      padding: 1rem;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
      line-height: 1.5rem;
    }
  </style>
  </head>
  <body>
    <p>2bggg</p>
    <p>sweet</p>
  </body>
</html>
`

export async function handleRequest(request: Request): Promise<Response> {
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  })
}
