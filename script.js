(function() {
  
  angular.module('app', ['app.converter','ui.bootstrap']);

  angular.module('app')
    .controller('ConverterCtrl', ['Converter', '$scope','$dialog', ConverterCtrl]);

  function ConverterCtrl(Converter, $scope, $dialog) {
    var vm = this;
    //public
    vm.decNum;
    vm.binNum;
    vm.hexNum;
    vm.debuger = 'hi';
    
    vm.decChanged = decChanged;
    vm.binChanged = binChanged;
    vm.hexChanged = hexChanged;
    vm.resetTo = resetTo;
    vm.addNum = addNum;
    vm.pressedButton = pressedButton;
    vm.openHelp = openHelp;
    


    //init
    vm.resetTo(200);


    //functions
    function decChanged(_newVal) {
      vm.binNum = Converter.dec2bin(_newVal.toString());
      vm.hexNum = Converter.dec2hex(_newVal.toString()).toUpperCase();
    }

    function binChanged(_newVal) {
      console.log(_newVal);
      vm.decNum = Converter.bin2dec(_newVal.toString());
      vm.hexNum = Converter.bin2hex(_newVal.toString()).toUpperCase();
    }

    function hexChanged(_newVal) {
      console.log(_newVal);
      vm.decNum = Converter.hex2dec(_newVal.toString());
      vm.binNum = Converter.hex2bin(_newVal.toString());
      vm.hexNum = vm.hexNum.toUpperCase()
    }

    function resetTo(_num) {
      vm.decNum = _num;
      vm.binNum = Converter.dec2bin(vm.decNum.toString());
      vm.hexNum = Converter.dec2hex(vm.decNum.toString()).toUpperCase();
    }
    
    function addNum(_num) {
      if (isNaN(parseInt(vm.decNum))){
        vm.decNum = 0;
      }
      vm.decNum = parseInt(vm.decNum) + _num;
      vm.binNum = Converter.dec2bin(vm.decNum.toString());
      vm.hexNum = Converter.dec2hex(vm.decNum.toString()).toUpperCase();
    }
    
    function pressedButton($event){
      console.log($event);
      //vm.debuger = Date.now();
      vm.debuger = $event.keyCode;
      if($event.keyCode === 38){
        addNum(1);
      }
      if($event.keyCode === 40){
        addNum(-1);
      }
      if($event.keyCode === 82 && $event.ctrlKey === true){
        resetTo(0);
      }
      //$event.preventDefault();
    }
    
    function openHelp(size){
    
    
    }
  }

})();