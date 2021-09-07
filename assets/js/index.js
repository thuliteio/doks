var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');

if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}

function inputFocus(e) {
  if (e.ctrlKey && e.key === '/' ) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' ) {
    search.blur();
    suggestions.classList.add('d-none');
  }
}

document.addEventListener('click', function(event) {

  var isClickInsideElement = suggestions.contains(event.target);

  if (!isClickInsideElement) {
    suggestions.classList.add('d-none');
  }

});

/*
Source:
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/

document.addEventListener('keydown',suggestionFocus);

function suggestionFocus(e){

  const focusableSuggestions= suggestions.querySelectorAll('a');
  const focusable= [...focusableSuggestions];
  const index = focusable.indexOf(document.activeElement);

  const keyDefault = suggestions.classList.contains('d-none');

  let nextIndex = 0;

  if ((e.keyCode === 38) && (!keyDefault)) {
    e.preventDefault();
    nextIndex= index > 0 ? index-1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if ((e.keyCode === 40) && (!keyDefault)) {
    e.preventDefault();
    nextIndex= index+1 < focusable.length ? index+1 : index;
    focusableSuggestions[nextIndex].focus();
  }

}

/*
Source:
  - https://github.com/nextapps-de/flexsearch#index-documents-field-search
  - https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html
*/

(function(){

  var index = new FlexSearch.Document({
    tokenize: "forward",
    cache: 100,
    document: {
      id: 'id',
      store: [
        "href", "title", "description"
      ],
      index: ["title", "description", "content"]
    }
  });


  // Not yet supported: https://github.com/nextapps-de/flexsearch#complex-documents

  /*
  var docs = [
    {{ range $index, $page := (where .Site.Pages "Section" "docs") -}}
      {
        id: {{ $index }},
        href: "{{ .Permalink }}",
        title: {{ .Title | jsonify }},
        description: {{ .Params.description | jsonify }},
        content: {{ .Content | jsonify }}
      },
    {{ end -}}
  ];
  */

  // https://discourse.gohugo.io/t/range-length-or-last-element/3803/2

  {{ $list := (where .Site.Pages "Section" "docs") -}}
  {{ $len := (len $list) -}}

  index.add(
    {{ range $index, $element := $list -}}
      {
        id: {{ $index }},
        href: "{{ .Permalink }}",
        title: {{ .Title | jsonify }},
        description: {{ .Params.description | jsonify }},
        content: {{ .Content | jsonify }}
      })
      {{ if ne (add $index 1) $len -}}
        .add(
      {{ end -}}
    {{ end -}}
  ;

  search.addEventListener('input', show_results, true);
  suggestions.addEventListener('click', accept_suggestion, true);

  function show_results(){
    const maxResult = 5;

    var value = this.value;
    var results = index.search(value, {limit: maxResult, enrich: true});

    suggestions.classList.remove('d-none');
    suggestions.innerHTML = "";

    //flatSearch now returns results for each index field. create a single list
    const flatResults = {}; //keyed by href to dedupe results
    results.forEach(result=>{
        result.result.forEach(r=>{
          flatResults[r.doc.href] = r.doc;
        });
    });

    //construct a list of suggestions list
    for(const href in flatResults) {
        const doc = flatResults[href];

        const entry = document.createElement('div');
        entry.innerHTML = '<a href><span></span><span></span></a>';

        entry.querySelector('a').href = href;
        entry.querySelector('span:first-child').textContent = doc.title;
        entry.querySelector('span:nth-child(2)').textContent = doc.description;

        suggestions.appendChild(entry);
        if(suggestions.childElementCount == maxResult) break;
    }
  }

  function accept_suggestion(){

      while(suggestions.lastChild){

          suggestions.removeChild(suggestions.lastChild);
      }

      return false;
  }

}());
