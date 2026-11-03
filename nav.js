// Shared by every page: pulls the nav links from the Sanity homepage doc.
// The links in each page's HTML are the defaults if the fetch fails.
(function () {
  const groq = encodeURIComponent('*[_id == "homepage"][0].socialLinks');
  const url =
    "https://tabkldbj.apicdn.sanity.io/v2023-10-01/data/query/production?query=" + groq;

  fetch(url)
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then(({ result: links }) => {
      if (!links) return;
      const nav = document.querySelectorAll(".nav a");
      [links.instagramUrl, links.spotifyUrl, links.youtubeUrl].forEach((href, i) => {
        if (nav[i] && href) nav[i].href = href;
      });
    })
    .catch((err) => console.error("Nav CMS fetch failed:", err));
})();
