function template(templateString) {
    return $(templateString.trim());
}

function layoutTemplate(direction) {
    return template(`<div class="panel layout ${direction}"></div>`);
}

function signTemplate(url) {
    return template(`<iframe class="panel sign" frameborder="0" src="${url}"></iframe>`);
}

function layoutElement(layout) {

    const direction = layout.direction || 'horizontal';

    const layoutEl = layoutTemplate(direction);

    if (Array.isArray(layout.children)) {
        layout.children
            .map(panelElement)
            .forEach(el => el.appendTo(layoutEl));
    }

    return layoutEl;
}

function signElement(sign) {
    return signTemplate(sign.url);
}

function panelElement(panel) {

    const type = panel.type
        || (panel.url ? 'sign' : null)
        || 'layout';

    let el;

    switch (type) {
        case 'layout':
            el = layoutElement(panel);
            break;
        case 'sign':
            el = signElement(panel);
            break;
        default:
            console.error(`Unexpected panel type: ${type}`);
            el = $('<div></div>');
    }

    const size = panel.size;

    if (size != null) {
        el.css({ 'flex-grow': size });
    }

    return el;
}

function displayLayout(layout) {

    const containerEl = $('.container');

    containerEl.empty();

    const root = panelElement(layout);

    root.appendTo(containerEl);
}
