import { IRequestUser } from "../../models/user.model";
declare global {
  namespace Express {
      interface Request {
      user?: IRequestUser;
      files?: {
        [fieldname: string]: Express.Multer.File[];
      };
      file?: Express.Multer.File;
    }
  }
}
