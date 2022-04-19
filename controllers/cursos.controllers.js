const fs = require("fs");
const listaDeCursos = require("../models/cursos.json");

const CursoController = {
	cadastrarCurso(req, res) {
		const { titulo, descricao, professor } = req.body;
		if (!titulo || !descricao || !professor) {
			return res.status(400).json({ error: "Voce precisar passar TODOS os atributos" });
		}
		listaDeCursos.push({ titulo, descricao, professor });
		fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

		res.status(201).json({ message: "Cadastro eftuado com sucesso" });
	}
};

module.exports = CursoController;
