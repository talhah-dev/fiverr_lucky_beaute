const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="border-t border-zinc-200 bg-zinc-100">
  <div class="mx-auto max-w-6xl px-4 pt-14 pb-8">
    <div class="grid gap-10 lg:grid-cols-4">
      <div>
        <a href="index.html" class="text-sm font-extrabold uppercase">
            <img src="/docs/assets/logo.png" class="h-14" alt="logo">
            </a>
        <p class="mt-4 text-sm leading-relaxed text-zinc-600">
          Manucures et pédicures, pose de vernis, soins du visage, épilation, massages…
        </p>

        <div class="mt-6 flex gap-3">
          <a href="tel:0954735297" class="grid h-10 w-10 place-items-center border border-zinc-300 bg-white hover:bg-zinc-50" aria-label="Téléphone">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="https://www.google.com/maps?q=3%20rue%20du%20G%C3%A9n%C3%A9ral%20Leclerc%2C%2094220%20Charenton-le-Pont" target="_blank" class="grid h-10 w-10 place-items-center border border-zinc-300 bg-white hover:bg-zinc-50" aria-label="Google Maps">
            <i class="fa-solid fa-location-dot"></i>
          </a>
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase">Accès</p>
        <div class="mt-4 space-y-3 text-sm text-zinc-700">
          <p>
            3 rue du Général Leclerc<br />
            94220 Charenton-le-Pont
          </p>
          <p>
            <a href="tel:0954735297" class="font-semibold underline-offset-4 hover:underline">
              09 54 73 52 97
            </a>
          </p>
          <p>
            <a href="mailto:hello@institutchloe.fr" class="font-semibold underline-offset-4 hover:underline">
              hello@institutchloe.fr
            </a>
          </p>
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase">Horaires</p>
        <div class="mt-4 space-y-2 text-sm text-zinc-700">
          <p>Ouvert tous les jours</p>
          <p class="font-semibold">10:00 – 19:30</p>
          <p class="text-zinc-600">Avec ou sans rendez-vous</p>
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase">Pages</p>
        <nav class="mt-4 grid gap-3 text-sm">
          <a href="index.html" class="hover:text-zinc-600">Onglerie</a>
          <a href="manicure.html" class="hover:text-zinc-600">Beauté des mains</a>
          <a href="pedicure.html" class="hover:text-zinc-600">Beauté des pieds</a>
          <a href="facial-treatments.html" class="hover:text-zinc-600">Soins du visage</a>
          <a href="hair-removal-massage.html" class="hover:text-zinc-600">Épilation & Massage</a>
        </nav>
      </div>
    </div>

    <div class="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
      <div class="flex text-center items-center justify-center">
        <p>© <span id="year"></span> Institut Chloé. Tous droits réservés.</p>
      </div>
    </div>
  </div>
</footer>

<script>
  document.getElementById("year").textContent = new Date().getFullYear()
</script>

`