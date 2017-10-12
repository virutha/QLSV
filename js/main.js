window.onload=function(){
  var fieldInput = document.getElementsByClassName('field-input');
  for (var i = 0; i < fieldInput.length; i++) {
    fieldInput[i].addEventListener('focus', function() {
        this.parentNode.classList.add('isFocused', 'hasLabel');
    }, false);
    fieldInput[i].addEventListener('blur', function() {
        if (this.value == '') {
            this.parentNode.classList.remove('isFocused', 'hasLabel');
        } else {
            this.parentNode.classList.remove('isFocused');
        }
    }, false);
  }
}
