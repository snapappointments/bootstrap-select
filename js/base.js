/* Highlight */
$( document ).ready(function() {
    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');
    $('pre').addClass('highlight');
});

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});

var $searchQuery = $('#mkdocs-search-query');

$searchQuery.parent().on('show.bs.dropdown', function () {
	if (!$searchQuery[0].value) return false;
});

function formatResults (results) {
	var sections = {},
		html = [];

	for (var i = 0; i < results.length; i++) {
		var result = results[i],
			path = result.location.split('/'),
			pathBase = path[0];

		if (pathBase.indexOf('#') !== -1) {
			pathBase = pathBase.split('#')[0];
		}

		if (!sections.hasOwnProperty(pathBase)) {
			sections[pathBase] = [];
		}

		result.section = pathBase || 'Getting Started';

		result.section = result.section.charAt(0).toUpperCase() + result.section.slice(1);

		sections[pathBase].push(result);
	}

	var sectionKeys = Object.keys(sections);

	for (var j = 0; j < sectionKeys.length; j++) {
		var section = sections[sectionKeys[j]];

		if (result)
		html.push('<a class="h6 dropdown-header text-primary" href="' + joinUrl(base_url, sectionKeys[j]) + '">'+ section[0].section + '</a>');

		for (var k = 0; k < section.length; k++) {
			var result = section[k];

			if (result.title !== result.section) {
				html.push('<a class="dropdown-item" href="' + joinUrl(base_url, result.location) + '">' + result.title + '</a>');
			}
		}

		if (j !== sectionKeys.length - 1) html.push('<div class="dropdown-divider"></div>');
	}

	return html.join('');
}

function displayResults (results) {
  var search_results = document.getElementById("mkdocs-search-results");
  while (search_results.firstChild) {
    search_results.removeChild(search_results.firstChild);
  }
  if (results.length > 0) {
  	var html = formatResults(results);
  	search_results.insertAdjacentHTML('beforeend', html);
  } else {
    search_results.insertAdjacentHTML('beforeend', "<div class='dropdown-item'>No results found</div>");
  }

  $searchQuery.dropdown('show');
}

// enable fuzzy searching
function search (query) {
  if (!allowSearch) {
    console.error('Assets for search still loading');
    return;
  }

  var resultDocuments = [];
  var results = index.search(query + '~2'); // fuzzy
  for (var i=0; i < results.length; i++){
    var result = results[i];
    doc = documents[result.ref];
    doc.summary = doc.text.substring(0, 200);
    resultDocuments.push(doc);
  }
  return resultDocuments;
}