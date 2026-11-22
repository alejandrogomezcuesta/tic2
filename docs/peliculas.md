# Cine en cartelera

Para entrar aquí: [/tic2/peliculas/](/tic2/peliculas/).

Para entrar aquí; [http://127.0.0.1:8000/tic2/peliculas/](http://127.0.0.1:8000/tic2/peliculas/).

<div class="peliculas-page">
  <section class="peliculas-hero" aria-labelledby="peliculas-title">
    <p class="peliculas-eyebrow">Una selección para tu próxima sesión</p>
    <h2 id="peliculas-title">Historias que merecen pantalla grande</h2>
    <p class="peliculas-intro">Explora la colección y encuentra tu próxima película.</p>
  </section>

  <section class="peliculas-catalogo" aria-label="Catálogo de películas">
    <div class="peliculas-toolbar">
      <p class="peliculas-count" data-pelicula-count>Conectando con el catálogo...</p>
      <label class="peliculas-search">
        <span class="peliculas-search-label">Buscar películas</span>
        <input id="peliculas-search" type="search" placeholder="Título o descripción" autocomplete="off">
      </label>
    </div>

    <p class="peliculas-status" id="peliculas-status" role="status" aria-live="polite">Cargando películas...</p>
    <div class="peliculas-grid" id="peliculas-grid"></div>
  </section>
</div>
