Array.prototype.toUpperCase = function() {
    return this.map(mundo => mundo.toUpperCase())
  };
  let nombres = ['kate', 'ashly', 'xiomara', 'valentina', 'luneyi', 'astrid', 'katerine'].toUpperCase(); 
  for (let nombre of nombres) {
    console.log(nombre);
  }

