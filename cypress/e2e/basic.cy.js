const testArr = new Array(1000).fill(0).map((x, i) => {
    return {
        text: `Option ${i}`,
    }
});

function buildPages(data) {
    const pageSize = 40;
    const pageCount = data.length / pageSize;
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        const pageStart = i * pageSize;
        pages.push(data.slice(pageStart, pageStart + pageSize));
    }

    return pages;
}

const selectpickerConfigs = [{
    title: 'built via HTML',
    config: {
        html: `
            <select class="selectpicker" data-live-search="true">
                ${testArr.map((obj) =>
                    `<option value="${obj.text}">${obj.text}</option>`
                ).join('')}
            </select>
        `
    }
}, {
    title: 'built via source with source.search',
    config: {
        options: {
            liveSearch: true,
            source: {
                data: function (callback, page) {
                    const pages = buildPages(testArr);
                    callback(pages[page - 1], pages.length > page);
                },
                search: function (callback, page, searchTerm) {
                    if (searchTerm) {
                        const searchResults = testArr.filter((obj) => {
                            return (obj.text && obj.text.toLowerCase().includes(searchTerm.toLowerCase()))
                        });
                        const pages = buildPages(searchResults);

                        callback(pages[page - 1], pages.length > page);
                    }
                }
            }
        }
    }
}, {
    title: 'built via source',
    config: {
        options: {
            liveSearch: true,
            source: {
                data: function (callback) {
                    callback(testArr);
                },
            }
        }
    }
}, {
    title: 'built via source (limit 30) with source.search',
    config: {
        options: {
            liveSearch: true,
            source: {
                data: function (callback, page) {
                    const pages = buildPages(testArr.slice(0, 30));
                    callback(pages[page - 1], pages.length > page);
                },
                search: function (callback, page, searchTerm) {
                    if (searchTerm) {
                        const searchResults = testArr.slice(0, 30).filter((obj) => {
                            return (obj.text && obj.text.toLowerCase().includes(searchTerm.toLowerCase()))
                        });
                        const pages = buildPages(searchResults);

                        callback(pages[page - 1], pages.length > page);
                    }
                }
            }
        }
    }
}, {
    title: 'built via source (limit 30)',
    config: {
        options: {
            liveSearch: true,
            source: {
                data: function (callback) {
                    callback(testArr.slice(0, 30));
                },
            }
        }
    }
}];

describe('Single selects with search', () => {
    beforeEach(() => {
        cy.visit('/tests/index.html');
    });

    selectpickerConfigs.forEach(({config, title}) => {
        it(title + ' can search for and select options', () => {
            cy.selectpicker(config).then(($select) => {
                const button = `[data-id="${$select[0].id}"]`;
                cy.get(button).click();
                $select.on('fetched.bs.select', cy.stub().as('fetched'));

                cy.get('input').type('option 4');

                if (config?.source?.search) {
                    cy.get('@fetched').its('callCount').should('equal', 8);
                }
                cy.get('.dropdown-menu').find('li').first().should(($el) => {
                    expect($el).to.have.class('active')
                    expect($el).to.contain('Option 4')
                });

                cy.get('.dropdown-menu').find('li').first().click();
                cy.get(button).contains('Option 4').click();

                cy.get('li').contains('Option 4').should('have.class', 'active');

                cy.get('li').contains('Option 9').click();
                cy.get(button).contains('Option 9').click();
                cy.get('li').contains('Option 9').should('have.class', 'active');
                cy.get('li').contains('Option 4').should('not.have.class', 'active');
            });
        });
    });
});
