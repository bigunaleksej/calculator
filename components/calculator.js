angular.module('app')
  .component('calculator', {
    controller: CalculatorController,
    controllerAs: 'vm',
    template: `
      <div>
        <div>{{vm.currentEnteredValue || vm.result || 0}}</div>
        <div>{{vm.operation}}</div>
      <div>
      <div>
        <button ng-click="vm.updateNumber(1)">1</button>
        <button ng-click="vm.updateNumber(2)">2</button>
        <button ng-click="vm.updateNumber(3)">3</button>
        <button ng-click="vm.divide()">/</button>
      </div>
      <div>
        <button ng-click="vm.updateNumber(4)">4</button>
        <button ng-click="vm.updateNumber(5)">5</button>
        <button ng-click="vm.updateNumber(6)">6</button>
        <button ng-click="vm.multiply()">*</button>
      </div>
      <div>
        <button ng-click="vm.updateNumber(7)">7</button>
        <button ng-click="vm.updateNumber(8)">8</button>
        <button ng-click="vm.updateNumber(9)">9</button>
        <button ng-click="vm.minus()">-</button>
      </div>
      <div>
        <button ng-click="vm.updateNumber(0)">0</button>
        <button ng-click="vm.updateNumber('.')">.</button>
        <button ng-click="vm.equal('.')">=</button>
        <button ng-click="vm.plus()">+</button>
      </div>
    `
  })

function CalculatorController() {
  var vm = this;

  vm.currentEnteredValue = '';
  vm.operation = '';
  vm.result = null

  function calculate() {
    switch (vm.operation) {
      case '+':
        vm.result = parseFloat(vm.result) + parseFloat(vm.currentEnteredValue);
        break;
      case '-':
        vm.result = parseFloat(vm.result) - parseFloat(vm.currentEnteredValue);
        break;
      case '*':
        vm.result = parseFloat(vm.result) * parseFloat(vm.currentEnteredValue);
        break;
      case '/':
        vm.result = parseFloat(vm.result) / parseFloat(vm.currentEnteredValue);
        break;
    }
  }

  function makeOperation() {
    if (vm.operation && vm.currentEnteredValue) {
      calculate();
    }

    vm.currentEnteredValue = '';
  }

  vm.plus = function() {
    makeOperation();
    vm.operation = '+';
  }

  vm.minus = function() {
    makeOperation();
    vm.operation = '-';
  }

  vm.multiply = function() {
    makeOperation();
    vm.operation = '*';
  }

  vm.divide = function() {
    makeOperation();
    vm.operation = '/';
  }

  vm.equal = function() {
    makeOperation();
    vm.operation = '';
  }

  vm.updateNumber = function(value) {
    if ((value !== '.') || vm.currentEnteredValue.indexOf('.') === -1) {
      vm.currentEnteredValue += value.toString()
    }

    if (!vm.operation) {
      vm.result = vm.currentEnteredValue;
    }
  }
}
