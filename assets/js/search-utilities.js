var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');

if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}

function inputFocus(e) {
  if (e.ctrlKey && e.key === '/') {
    e.preventDefault();
    search.focus();
  }
}

/*
Source:
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/

document.addEventListener('keydown', suggestionFocus);

function suggestionFocus(e) {
  const suggestionsHidden = suggestions.classList.contains('d-none');
  if (suggestionsHidden) return;

  const focusableSuggestions = [...suggestions.querySelectorAll('a')];
  if (focusableSuggestions.length === 0) return;

  const index = focusableSuggestions.indexOf(document.activeElement);

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    const nextIndex = index > 0 ? index - 1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.key === 'ArrowDown') {
    e.preventDefault();
    const nextIndex = index + 1 < focusableSuggestions.length ? index + 1 : index;
    focusableSuggestions[nextIndex].focus();
  }
}

const index = new FlexSearch.Document({
  tokenize: 'forward',
  cache: true,
  document: {
    id: 'id',
    store: [
      'href', 'title', 'content',
    ],
    index: ['title', 'content'],
  },
});

window.searchIndexReady = false;
function getBaseUrl() {
  const baseUrl = '{{.Site.BaseURL}}';
  return baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
}

const getPostsJSON = async () => {
  let response = await fetch(`${getBaseUrl()}search-index.json`);
  let data = await response.json();
  data.forEach((el) => index.add(el));
  window.searchIndexReady = true;
  document.getElementById('search').dispatchEvent(new CustomEvent('search-index-ready'));
}

getPostsJSON();

function getMatchIndices(str, regex, limit = -1) {
  const result = [];
  let match, i = 0;
  try {
    regex = new RegExp(regex, 'g');
  } catch (error) {
    return result;
  }

  while (match = regex.exec(str)) {
    if (limit > -1 && i >= limit) break;
    result.push(match.index);
    i++;
  }

  return result;
}

function getFoundWordFromDescription(description, value, startPosition) {
  const maxLeftSymbols = 20, maxRightSymbols = 70;
  let left = '',
    right = '',
    index = startPosition - 1,
    symbolsCount = 0;

  while (description[index] && symbolsCount < maxLeftSymbols) {
    left += description[index];
    index--;
    symbolsCount++;
  }

  left = left.split('').reverse().join('');

  index = startPosition;
  const offset = startPosition + value.length;

  left += '<b>';

  while (index < offset) {
    left += description[index];
    index++;
  }

  left += '</b>';

  index = offset;
  symbolsCount = 0;

  while (description[index] && symbolsCount < maxRightSymbols) {
    right += description[index];
    index++;
    symbolsCount++;
  }

  return (left + right).replace(/\t|\n/g, '');
}

function displayNoResultsElement(searchQuery) {
  const noResultsMessage = document.createElement('div')
  noResultsMessage.innerHTML = `No results for '<strong>${searchQuery}</strong>'`
  noResultsMessage.classList.add('suggestion__no-results');
  suggestions.appendChild(noResultsMessage);
  return false;
}

function constructTitleSuggestions(entries, resultTitlesIds, suggestionDescriptionClass) {
  for (const id of resultTitlesIds) {
    const storedEntry = index.get(id);
    const entry = document.createElement('div');
    const a = document.createElement('a');
    a.href = storedEntry.href;
    entry.appendChild(a);

    const title = document.createElement('div');
    title.textContent = storedEntry.title;
    title.classList.add('suggestion__title');
    a.appendChild(title);

    const description = document.createElement('div');
    if (storedEntry.href.indexOf('components') !== -1) {
      description.innerHTML = '<b>Components</b>';
    } else if (storedEntry.href.indexOf('examples') !== -1) {
      description.innerHTML = '<b>Examples</b>';
    } else if (storedEntry.href.indexOf('interaction manager') !== -1) {
      description.innerHTML = '<b>Interaction manager</b>';
    } else {
      description.innerHTML = storedEntry.href;
    }
    description.classList.add(suggestionDescriptionClass);
    a.appendChild(description);

    entries.push(entry);
  }
}

function constructContentSuggestions(entries, searchQuery, resultIds, suggestionDescriptionClass, resultsLimit) {
  for (const id of resultIds) {
    const storedEntry = index.get(id);
    const startPositions = getMatchIndices(storedEntry.content.toLowerCase(), searchQuery.toLowerCase(), resultsLimit);

    for (const startPosition of startPositions) {
      const entry = document.createElement('div');
      const a = document.createElement('a');
      a.href = storedEntry.href;
      entry.appendChild(a);

      const title = document.createElement('div');
      title.textContent = storedEntry.title;
      title.classList.add('suggestion__title');
      a.appendChild(title);

      const description = document.createElement('div');
      description.innerHTML = getFoundWordFromDescription(storedEntry.content, searchQuery, startPosition);
      description.classList.add(suggestionDescriptionClass);
      a.appendChild(description);

      entries.push(entry);
    }
  }
}

function getIndexResults(index, searchQuery, limit) {
  let results = [];

  if (limit) {
    results = index.search(searchQuery, { limit: limit });
  } else {
    results = index.search(searchQuery);
  }

  // flatten results since index.search() returns results for each indexed field
  let resultIds = [], resultTitlesIds = [];

  for (const result of results) {
    if (result.field === 'title') {
      resultTitlesIds = result.result;
    } else if (result.field === 'content') {
      resultIds = result.result;
    }
  }

  return [resultIds, resultTitlesIds];
}

function hasResultsForQuery(resultIds, resultTitlesIds, searchQuery) {
  // inform user that no results were found
  if (resultIds.length === 0 && resultTitlesIds.length === 0 && searchQuery) return displayNoResultsElement(searchQuery);

  if (searchQuery === '') return false;

  return true;
}