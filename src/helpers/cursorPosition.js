export const setCursorPosition = (pos, elem) => {
  elem.focus();

  if (elem.setSelectionRange) {
    elem.setSelectionRange(pos, pos);
  } else if (elem.createTextRange) {
    // Internet Explorer old version
    let range = elem.createTextRange();
    // from start to end
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
