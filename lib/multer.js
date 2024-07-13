const multer = require("multer")
const { extname, join } = require("path")
const fs = require("fs")
const {config} = require("dotenv")
config()


const host = process.env.SERVER_HOST

class Multer {
    static fileName = ""
    static UploadFile(req, res, next) {
        const storage = multer.memoryStorage();
        const upload = multer({ storage }).single('image');

        upload(req, res, (err) => {
            if (err) {
                return res.status(500).json({ msg: "Error al subir el archivo" });
            }


            const reqFile = req.file;


            const mimeType = reqFile.mimetype;
            const extension = extname(reqFile.originalname);

            if (!mimeType.includes("image")) {
                return res.status(400).json({ msg: "El archivo no es una imagen" });
            }
            else if (mimeType.includes("image")) {
                const uniqueName = `${Date.now().toString(36)}${extension}`;
                Multer.fileName = `${host}/lesson7/resources/assets/imgs/instructors/${uniqueName}`;

                const buffer = Buffer.from(reqFile.buffer);
                const filePath = join(__dirname, '../public/assets/imgs/instructors', uniqueName);

                fs.writeFileSync(filePath, buffer);
                return next()
            }

            return next();
        });
    }
}

module.exports = Multer;