var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');
const form = document.getElementById('form-search');

let baseUrl = "{{.Site.BaseURL}}";

baseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
(function () {
  let entries = [];

  search.addEventListener('input', show_results, true);

  function showMoreResults(searchQuery) {
    if (searchQuery) window.localStorage.setItem('searchQuery', searchQuery);
    window.location.href = baseUrl + 'search';
  }

  function displayShowMoreFooter(searchQuery) {
    const searchFooter = document.createElement('div');
    searchFooter.onclick = () => showMoreResults(searchQuery);
    searchFooter.innerHTML = '<a onclick="return false;" href="/"><span style="width:100%; display:flex; justify-content:center;" class="suggestion__description"><b>Show more</b></span></a>';
    suggestions.appendChild(searchFooter);
  }

  function clearPrevResults() {
    entries = [];
    suggestions.innerHTML = "";
    suggestions.classList.remove('d-none');
  }

  function show_results(limit) {
    clearPrevResults();
    if (isNaN(limit)) limit = 3;
    var searchQuery = this.value;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      showMoreResults(searchQuery);
    }, true)

    const [resultIds, resultTitlesIds] = getIndexResults(index, searchQuery, limit);

    if (!hasResultsForQuery(resultIds, resultTitlesIds, searchQuery)) return;

    // construct a list of suggestions
    constructTitleSuggestions(entries, resultTitlesIds, 'suggestion__description');

    // construct a list of suggestions
    constructContentSuggestions(entries, searchQuery, resultIds, 'suggestion__description', limit);

    if (entries.length) {
      for (const entry of entries) {
        suggestions.appendChild(entry);
      }
    } else {
      return displayNoResultsElement(searchQuery);
    }

    displayShowMoreFooter(searchQuery);
  }
}());