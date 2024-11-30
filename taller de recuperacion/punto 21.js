let keys = ['nombre', 'años', 'ciudad'];
let  values = ['Daniel', 20, 'Pasto'];
let obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}

console.log(obj);
