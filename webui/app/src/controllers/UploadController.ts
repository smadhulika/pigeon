import { Controller, Res, Param, Post, OnUndefined, Delete, UploadedFile} from 'routing-controllers';
import {Upload} from '../models/Upload';

@Controller('/upload')
export class UploadController {

    @Post('/')
    @OnUndefined(404)
    async CreateFile(@UploadedFile('file', { options: Upload.FILE_UPLOAD_OPTIONS }) file: any, @Res() response: any) {
        try {
            response.send(`Successfully Added File. File can be viewed at http://localhost:8080/api/v1/retrieve/${file.originalname}`)
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }

    @Delete('/:data')
    @OnUndefined(404)
    async RemoveFile(@Param("data") data: string) {
        try {
            let removefile = await Upload.DeleteFile(data);
            return removefile;
        } catch(e) {
            console.log(e);
            throw new Error(e);
        }
    }

}