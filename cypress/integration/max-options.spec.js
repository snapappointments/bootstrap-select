const optgroupTestArr = new Array(3).fill(0).map((x, i) => {
    return {
        text: `Optgroup ${i}`,
        maxOptions: i + 1,
        children: new Array(4).fill(0).map((x, j) => {
            return {
                text: `Option ${i}-${j}`,
            }
        })
    }
});

describe('Multi-selects with maxOptions', () => {
    beforeEach(() => {
        cy.visit('/tests/index.html');
    });

    [{
        title: 'built via HTML',
        config: {
            html: `
            <select class="selectpicker" data-live-search="true" multiple data-max-options="4">
                ${optgroupTestArr.map((obj) =>
                `<optgroup label="${obj.text}" data-max-options="${obj.maxOptions}">
                    ${obj.children.map((option) => `<option value="${option.text}">${option.text}</option>`)}
                </optgroup>`
            ).join('')}
            </select>
        `
        }
    }, {
        title: 'built via source',
        config: {
            attrs: {
                multiple: true,
                'data-max-options': 4
            },
            options: {
                liveSearch: true,
                source: {
                    data: function (callback) {
                        callback(optgroupTestArr);
                    },
                }
            }
        }
    }].forEach(({config, title}) => {
        it(title + ' selection is limited by maxOptions', () => {
            cy.selectpicker(config).then(($select) => {
                const button = `[data-id="${$select[0].id}"]`;
                cy.get(button).click();
                // $select.on('fetched.bs.select', cy.stub().as('fetched'));

                // maxOptions 1
                cy.get('li').contains('Option 0-0').click();
                cy.get('li').contains('Option 0-1').click();
                cy.get('li').contains('Option 0-0').should('not.have.class', 'selected');
                cy.get('li').contains('Option 0-1').should('have.class', 'selected');

                // maxOptions 2
                cy.get('li').contains('Option 1-0').click();
                cy.get('li').contains('Option 1-1').click();
                cy.get('li').contains('Option 1-2').click();
                cy.get('.notify').should('be.visible');
                cy.get('li').contains('Option 1-0').should('have.class', 'selected');
                cy.get('li').contains('Option 1-1').should('have.class', 'selected');
                cy.get('li').contains('Option 1-2').should('not.have.class', 'selected');

                // maxOptions 4 (on select)
                cy.get('li').contains('Option 2-0').click();
                cy.get('li').contains('Option 2-1').click();
                cy.get('.notify').should('be.visible');
                cy.get('li').contains('Option 2-0').should('have.class', 'selected');
                cy.get('li').contains('Option 2-1').should('not.have.class', 'selected');

                cy.get(`#${$select[0].id}`)
                    .invoke('val')
                    .should('deep.equal', ['Option 0-1', 'Option 1-0', 'Option 1-1', 'Option 2-0']);
            });
        });
    });
});
