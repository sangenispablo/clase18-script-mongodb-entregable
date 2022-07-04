// Nos conectamos a la BD en local (Consigna)
db = connect("mongodb://localhost:27017/ecommerce");

// // Creamos las dos colecciones (Consigna)
// db.createCollection("mensajes");
// db.createCollection("productos");

// // Agrego de a uno en mensajes (Punto 1 y 2)
// db.mensajes.insertOne({ usuario: "pablo", mensaje: "Hola a todos", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "jorge", mensaje: "Hola Pablo", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "pablo", mensaje: "como andan ?", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "jorge", mensaje: "Hola Pablo y Jorge", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "adrian", mensaje: "Hola chicos !!!", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "pablo", mensaje: "como cotiza el dolar hoy ?", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "carlos", mensaje: "ni idea, todavia no vi nada", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "carlos", mensaje: "entro y te aviso", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "carlos", mensaje: "pero se me hace que subió", fecha: new Date() });
// db.mensajes.insertOne({ usuario: "pablo", mensaje: "gracias Carlos", fecha: new Date() });

// // Agrego de a varios en productos (Punto 1 y 2)
// db.productos.insertMany([
//   {
//     title: "Producto 1",
//     price: 120,
//     thumbnail: "https://picsum.photos/id/1/200/100",
//   },
//   {
//     title: "Producto 2",
//     price: 580,
//     thumbnail: "https://picsum.photos/id/2/200/100",
//   },
//   {
//     title: "Producto 3",
//     price: 900,
//     thumbnail: "https://picsum.photos/id/3/200/100",
//   },
//   {
//     title: "Producto 4",
//     price: 1280,
//     thumbnail: "https://picsum.photos/id/5/200/100",
//   },
//   {
//     title: "Producto 5",
//     price: 1700,
//     thumbnail: "https://picsum.photos/id/5/200/100",
//   },
//   {
//     title: "Producto 6",
//     price: 2300,
//     thumbnail: "https://picsum.photos/id/6/200/100",
//   },
//   {
//     title: "Producto 7",
//     price: 2860,
//     thumbnail: "https://picsum.photos/id/7/200/100",
//   },
//   {
//     title: "Producto 8",
//     price: 3350,
//     thumbnail: "https://picsum.photos/id/8/200/100",
//   },
//   {
//     title: "Producto 9",
//     price: 4320,
//     thumbnail: "https://picsum.photos/id/9/200/100",
//   },
//   {
//     title: "Producto 10",
//     price: 4990,
//     thumbnail: "https://picsum.photos/id/10/200/100",
//   },
// ]);

// // uso printjson para mostrar por consola todos los docs de mensajes y productos (Punto 3)
// printjson(db.mensajes.find());
// printjson(db.productos.find());

// // muestro la cantidad de docs que tiene cada coleccion (Punto 4)
// printjson("Documentos en la coleccion mensajes:", db.mensajes.countDocuments());
// printjson("Documentos en la coleccion productos:", db.productos.countDocuments());

// // Agregar un nuevo documento a productos (Punto 5a)
// db.productos.insertOne({title: "Nuevo Producto 11", price: 5000, thumbnail: "https://picsum.photos/id/11/200/100"})

// // Consultas varias (Punto 5bi)
// printjson(db.productos.find({ price: { $lt: 1000 } }));

// // Consultas varias (Punto 5bii)
// printjson(
//   db.productos.find({
//     $and: [{ price: { $gt: 1000 } }, { price: { $lt: 3000 } }],
//   })
// );

// // Consultas varias (Punto 5biii)
// printjson(db.productos.find({ price: { $gt: 3000 } }));

// // Consultas varias (Punto 5biv) 3er producto mas barato
// const productos = db
//   .getCollection("productos")
//   .find({})
//   .sort({ price: 1 })
//   .toArray();
// printjson(productos[2].title);

// // Query varias (Punto 5c) update agregando un propiedad "stock" con el valor 100
// db.productos.updateMany({}, { $set: { stock: 100 } });

// // Query varias (Punto 5d)
// printjson(
//   db.productos.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })
// );

// // Query varias (Punto 5e)
// printjson(db.productos.deleteMany({ price: { $lt: 1000 } }));

// // (Punto 6) Crear un usuario en esta base de datos
// db.createUser({
//   user: "pepe",
//   pwd: "asd456",
//   roles: [{ role: "read", db: "ecommerce" }],
// });

// ahora lo autentico en la misma instancia de conexion
// db = connect("mongodb://localhost:27017/ecommerce", "pepe", "asd456");

// // intento hacer un update
// printjson(db.productos.updateMany({}, { $set: { stock: 1 } }));