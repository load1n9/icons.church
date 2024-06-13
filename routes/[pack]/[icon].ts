import { FreshContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  const {default: pack} = await import(
    `https://raw.githubusercontent.com/iconify/icon-sets/master/json/${ctx.params.pack}.json`,
    { with: { type: "json" } }
  );

  return new Response(
    `export default function GeneratedIcon({ width=16, height=16, color="currentColor", ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 24 24" {...props} >
      ${pack.icons[ctx.params.icon].body}
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
