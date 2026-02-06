export async function onRequest() {
  return new Response(JSON.stringify({
    config_version: "v0.2",
    vyos_commands: ["set system host-name soar-edge"]
  }), { headers: { "Content-Type": "application/json" } });
}
