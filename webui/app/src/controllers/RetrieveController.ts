import { Controller, Get, Param, OnUndefined, Res} from 'routing-controllers';
import {Retrieve} from '../models/Retrieve';

@Controller('/retrieve')

export class RetrieveController {

    @Get('/:data')
    @OnUndefined(404)
    async getOne(@Param("data") data: string, @Res() response: any){
        try {
            response.set("Content-Disposition", "inline;");
            let getone = await Retrieve.GetOne(data);
            return getone;
        } catch(e) {
            console.log(e);
            throw new Error(e);
        }
    }
}