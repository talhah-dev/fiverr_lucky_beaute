const navbar = document.getElementById("navbar");

if (navbar) {
  const currentPage = document.body.dataset.page || "home";
  const links = [
    { key: "home", href: "index.html", label: "Accueil" },
    { key: "hands", href: "manicure.html", label: "Manucure" },
    { key: "feet", href: "pedicure.html", label: "P&eacute;dicure" },
    { key: "face", href: "facial-treatments.html", label: "Soins du visage" },
    { key: "body", href: "hair-removal-massage.html", label: "&Eacute;pilation & Massage" },
  ];

  const desktopLinks = links
    .map(
      (link) => `
        <a href="${link.href}" class="hover:text-zinc-900 ${
          currentPage === link.key ? "text-zinc-900" : "text-zinc-600"
        }">${link.label}</a>
      `
    )
    .join("");

  const mobileLinks = links
    .map(
      (link) => `
        <a href="${link.href}" class="block border-b border-zinc-200 py-4 ${
          currentPage === link.key ? "text-zinc-900" : "text-zinc-600"
        } hover:text-zinc-900">${link.label}</a>
      `
    )
    .join("");

  navbar.innerHTML = `
    <header class="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-100/80 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="index.html" class="text-sm font-extrabold uppercase">
          <img src="./docs/assets/logo.png" class="h-14 w-auto" alt="Lucky Beaut&eacute; logo">
        </a>

        <nav class="hidden items-center gap-8 text-xs font-semibold uppercase lg:flex">
          ${desktopLinks}
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
              <img src="./docs/assets/logo.png" class="h-12 w-auto" alt="Lucky Beaut&eacute; logo">
            </a>
            <button id="menuClose" class="grid h-10 w-10 place-items-center border border-zinc-300 bg-white" aria-label="Fermer le menu">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <nav class="px-5 py-6 text-sm font-semibold uppercase">
            ${mobileLinks}
          </nav>

          <div class="px-5 pb-8">
            <div class="bg-zinc-50 p-5">
              <p class="text-xs font-semibold uppercase text-zinc-500">Adresse</p>
              <p class="mt-3 text-sm leading-relaxed">
                260 avenue Daumesnil<br />
                75012 Paris
              </p>
              <p class="mt-3 text-sm text-zinc-600">Tous les jours de 10:00 &agrave; 20:00</p>
              <a href="https://www.google.com/maps?q=260%20Avenue%20Daumesnil%2075012%20Paris" target="_blank" rel="noreferrer"
                class="mt-3 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
                <i class="fa-solid fa-location-dot"></i> Google Maps
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  `;
}

const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuBackdrop = document.getElementById("menuBackdrop");
const menuPanel = document.getElementById("menuPanel");
const menuClose = document.getElementById("menuClose");

if (menuBtn && menuOverlay && menuBackdrop && menuPanel && menuClose) {
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
}
