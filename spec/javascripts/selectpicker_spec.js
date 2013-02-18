describe("Selectpicker", function() {
  
  describe("createLi", function() {
    var bootstrap_select;
    
    describe("flat options", function() {
      it("creates a li for each option", function() {
        bootstrap_select = create_select('<select><option value="sandwhich">Ham and Cheese</option></select>');

        expect(bootstrap_select.find('li').length).toBe(1);
        expect(bootstrap_select.find('li a').text()).toBe('Ham and Cheese');
      });

      it("allows custom option text to be set", function() {
        bootstrap_select = create_select('<select><option value="sandwich" data-option-text="H and C">Ham and Cheese</option></select>');

        expect(bootstrap_select.find('button span').text()).toBe('Ham and Cheese');
        expect(bootstrap_select.find('li:first').text()).toBe('H and C');
      });

      it("can create a separator", function() {
        bootstrap_select = create_select('<select><option data-separator="true">---</option></select>');

        expect(bootstrap_select.find('li:first span')).toHaveClass('separator');
      });
    });
    
    describe("with optgroup", function() {
      it("adds opt{index} class for indention", function() {
        bootstrap_select = create_select('<select><optgroup label="Sandwich Choice"><option value="sandwich">Ham and Cheese</option></optgroup><option value="drink">Soda</option></select>');
        
        expect(bootstrap_select.find('li:first a')).toHaveClass('opt0');
        expect(bootstrap_select.find('li:last a')).not.toHaveClass('opt0');
      });
      
      it("allows custom option text to be set", function() {
        bootstrap_select = create_select('<select><optgroup label="Sandwich Choice"><option value="sandwich" data-option-text="H and C">Ham and Cheese</option></optgroup></select>');

        expect(bootstrap_select.find('button span').text()).toBe('Ham and Cheese');
        expect(bootstrap_select.find('li:first a').text()).toBe('H and C');
      });
      
      it("can create a separator", function() {
        var separator;
        bootstrap_select = create_select('<select><optgroup label="Sandwich Choice"><option data-separator="true">---</option></optgroup></select>');
        separator = bootstrap_select.find('li:first span');

        expect(separator).toHaveClass('separator');
        expect(separator).not.toHaveClass('opt0');
      });
    });
    
    function create_select(markup) {
      jasmine.getFixtures().set(markup);
      $('select').selectpicker();
      return $('.bootstrap-select');
    }
  });
  
});