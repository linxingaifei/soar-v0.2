export async function onRequest(context) {
  const { request } = context;
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const body = await request.json();
  if (body.username !== "admin" || body.password !== "admin") {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }
  return new Response(JSON.stringify({ token: "demo-jwt-token" }), { headers: { "Content-Type": "application/json" } });
}
