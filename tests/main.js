/**
 * Bootstrap-select test page js
 */

/**
 * Add options to a select element
 */
const createOptions = (elemId, num) => {
  // should be a select
  const element = document.getElementById(elemId);
  for (let i = 1; i <= num; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = `Option ${i}`;
    element.appendChild(option);
  }
}

// how many options to generate
const OPTIONS_NUM = 30;

// we need to  include the options before the document is ready and bootstrap select starts working
document.addEventListener('readystatechange', () => {
  // "interactive" is when all is loaded but bootstrap-select is not yet activated
  if (document.readyState === 'interactive') {
    ['number', 'number-multiple', 'number2', 'number2-multiple']
      .forEach(elemId => createOptions(elemId, OPTIONS_NUM));

    const mySelect = $('#first-disabled2');

    $('#special').on('click', function () {
      mySelect.find('option:selected').prop('disabled', true);
      mySelect.selectpicker('refresh');
    });

    $('#special2').on('click', function () {
      mySelect.find('option:disabled').prop('disabled', false);
      mySelect.selectpicker('refresh');
    });

    $('#basic2').selectpicker({
      liveSearch: true,
      maxOptions: 1
    });
  }
});
