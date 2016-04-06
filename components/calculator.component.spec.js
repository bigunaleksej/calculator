describe('component: calculator', function() {
  var component, scope, $componentController;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, _$componentController_) {
    scope = $rootScope.$new();
    $componentController = _$componentController_;

  }));

  it('should update current value', function() {
    component = $componentController('calculator', {$scope: scope});

    component.updateNumber(1);
    component.updateNumber(2);
    expect(component.currentEnteredValue).toBe('12');
  });

  it('should correct update current value for decimal values', function() {
    component = $componentController('calculator', {$scope: scope});

    component.updateNumber(1);
    component.updateNumber('.');
    component.updateNumber(2);
    component.updateNumber('.');
    component.updateNumber(3);
    expect(component.currentEnteredValue).toBe('1.23');
  });

  it('should be able to plus the numbers', function() {
    component = $componentController('calculator', {$scope: scope});

    component.updateNumber(2);
    component.updateNumber(5);
    component.plus();
    expect(component.result).toBe(25);
    component.updateNumber(5);
    component.equal();
    expect(component.result).toBe(30);
  });

  it('should be able to minus the numbers', function() {
    component = $componentController('calculator', {$scope: scope});

    component.updateNumber(2);
    component.updateNumber(5);
    component.minus();
    expect(component.result).toBe(25);
    component.updateNumber(5);
    component.equal();
    expect(component.result).toBe(20);
  });

  it('should be able to multiply the numbers', function() {
    component = $componentController('calculator', {$scope: scope});

    component.updateNumber(2);
    component.updateNumber(5);
    component.multiply();
    expect(component.result).toBe(25);
    component.updateNumber(5);
    component.equal();
    expect(component.result).toBe(125);
  });

  it('should be able to divide the numbers', function() {
    component = $componentController('calculator', {$scope: scope});

    component.updateNumber(2);
    component.updateNumber(5);
    component.divide();
    expect(component.result).toBe(25);
    component.updateNumber(5);
    component.equal();
    expect(component.result).toBe(5);
  });

  it('should be able to calculate sequentially', function() {
    component = $componentController('calculator', {$scope: scope});

    component.updateNumber(2);
    component.updateNumber(5);
    component.plus();
    expect(component.result).toBe(25);
    component.updateNumber(2);
    component.updateNumber(5);
    component.minus();
    expect(component.result).toBe(50);
    component.updateNumber(2);
    component.updateNumber(5);
    component.multiply();
    expect(component.result).toBe(25);
    component.updateNumber(2);
    component.updateNumber(5);
    component.divide();
    expect(component.result).toBe(625);
    component.updateNumber(2);
    component.updateNumber(5);
    component.equal();
    expect(component.result).toBe(25);
  });
});
