(function() {
    var wrapper,
        html,
        css;

    /**
     * Chrome does not show utf-8 characters in a good way
     * for some reason. Should probably ask this to someone
     * that knows and maybe works on Chrome. However the
     * decodeURIComponent(escape(..)) combination solves it.
     */
    html = window.marked(
        decodeURIComponent(escape(document.body.innerText))
    );

    /**
     * We better make a wrapper element for the html.
     */
    wrapper = document.createElement('div');
    wrapper.className = 'markdown-body';
    wrapper.innerHTML = html;

    var elems = wrapper.getElementsByClassName('foobar');
    elems[0].innerHTML = window.katex.renderToString(elems[0].innerHTML);

    /**
     * Some styling of the body element and appending
     * of the markdown wrapper.
     */
    document.body.innerHTML = '';
    document.body.style.maxWidth = '790px';
    document.body.style.margin = '0 auto';
    document.body.style.padding = '32px 8px';
    document.body.appendChild(wrapper);

    /**
     * Make sure to add the stylesheet link to the DOM.
     */
    css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = chrome.extension
        .getURL('components/github-markdown-css/github-markdown.css');
    document.head.appendChild(css);

    css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = chrome.extension
        .getURL('katex.min.css');
    document.head.appendChild(css);
}());
