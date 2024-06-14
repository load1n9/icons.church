import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";

export default function Home() {
  return (
    <div class="container mx-auto p-4">
      <section class="w-full h-auto flex relative justify-center items-center flex-col pt-16 gap-16">
        <div>
          <p
            class={`pt-10 max-w-screen-sm mt-4 font-bold ${"font-holy"} pb-10 text-center text-2xl`}
          >
            Icons.church
          </p>
          <p class="text-sm text-gray-600 text-center">
            Iconify icons for Fresh
          </p>
        </div>
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
