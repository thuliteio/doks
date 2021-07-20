var suggestions = document.getElementById('suggestions');
var userinput = document.getElementById('userinput');

document.addEventListener('keydown', inputFocus);

function inputFocus(e) {

  if (e.keyCode === 191 ) {
    e.preventDefault();
    userinput.focus();
  }

  if (e.keyCode === 27 ) {
    userinput.blur();
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

  let nextIndex = 0;

  if (e.keyCode === 38) {
    e.preventDefault();
    nextIndex= index > 0 ? index-1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.keyCode === 40) {
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

  userinput.addEventListener('input', show_results, true);
  suggestions.addEventListener('click', accept_suggestion, true);

  function show_results(){

    var value = this.value;
    var results = index.search(value, { limit: 5, index: ["content"], enrich: true });
    var entry, childs = suggestions.childNodes;
    var i = 0, len = results.length;

    suggestions.classList.remove('d-none');

    results.forEach(function(results) {

      entry = document.createElement('div');

      entry.innerHTML = '<a href><span></span><span></span></a>';

      a = entry.querySelector('a'),
      t = entry.querySelector('span:first-child'),
      d = entry.querySelector('span:nth-child(2)');

      // console.log(results);

      a.href = results.result[i].doc.href;
      t.textContent = results.result[i].doc.title;
      d.textContent = results.result[i].doc.description;

      suggestions.appendChild(entry);

    });

    while(childs.length > len){

        suggestions.removeChild(childs[i])
    }

  }

  function accept_suggestion(){

      while(suggestions.lastChild){

          suggestions.removeChild(suggestions.lastChild);
      }

      return false;
  }

}());
