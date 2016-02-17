var b = Buffer(10000);
var s = 'hello there';

b.write(s);
console.log(b.length); //buffer returns the complete size not the size of ther data
console.log(Buffer.byteLength(s));
console.log(s.length);
