export class MFile {
	originalname: string;
	buffer: Buffer;

	constructor(file: Express.Multer.File | MFile) {
		this.originalname = file.originalname;
		this.buffer = file.buffer;
	}
}