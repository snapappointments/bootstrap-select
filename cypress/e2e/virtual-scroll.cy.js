const testArray = new Array(1000).fill(0).map((x, i) => ({
    text: `Option ${i + 1}`
}));

const selectpickerConfigs = [{
    title: 'Select option with line-height style',
    config: {
        html: `
            <select class="selectpicker" data-virtual-scroll="true">
                ${testArray.map(({ text }) =>
                    `<option value="${text}" style="line-height: 1.6275;">${text}</option>`
                ).join('')}
            </select>
        `,
        options: {
            virtualScroll: true
        }
    }
}, {
    title: 'Select option with default style',
    config: {
        html: `
            <select class="selectpicker" data-virtual-scroll="true">
                ${testArray.map(({ text }) =>
                    `<option value="${text}">${text}</option>`
                ).join('')}
            </select>
        `,
        options: {
            virtualScroll: true
        }
    }
}];

describe('Virtual scroll with custom select option style', () => {
    beforeEach(() => {
        cy.visit('/tests/index.html');
    });

    selectpickerConfigs.forEach(({title, config}) => {
        it(title, () => {
            cy.selectpicker(config).then(($select) => {
                const firstSelectOptionText = testArray.at(0).text;
                const lastSelectOptionText = testArray.at(-1).text;
                const button = `[data-id="${$select[0].id}"]`;

                cy.get(button).click();
                const dropdownMenu = cy.get('.dropdown-menu [role="listbox"]');

                dropdownMenu.type('{upArrow}');
                cy.get('li').contains(lastSelectOptionText)
                    .should('have.class', 'active');

                dropdownMenu.type('{enter}');
                cy.get(button).find('.filter-option-inner-inner')
                    .should('contain', lastSelectOptionText);

                cy.get(button).click();
                dropdownMenu.type('{downArrow}');

                cy.get('li').contains(firstSelectOptionText)
                    .should('have.class', 'active');

                dropdownMenu.type('{enter}');
                cy.get(button).find('.filter-option-inner-inner')
                    .should('contain', firstSelectOptionText);

                const n = 20;
                const typeOptions = {
                    // Delay after each keypress (Default: 10)
                    delay: 0,
                };

                // Test the first n options.
                cy.get(button).click();

                for (let i = 1, iterator = testArray.entries(); i <= n; i++) {
                    const [, { text }] = iterator.next().value;

                    // Sampling (testing every 5 typing actions)
                    if (i % 5 === 0) {
                        cy.get('li').contains(text)
                            .should('have.class', 'active');
                    }
                    dropdownMenu.type('{downArrow}', typeOptions);
                }
                cy.get(button).click();

                // Test the last n select options.
                const reversedArray = Array.from(testArray).reverse();
                cy.get(button).click();

                for (let i = 1, iterator = reversedArray.entries(); i <= n; i++) {
                    const [, { text }] = iterator.next().value;
                    dropdownMenu.type('{upArrow}', typeOptions);

                    // Sampling (testing every 5 typing actions)
                    if (i % 5 === 0) {
                        cy.get('li').contains(text)
                            .should('have.class', 'active');
                    }
                }
                cy.get(button).click();
            });
        });
    });
});
