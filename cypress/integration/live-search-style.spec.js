const testArr = new Array(20).fill(0).map((x, i) => {
    return {
        text: `Option ${i}`,
    }
});

const selectpickerConfigs = [{
    filter: 'contains',
    title: 'built via HTML (contains, default)',
    config: {
        html: `
          <select class="selectpicker" data-live-search="true" data-live-search-style="contains">
              ${testArr.map((obj) =>
            `<option value="${obj.text}">${obj.text}</option>`
        ).join('')}
          </select>
      `
    }
}, {
    filter: 'contains',
    title: 'built via source (contains, default)',
    config: {
        options: {
            liveSearch: true,
            liveSearchStyle: 'contains',
            source: {
                data: (callback) => callback(testArr),
            }
        }
    }
}, {
    filter: 'containsAll',
    title: 'built via HTML (containsAll)',
    config: {
        html: `
          <select class="selectpicker" data-live-search="true" data-live-search-style="containsAll">
              ${testArr.map((obj) =>
            `<option value="${obj.text}">${obj.text}</option>`
        ).join('')}
          </select>
      `
    }
}, {
    filter: 'containsAll',
    title: 'built via source (containsAll)',
    config: {
        options: {
            liveSearch: true,
            liveSearchStyle: 'containsAll',
            source: {
                data: (callback) => callback(testArr),
            }
        }
    }
}];

describe('Filter with search style', () => {
    beforeEach(() => {
        cy.visit('/tests/index.html');
    });

    selectpickerConfigs.forEach(({ filter, config, title }) => {
        const canTitle = `${title} can find options containing ${(filter === 'containsAll' ? 'all the search words' : 'the whole search string')}`

        it(canTitle, () => {
            cy.selectpicker(config).then(($select) => {
                const button = `[data-id="${$select[0].id}"]`;
                cy.get(button).click();

                cy.get('input').type('option 4');

                cy.get('.dropdown-menu').find('li')
                    .then(($el) => {
                        if (filter === 'containsAll') {
                            // expecting to find 2 items with values: Option 4 and Option 14.
                            // Those are the only 2 items in our test array containing the "Option" and the "4" words.
                            expect($el).to.have.length(2);
                            expect($el[0].textContent).to.equal('Option 4');
                            expect($el[1].textContent).to.equal('Option 14');
                        } else {
                            // default "contains". Look for the complete search string "as is"; no word separation is expected.
                            // There is only 1 option in our test array containing the whole "option 4" search string as is.
                            expect($el).to.have.length(1);
                            expect($el[0].textContent).to.equal('Option 4');
                        }
                    });
            });
        });
    });
});
