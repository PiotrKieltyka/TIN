function createBuffer() {
	this.strBuffer = '';
    this.updBuffer = function(text) {
  	text = text ? text : '';
  	this.strBuffer = this.strBuffer + '' + text;
    return this.strBuffer;
  };
  return this.updBuffer;
}