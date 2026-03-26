const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
    <footer class="border-t border-zinc-200 bg-zinc-100">
      <div class="mx-auto max-w-6xl px-4 pb-8 pt-14">
        <div class="grid gap-10 lg:grid-cols-4">
          <div>
            <a href="index.html" class="text-sm font-extrabold uppercase">
              <img src="./docs/assets/logo.png" class="h-14 w-auto" alt="Lucky Beaut&eacute; logo">
            </a>
            <p class="mt-4 text-sm leading-relaxed text-zinc-600">
              Onglerie, soins du visage, beaut&eacute; du regard, &eacute;pilation et massages dans une ambiance douce et lumineuse.
            </p>

            <div class="mt-6 flex gap-3">
              <a href="https://www.google.com/maps?q=260%20Avenue%20Daumesnil%2075012%20Paris" target="_blank" rel="noreferrer"
                class="grid h-10 w-10 place-items-center border border-zinc-300 bg-white hover:bg-zinc-50" aria-label="Google Maps">
                <i class="fa-solid fa-location-dot"></i>
              </a>
              <a href="facial-treatments.html" class="grid h-10 w-10 place-items-center border border-zinc-300 bg-white hover:bg-zinc-50" aria-label="Soins du visage">
                <i class="fa-solid fa-spa"></i>
              </a>
            </div>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Acc&egrave;s</p>
            <div class="mt-4 space-y-3 text-sm text-zinc-700">
              <p>
                260 avenue Daumesnil<br />
                75012 Paris
              </p>
              <p>Tous les jours : 10:00 &ndash; 20:00</p>
              <p>M&eacute;tro Michel Bizot &middot; Ligne 8</p>
            </div>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Prestations</p>
            <div class="mt-4 space-y-2 text-sm text-zinc-700">
              <p>Soin visage simple : 25&euro;</p>
              <p>Beaut&eacute; des mains : 15&euro;</p>
              <p>Beaut&eacute; des pieds : 29&euro;</p>
              <p>Massage traditionnel 30 min : 30&euro;</p>
            </div>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Pages</p>
            <nav class="mt-4 grid gap-3 text-sm">
              <a href="index.html" class="hover:text-zinc-600">Accueil</a>
              <a href="manicure.html" class="hover:text-zinc-600">Manucure</a>
              <a href="pedicure.html" class="hover:text-zinc-600">P&eacute;dicure</a>
              <a href="facial-treatments.html" class="hover:text-zinc-600">Soins du visage</a>
              <a href="hair-removal-massage.html" class="hover:text-zinc-600">&Eacute;pilation &amp; Massage</a>
            </nav>
          </div>
        </div>

        <div class="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          <div class="flex items-center justify-center text-center">
            <p>&copy; <span id="year"></span> Lucky Beaut&eacute;. Tous droits r&eacute;serv&eacute;s.</p>
          </div>
        </div>
      </div>
    </footer>

    <script>
      document.getElementById("year").textContent = new Date().getFullYear()
    </script>
  `;
}
