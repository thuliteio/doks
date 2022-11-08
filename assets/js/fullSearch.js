var suggestionsWrapper = document.getElementById('suggestions-wrapper');
var loader = suggestionsWrapper.querySelector('#loader-container');
var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');
var searchButton = document.getElementById('start-search-btn');
var pagination = document.getElementById('pagination');

(function () {
  let searchScheduled = false;
  searchButton.addEventListener('click', show_results, true);
  const numResultsPerPage = 20, numButtonsPerPage = 5;
  let paginationButtons = null,
    activeButton = null,
    visibleButtons = [],
    currentPageNumber = 0,
    pagesCount = 0, entries = [];

  function changePage(page) {
    appendResultsOnPage(page);
    toggleButtons(page);
    currentPageNumber = page;
  }

  function appendResultsOnPage(page) {
    suggestions.innerHTML = '';

    const resultsCountBox = document.createElement('div');
    resultsCountBox.style = 'margin:0 0.5rem;padding:0.75rem;font-size:1rem;'
    resultsCountBox.innerHTML = `Found: <b>${entries.length}</b> results`;
    suggestions.appendChild(resultsCountBox);

    const startIndex = page * numResultsPerPage;
    const endIndex = startIndex + numResultsPerPage;
    if (!entries[startIndex]) return;

    for (let i = startIndex; i < entries.length && i < endIndex; i++) {
      suggestions.appendChild(entries[i]);
    }
  }

  function toggleButtons(page) {
    if (activeButton) activeButton.classList.remove('btn-active');
    activeButton = paginationButtons[page];
    activeButton.classList.add('btn-active');

    for (const button of visibleButtons) {
      button.classList.add('d-none');
    }

    activeButton.classList.remove('d-none');
    visibleButtons = [activeButton];

    let leftButtonIndex = page - 1, rightButtonIndex = page + 1, buttonsVisibleCount = 1;

    while (leftButtonIndex >= 0 && buttonsVisibleCount < Math.ceil(numButtonsPerPage / 2) && paginationButtons[leftButtonIndex]) {
      paginationButtons[leftButtonIndex].classList.remove('d-none');
      visibleButtons.push(paginationButtons[leftButtonIndex]);
      leftButtonIndex--;
      buttonsVisibleCount++;
    }

    while (rightButtonIndex < paginationButtons.length && buttonsVisibleCount < numButtonsPerPage && paginationButtons[rightButtonIndex]) {
      paginationButtons[rightButtonIndex].classList.remove('d-none');
      visibleButtons.push(paginationButtons[rightButtonIndex]);
      rightButtonIndex++;
      buttonsVisibleCount++;
    }

    activeButton.classList.add('btn-active');
  }

  function appendLeftArrows() {
    const firstPageButton = document.createElement('button');
    firstPageButton.innerHTML = '<<';
    firstPageButton.addEventListener('click', () => {
      changePage(0);
    })
    const prevPageButton = document.createElement('button');
    prevPageButton.innerHTML = '<';
    prevPageButton.addEventListener('click', () => {
      if (currentPageNumber > 0) changePage(currentPageNumber - 1);
    })
    pagination.appendChild(firstPageButton);
    pagination.appendChild(prevPageButton);
  }

  function appendRightArrows() {
    const lastPageButton = document.createElement('button');
    lastPageButton.innerHTML = '>>';
    lastPageButton.addEventListener('click', () => {
      changePage(pagesCount - 1);
    })
    const nextPageButton = document.createElement('button');
    nextPageButton.innerHTML = '>';
    nextPageButton.addEventListener('click', () => {
      if (currentPageNumber < pagesCount - 1) changePage(currentPageNumber + 1);
    })
    pagination.appendChild(nextPageButton);
    pagination.appendChild(lastPageButton);
  }

  function addPaginationButtons() {
    paginationButtons = Array.from({ length: pagesCount }, (_, i) => {
      return document.createElement('button');
    });

    for (let i = 0; i < paginationButtons.length; i++) {
      const button = paginationButtons[i];
      button.innerHTML = i + 1;
      button.addEventListener('click', () => {
        changePage(i);
      })
      pagination.appendChild(button);
      visibleButtons.push(button);
    }
  }

  function addPagination() {
    pagesCount = Math.ceil(entries.length / numResultsPerPage);

    if (pagesCount <= 1) {
      appendResultsOnPage(0);
      return;
    }

    appendLeftArrows();
    addPaginationButtons();
    appendRightArrows();
    changePage(0);
  }

  function clearPrevResults() {
    entries = [];
    suggestions.innerHTML = '';
    pagination.innerHTML = '';
    loader.classList.add('d-none');
    suggestions.classList.remove('d-none');
  }

  function addLoader() {
    loader.classList.remove('d-none');
  }

  function show_results() {
    var searchQuery = search.value;

    if (!searchQuery) {
      searchScheduled = false;
      clearPrevResults();
      return;
    }

    if (!window.searchIndexReady) {
      if (searchScheduled) return;

      addLoader();
      search.addEventListener('search-index-ready', show_results);
      searchScheduled = true;
      return;
    }
    search.removeEventListener('search-index-ready', show_results);

    clearPrevResults();
    window.localStorage.setItem('searchQuery', searchQuery);
    const [resultIds, resultTitlesIds] = getIndexResults(searchQuery);

    if (!hasResultsForQuery(resultIds, resultTitlesIds, searchQuery)) return;

    // construct a list of suggestions
    constructTitleSuggestions(entries, resultTitlesIds, 'suggestion__description_all');

    // construct a list of suggestions
    constructContentSuggestions(entries, searchQuery, resultIds, 'suggestion__description_all');

    if (entries.length) {
      addPagination();
    } else {
      displayNoResultsElement(searchQuery);
    }
  }

  const searchQuery = window.localStorage.getItem('searchQuery');
  if (searchQuery) {
    search.value = searchQuery;
    show_results();
  }

  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    show_results();
  })
}());