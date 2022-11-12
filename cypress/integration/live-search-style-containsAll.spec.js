const testArr = new Array(20).fill(0).map((x, i) => {
    return {
        text: `Option ${i}`,
    }
});

const selectpickerConfigs = [{
    title: 'built via HTML',
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
    title: 'built via source',
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

describe('Filter with search', () => {
    beforeEach(() => {
        cy.visit('/tests/index.html');
    });

    selectpickerConfigs.forEach(({ config, title }) => {
        it(title + ' can find only options containing all the search words', () => {
            cy.selectpicker(config).then(($select) => {
                const button = `[data-id="${$select[0].id}"]`;
                cy.get(button).click();

                cy.get('input').type('option 4');

                cy.get('.dropdown-menu').find('li')
                    .then(($el) => {
                        // expecting to find 2 items with values: Option 4 and Option 14.
                        // Those are the only 2 items in our test array containing "Option" and "4".
                        expect($el).to.have.length(2)
                        expect($el[0].textContent).to.equal('Option 4')
                        expect($el[1].textContent).to.equal('Option 14')
                    });
            });
        });
    });
});
