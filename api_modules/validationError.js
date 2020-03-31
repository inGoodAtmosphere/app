class ValidationError {
  constructor(msg, field) {
    this.msg = msg;
    this.field = field;
  }
}

module.exports = ValidationError;
