class EventEmitter {
  constructor() {
    this.events = {};
  }
}
EventEmitter.prototype.subscribe = function(event, cb) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  if (!cb) {
    return this;
  }
  this.events[event].push(cb);
};
EventEmitter.prototype.emit = function(event, data) {
  if (!this.events[event]) {
    return;
  }
  this.events[event].forEach(fn => {
    return fn(data);
  });
};
EventEmitter.prototype.unsubscribe = function(event, fnNotNeeded) {
  if (!this.events[event]) {
    throw new Error("no such event");
  }
  return (this.events = this.events[event].filter(fn => fn !== fnNotNeeded));
  /**
   * better implementation using splice
   * let i = this.events[eName].indexOf(cb);
        this.events[eName].splice(i, 1);
        if (!this.events[eName].length) delete this.events[eName];
   */
};

const eventTracker = new EventEmitter();

export class InputCell {
  constructor(value) {
    // skipped base case checks
    this.value = value;
  }
  setValue(updatedValue) {
    // skipped base case checks
    this.value = updatedValue;
    eventTracker.emit("changed_value");
  }
}
/**
 * new ComputeCell([inputCell], fn);
 * new ComputeCell class takes in an array of inputcells and a callback function
 * computeCell takes in the callback function to calculate the new value for the inputcells
 */
export class ComputeCell {
  constructor(inputCells, computeMethod) {
    // skipped base case checks
    /**
     * private
     */
    this.attachedCells = inputCells;
    this.compute = computeMethod;
    this.addedCallbacks = [];
    /**
     * public
     */
    this.value = this.calculateValue();
    // need to bind `this` to current instance
    eventTracker.subscribe("changed_value", this.handleChange.bind(this));
  }
  handleChange() {
    const newValue = this.calculateValue();
    if (this.value !== newValue) {
      this.value = newValue;
      this.triggerCallbacks();
    }
  }
  calculateValue() {
    return this.compute(this.attachedCells);
  }
  triggerCallbacks() {
    const computeCell = this;
    this.addedCallbacks.forEach(cb => {
      cb.invoke(computeCell);
    });
  }
  addCallback(callback) {
    this.addedCallbacks.push(callback);
  }
  removeCallback(callback) {
    this.addedCallbacks = this.addedCallbacks.filter((cb) => cb !== callback);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.callbackFn = fn;
    this.values = [];
  }
  invoke(cell) {
    this.values.push(this.callbackFn(cell));
  }
}
