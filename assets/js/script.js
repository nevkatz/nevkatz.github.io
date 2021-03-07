(function() {
    function tabs() {
        // using local inner functions that are only used here. 
        // the const declaration and arrow syntax makes it obvious that these are inner functions.
        // this hide_inactive function actually is used within the activate_tab function
        const hide_inactive = (links, id) => {
            for (var i = 0; i < links.length; ++i) {
                var cur_id = links[i].href.split('#')[1];
                if (cur_id != id) {
                    links[i].className = '';
                    var div = document.querySelector('#' + cur_id);
                    div.style.display = 'none';
                }
            }
        }
        // this activate_tab function is the handler for when a tab is clicked. 
        const activate_tab = (links, activelink) => {
            activelink.className = 'active';
            var id = activelink.href.split('#')[1];
            var el = document.querySelector('#' + id);
            el.style.display = 'block';
            hide_inactive(links, id);
        }
        // let's find all the tabs that are on the page. 
        var tabs = document.querySelectorAll('.css-tabs');
        [...tabs].forEach(function(tabs) {
            // find each tab link.
            var links = tabs.querySelectorAll('li a');
            // activate the first link and its section.
            activate_tab(links, links[0]);
            // loop through all links and add click listeners.
            [...links].forEach(function(link) {
                link.onclick = function(e) {
                    e.preventDefault();
                    activate_tab(links, link);
                }
            });
        })
    }
    function init() {
        tabs();
    }
    init();

})();

// search
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
});