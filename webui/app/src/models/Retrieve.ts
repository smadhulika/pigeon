const _ = require('lodash'),
      fs = require('fs'),
      helper = require('../../config/helper').root,
      path = require('path'),
      FileHound = require('filehound')

export class Retrieve {
    //retrieve file by filename.
    static async GetOne(data: string): Promise<Object> {
        try {
            const filehound: Array<string> = FileHound.create()
            .path(helper('uploads/'))
            .match(`${data}*`)
            .findSync()
            const result: string = path.basename(filehound.join());
            if (result === '') {
                return "File Not Found"
            }
            let check: any = await fs.readFileSync(helper(`uploads/${result}`));
            return check;
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
}