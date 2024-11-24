export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    if (!this.buffer) {
      throw new Error("Buffer is not loaded.");
    }
    return new TextDecoder("utf-16").decode(this.buffer);
  }
}

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(input.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

const converter = new ArrayBufferConverter();
const buffer = getBuffer();
converter.load(buffer);
const jsonString = converter.toString();
console.log(jsonString); // Вывод: {"data":{"user":{"id":1,"name":"Hitman","level":10}}}
