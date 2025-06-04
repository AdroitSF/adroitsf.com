(function () {
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('search-results');
    let fuse;

    if (!searchInput || !resultsDiv) {
        // Silently exit if search elements aren't on the page
        return; 
    }

    fetch('/searchindex.json')
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            fuse = new Fuse(data, {
                keys: ['title', 'summary', 'content', 'tags', 'categories'],
                threshold: 0.3,
                ignoreLocation: true,
                minMatchCharLength: 2,
            });
        })
        .catch(error => {
            console.error("Error fetching or initializing search index:", error);
            resultsDiv.innerHTML = '<div class="text-near-black/60">Error loading search. Please try again later.</div>';
        });

    function renderResults(results) {
        if (!results || results.length === 0) {
            resultsDiv.innerHTML = '<div class="text-near-black/60">No results found.</div>';
            return;
        }
        resultsDiv.innerHTML = results.map(r => {
            const item = r.item || r; 
            const permalink = item.permalink || '#';
            const title = item.title || 'Untitled';
            const summary = item.summary || '';
            const tagsHTML = (item.tags && Array.isArray(item.tags)) ? item.tags.map(t => `<span class='mr-2'>#${t}</span>`).join('') : '';

            return `<div class="border-b border-gray-200 pb-4 mb-4">
                      <a href="${permalink}" class="text-xl font-semibold">${title}</a>
                      <div class="text-sm text-near-black/70 mt-1 mb-1">${tagsHTML}</div>
                      <div class="text-base text-near-black/90">${summary}</div>
                    </div>`;
        }).join('');
    }

    searchInput.addEventListener('input', function (e) {
        const query = e.target.value.trim();
        if (!query) {
            resultsDiv.innerHTML = '';
            return;
        }
        if (!fuse) {
            resultsDiv.innerHTML = '<div class="text-near-black/60">Search is initializing...</div>';
            return;
        }
        const searchResults = fuse.search(query);
        renderResults(searchResults);
    });
})();
