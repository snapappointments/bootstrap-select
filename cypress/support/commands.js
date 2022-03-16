import {v4 as uuidv4} from 'uuid';

Cypress.Commands.add('selectpicker', ({options, attrs, selector, html}) => {
    let id;
    if (!selector) {
        id = uuidv4();
        selector = `#${id}`;
    }

    cy.window().then(window => {
        const $ = window.$;

        if (html) {
            const $select = $(html);

            if (id && !$select[0].id) {
                $select.attr('id', id);
            }
            $('body').append($select);
        } else if (id) {
            $('body').append(`<select id="${id}" />`);
            if (attrs) {
                $(`#${id}`).attr(attrs);
            }
        }

        $(selector).selectpicker(options);
    });

    return cy.get(selector);
});
