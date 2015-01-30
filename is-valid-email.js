(function(that){

  function isValidEmail(v) {
    if (!v) return false;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidEmail;
    return;
  }
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return isValidEmail;
    });
    return;
  }
  that['isValidEmail'] = isValidEmail;

})(this);
