export async function onRequest() {
  return new Response(JSON.stringify({
    edges: [{ edge_id: "edge-001", status: "online" }]
  }), { headers: { "Content-Type": "application/json" } });
}
