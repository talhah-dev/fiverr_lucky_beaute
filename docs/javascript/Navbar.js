const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header class="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-100/80 backdrop-blur">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
    <a href="index.html" class="text-sm font-extrabold uppercase">
      <img src="/docs/assets/logo.png" class="h-14" alt="logo">
    </a>

    <nav class="hidden items-center gap-8 text-xs font-semibold uppercase lg:flex">
      <a href="index.html" class="hover:text-zinc-600">Nail Salon</a>
      <a href="manicure.html" class="hover:text-zinc-600">Manucure</a>
      <a href="pedicure.html" class="hover:text-zinc-600">Pédicure</a>
      <a href="facial-treatments.html" class="hover:text-zinc-600">Soins du visage</a>
      <a href="hair-removal-massage.html" class="hover:text-zinc-600">Épilation & Massage</a>
    </nav>

    <button id="menuBtn" class="grid h-10 w-10 rounded-xl place-items-center border border-zinc-300 bg-white lg:hidden" aria-label="Ouvrir le menu">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>

  <div id="menuOverlay" class="fixed inset-0 z-50 hidden">
    <div id="menuBackdrop" class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300"></div>

    <aside
      id="menuPanel"
      class="absolute right-0 top-0 min-h-screen w-full translate-x-full bg-white transition-transform duration-300 ease-out sm:w-[420px]"
    >
      <div class="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
       <a href="index.html" class="text-sm font-extrabold uppercase">
          <img src="/docs/assets/logo.png" class="h-12" alt="logo">
        </a>
        <button id="menuClose" class="grid h-10 w-10 place-items-center border border-zinc-300 bg-white" aria-label="Fermer le menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav class="px-5 py-6 text-sm font-semibold uppercase">
        <a href="index.html" class="block border-b border-zinc-200 py-4 hover:text-zinc-600">Nail Salon</a>
        <a href="manicure.html" class="block border-b border-zinc-200 py-4 hover:text-zinc-600">Manucure</a>
        <a href="pedicure.html" class="block border-b border-zinc-200 py-4 hover:text-zinc-600">Pédicure</a>
        <a href="facial-treatments.html" class="block border-b border-zinc-200 py-4 hover:text-zinc-600">Soins du visage</a>
        <a href="hair-removal-massage.html" class="block border-b border-zinc-200 py-4 hover:text-zinc-600">Épilation & Massage</a>
      </nav>

      <div class="px-5 pb-8">
        <div class="bg-zinc-50 p-5">
          <p class="text-xs font-semibold text-zinc-500 uppercase">Contact</p>
          <p class="mt-3 text-sm leading-relaxed">
            3 rue du Général Leclerc<br />
            94220 Charenton-le-Pont
          </p>
          <a href="tel:0954735297" class="mt-3 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
            <i class="fa-solid fa-phone"></i> 09 54 73 52 97
          </a>
        </div>
      </div>
    </aside>
  </div>
</header>
`;

const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuBackdrop = document.getElementById("menuBackdrop");
const menuPanel = document.getElementById("menuPanel");
const menuClose = document.getElementById("menuClose");

const openMenu = () => {
  menuOverlay.classList.remove("hidden");
  menuOverlay.classList.add("block");
  document.body.classList.add("overflow-hidden");

  requestAnimationFrame(() => {
    menuBackdrop.classList.remove("opacity-0");
    menuBackdrop.classList.add("opacity-100");
    menuPanel.classList.remove("translate-x-full");
    menuPanel.classList.add("translate-x-0");
  });
};

const closeMenu = () => {
  menuBackdrop.classList.remove("opacity-100");
  menuBackdrop.classList.add("opacity-0");
  menuPanel.classList.remove("translate-x-0");
  menuPanel.classList.add("translate-x-full");

  setTimeout(() => {
    menuOverlay.classList.add("hidden");
    menuOverlay.classList.remove("block");
    document.body.classList.remove("overflow-hidden");
  }, 300);
};

menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuBackdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !menuOverlay.classList.contains("hidden")) closeMenu();
});

menuPanel.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
