/**
 * Created by zeevjelinek on 3/23/15.
 */
angular.module('app.converter', [])
  .factory('Converter', Converter);

function Converter() {
  /*
   * Usage example:
   * bin2dec('111'); // '7'
   * dec2hex('42'); // '2a'
   * hex2bin('f8'); // '11111000'
   * dec2bin('22'); // '10110'
   */

  var _public = {
    bin2dec: bin2dec,
    bin2hex: bin2hex,
    dec2bin: dec2bin,
    dec2hex: dec2hex,
    hex2bin: hex2bin,
    hex2dec: hex2dec
  }
  return _public;


  function convertBase(num) {
    this.from = function(baseFrom) {
      this.to = function(baseTo) {
        return parseInt(num, baseFrom).toString(baseTo);
      };
      return this;
    };
    return this;
  }

  // binary to decimal
  function bin2dec(num) {
    return convertBase(num).from(2).to(10);
  }

  // binary to hexadecimal
  function bin2hex(num) {
    return convertBase(num).from(2).to(16);
  }

  // decimal to binary
  function dec2bin(num) {
    return convertBase(num).from(10).to(2);
  }

  // decimal to hexadecimal
  function dec2hex(num) {
    return convertBase(num).from(10).to(16);
  }

  // hexadecimal to binary
  function hex2bin(num) {
    return convertBase(num).from(16).to(2);
  }

  // hexadecimal to decimal
  function hex2dec(num) {
    return convertBase(num).from(16).to(10);
  }

}
