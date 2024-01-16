export function createPhoneMask(event) {
  let matrix = '+1 (___) __-___',
    i = 0,
    // static value
    def = matrix.replace(/\D/g, ''),
    // dynamic value
    val = this.value.replace(/\D/g, '');

  if (def.length >= val.length) {
    val = def;
  }

  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ''
      : a;
  });

  if (event.type === 'blur') {
    if (this.value.length == 2) {
      this.value = '';
    }
  } else {
    setCursorPosition(this.value.length, this);
  }
}
