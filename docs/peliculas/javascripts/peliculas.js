const supabaseUrl = "https://ykywphvesydkozhbupih.supabase.co";
const supabasePublishableKey = "sb_publishable_j6k5loJHIlB71x5K-y9onw_lV44UE8_";

const grid = document.querySelector("#peliculas-grid");

if (grid) {
  const count = document.querySelector("[data-pelicula-count]");
  const status = document.querySelector("#peliculas-status");
  const search = document.querySelector("#peliculas-search");
  let peliculas = [];

  const render = () => {
    const query = search.value.trim().toLocaleLowerCase("es");
    const visibles = peliculas.filter((pelicula) =>
      `${pelicula.nombre} ${pelicula.descripcion ?? ""}`.toLocaleLowerCase("es").includes(query),
    );

    count.textContent = query
      ? `${visibles.length} de ${peliculas.length} películas`
      : `${peliculas.length} ${peliculas.length === 1 ? "película" : "películas"}`;
    grid.replaceChildren();

    for (const [index, pelicula] of visibles.entries()) {
      const article = document.createElement("article");
      article.className = "pelicula-card";

      const visual = document.createElement("div");
      visual.className = "pelicula-visual";
      visual.setAttribute("aria-hidden", "true");

      const number = document.createElement("span");
      number.className = "pelicula-number";
      number.textContent = String(index + 1).padStart(2, "0");
      visual.append(number);

      const details = document.createElement("div");
      details.className = "pelicula-details";

      const title = document.createElement("h2");
      title.textContent = pelicula.nombre;

      const description = document.createElement("p");
      description.textContent = pelicula.descripcion || "Sin descripción.";

      details.append(title, description);
      article.append(visual, details);
      grid.append(article);
    }

    status.textContent = visibles.length
      ? ""
      : query
        ? "No hay películas que coincidan con la búsqueda."
        : "Todavía no hay películas en el catálogo.";
  };

  const loadPeliculas = async () => {
    const url = new URL("/rest/v1/peliculas", supabaseUrl);
    url.searchParams.set("select", "id,nombre,descripcion");
    url.searchParams.set("order", "id.asc");

    const response = await fetch(url, {
      headers: {
        apikey: supabasePublishableKey,
        Authorization: `Bearer ${supabasePublishableKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Supabase respondió con el estado ${response.status}.`);
    }

    const result = await response.json();

    if (
      !Array.isArray(result) ||
      result.some((pelicula) => typeof pelicula.nombre !== "string")
    ) {
      throw new Error("Supabase devolvió un catálogo con un formato inesperado.");
    }

    peliculas = result;
    render();
  };

  search.addEventListener("input", render);

  loadPeliculas().catch((error) => {
    status.textContent = `No se pudieron cargar las películas. ${error.message}`;
    count.textContent = "Catálogo no disponible";
  });
}
