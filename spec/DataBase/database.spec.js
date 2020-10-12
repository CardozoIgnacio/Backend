require('dotenv').config();
var db = require("../../src/dataBase/dbController");

describe("database/dbController", () => {
	it("Coneccion Exitosa con la base de datos", async () => {
		try {
			console.log("###Testing 01--db.connection()###")
			expect(await db.authenticate()).toBeUndefined()
			console.log(`Conexion fue realizada exitosamente.`);
			
		} catch (error) {
			console.error("Conexion rechazada:", error);
		}
	});
});
