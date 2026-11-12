describe('A select inside a disabled fieldset', () => {
    it('preserves the value when the fieldset becomes disabled with the menu open', () => {
        cy.visit('/tests/index.html');
        cy.window().then(({ $ }) => {
            $('body').append(`
                <fieldset id="project-fieldset">
                    <select id="project">
                        <option>Alpha</option>
                        <option>Beta</option>
                    </select>
                </fieldset>
            `);
            $('#project').selectpicker({ container: 'body' });
        });

        cy.get('button[data-id="project"]').click();
        cy.get('#project-fieldset').invoke('prop', 'disabled', true);
        cy.contains('.bs-container .dropdown-item', 'Beta').click();

        cy.get('#project').should('have.value', 'Alpha');
    });
});
