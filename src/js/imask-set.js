import IMask from 'imask';

function inputMask() {
  const maskInputs = document.querySelectorAll('.js-inputmask');
  const maskInputsdate = document.querySelectorAll('.js-inputmask-date');
  if (maskInputs.length > 0) {
    maskInputs.forEach(input => {
      var maskOptions = {
        mask: '+{38}(000)000-00-00',
        lazy: false,
      };
      var mask = IMask(input, maskOptions);
    });
  }
  ////
  if (maskInputsdate.length > 0) {
    maskInputsdate.forEach(input => {
      var maskOptions = {
        mask: 'DD.MM.YYYY',
        lazy: false,
        blocks: {
          YYYY: {
            mask: IMask.MaskedRange,
            from: 2022,
            to: 2023,
          },

          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
          },

          DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
          },
        },
      };
      var mask = IMask(input, maskOptions);
    });
  }
}

inputMask();
