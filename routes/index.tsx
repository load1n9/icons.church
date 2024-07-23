import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
import TypingAnimation from "../islands/Typing.tsx";
import { NeonGradientCard } from "../islands/Neon.tsx";

export default function Home() {
  const example: [string, string, string, string] = [
    "import GeneratedIcon from 'https://icons.church/ICON_FAMILY/ICON_NAME';",
    "export default function MyComponent() {",
    "   return <GeneratedIcon />;",
    "}",
  ];

  return (
    <div class="container mx-auto p-4">
      <section class="w-full h-auto flex relative justify-center items-center flex-col pt-16 gap-16">
        <div>
          <TypingAnimation
            text="Icons.church"
            className={`pt-10 max-w-screen-sm mt-4 font-bold ${"font-holy"} pb-10 text-center text-2xl`}
          />
          <p class="text-sm text-gray-600 text-center">
            Iconify icons for Fresh
          </p>
        </div>
        <a class="btn btn-secondary " href="https://icon-sets.iconify.design/">Iconify Library</a>
        <NeonGradientCard>
        <div class="mockup-code bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text">
          <pre data-prefix="1"><code>{example[0]}</code></pre>
          <pre data-prefix="2"><code>{example[1]}</code></pre>
          <pre data-prefix="3"><code>{example[2]}</code></pre>
          <pre data-prefix="4"><code>{example[3]}</code></pre>
        </div>
        </NeonGradientCard>
        <div class="flex gap-4">
          <a
            href="https://github.com/load1n9/iconify"
            class="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            <IconBrandGithub class="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
