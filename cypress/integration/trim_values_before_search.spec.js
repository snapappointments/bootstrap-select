describe('Trim values before search', () => {
  beforeEach(() => {
    cy.visit('/tests/index.html');
  });

  it('Matches even if there are leading and trailing spaces', () => {
    cy.selectpicker({
      html: `
        <select class="selectpicker" data-live-search="true">
          ${[
            'apple',
            'pear',
            'dragon fruit'
          ].map((value) =>
            `<option value="${value}">${value}</option>`
          ).join('')}}
        </select>
      `
    }).then(($select) => {
      const button = `[data-id="${$select[0].id}"]`;
      cy.get(button).click();
      $select.on('fetched.bs.select', cy.stub().as('fetched'));
      [{
        searchValue: ' app ',     // leading and trailing spaces
        expectedContain: 'apple'
      }, {
        searchValue: ' 　pea',    // both half and full space mixed
        expectedContain: 'pear'
      }, {
        searchValue: ' ',         // text with half-space also match
        expectedContain: 'dragon fruit'
      }].forEach((test) => {
        cy.get('input').type(test.searchValue);
        cy.get('.dropdown-menu').find('li').first().should(($el) => {
          expect($el).to.have.class('active')
          expect($el).to.contain(test.expectedContain);
        });
        cy.get('.dropdown-menu').find('li').first().click();
        cy.get(button).contains(test.expectedContain).click();
      });
    });
  });
});
