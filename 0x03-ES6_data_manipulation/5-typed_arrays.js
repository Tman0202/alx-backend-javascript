export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const arraybuff = new ArrayBuffer(length);
  const int8View = new Int8Array(arraybuff);
  int8View[position] = value;

  return new DataView(arraybuff);
}
