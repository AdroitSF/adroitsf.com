(function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    let fuse;
    let searchList = [];

    // Fetch the search index
    fetch('/searchindex.json')
        .then(response => response.json())
        .then(data => {
            searchList = data;
            // Configure Fuse.js
            const options = {
                shouldSort: true,
                threshold: 0.4, // Adjust for sensitivity (0.0 = perfect match, 1.0 = match anything)
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [
                    { name: "title", weight: 0.8 },
                    { name: "content", weight: 0.5 },
                    { name: "summary", weight: 0.5 },
                    { name: "tags", weight: 0.3 },
                    { name: "categories", weight: 0.3 }
                ]
            };
            fuse = new Fuse(searchList, options);
        })
        .catch(error => {
            console.error("Error fetching search index:", error);
            if (searchResults) {
                searchResults.innerHTML = "<p>Error loading search index. Please try again later.</p>";
            }
        });

    if (searchInput) {
        searchInput.addEventListener('input', function (event) {
            const query = event.target.value.trim();
            if (query.length < 2) { // Minimum query length
                if (searchResults) searchResults.innerHTML = '';
                return;
            }

            if (fuse) {
                const results = fuse.search(query);
                displayResults(results);
            }
        });
    }

    function displayResults(results) {
        if (!searchResults) return;
        searchResults.innerHTML = ''; // Clear previous results

        if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-near-black/70">No results found.</p>';
            return;
        }

        const ul = document.createElement('ul');
        ul.className = 'list-none p-0 m-0'; // Tailwind classes for basic list reset

        results.forEach(function (result) {
            const item = result.item;
            const li = document.createElement('li');
            li.className = 'mb-4 pb-4 border-b border-neutral-200'; // Style for each result item

            const titleLink = document.createElement('a');
            titleLink.href = item.permalink;
            titleLink.className = 'text-xl font-semibold text-indigo-600 hover:text-indigo-800';
            titleLink.textContent = item.title;

            const summary = document.createElement('p');
            summary.className = 'text-sm text-near-black/80 mt-1';
            summary.textContent = item.summary || (item.content ? item.content.substring(0, 150) + '...' : '');


            li.appendChild(titleLink);
            li.appendChild(summary);
            // You could add more info like tags or categories here
            // For example:
            // if (item.tags && item.tags.length > 0) {
            //     const tagsP = document.createElement('p');
            //     tagsP.className = 'text-xs text-near-black/60 mt-1';
            //     tagsP.textContent = 'Tags: ' + item.tags.join(', ');
            //     li.appendChild(tagsP);
            // }

            ul.appendChild(li);
        });
        searchResults.appendChild(ul);
    }
})();
