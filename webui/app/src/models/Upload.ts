const _ = require('lodash'),
      helper = require('../../config/helper').root,
      findRemoveSync = require('find-remove');
import * as multer from 'multer'; 

export class Upload {
    // add file to the system.
    static FILE_UPLOAD_OPTIONS = {
        storage: multer.diskStorage({
            destination: (req: any, file: any, cb: any) => {
                cb(null, helper('/uploads'));
            },
            filename: (req: any, file: any, cb: any) => {
                cb(null, `${file.originalname}`);
            }
        }),
        fileFilter: (req: any, file: any, cb: any) => {
            cb(null, true);
        },
        limits: {
            fieldNameSize: 255,
            fileSize: 1024 * 1024 * 2
        }
    }

    // delete file from the system.
    static async DeleteFile(data: string): Promise<string> {
        try {
            findRemoveSync(helper('uploads/'), {prefix: `${data}`}, (err) => {
                if (err) throw err
            });
            return "Successfully Deleted File";
        } catch(e) {
            console.log(e);
            throw new Error(e);
        }
    }
}