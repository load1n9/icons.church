import { FreshContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  const data = await (await fetch(
    `https://raw.githubusercontent.com/iconify/icon-sets/master/json/${ctx.params.pack}.json`,
  )).json();

  return new Response(
    `export default function GeneratedIcon({ width=16, height=16, color="currentColor", ...props }) {
  return (
    <svg width={width} height={height} fill={color} viewBox="0 0 24 24" {...props} >
      ${data.icons[ctx.params.icon].body}
    </svg>
  );
}`,
    {
      headers: {
        "Content-Type": "application/javascript",
      },
    },
  );
};
