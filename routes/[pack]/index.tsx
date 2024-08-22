import { PageProps } from "$fresh/server.ts";

export default function ModulePage(ctx: PageProps) {
    return (
        <div class="container mx-auto p-4">
            <h1 class="text-4xl text-center text-[#4868a6] py-5 mb-5">
                <a href={`https://icon-sets.iconify.design/${ctx.params.pack}`}>
                    {ctx.params.pack}
                </a>
            </h1>
            <div class="mockup-code">
                <pre data-prefix="1"><code>{`import GeneratedIcon from "https://icons.church/${ctx.params.pack}/<icon>";`}</code></pre>
                <pre data-prefix="2"><code></code></pre>
            </div>
        </div>
    );
}
