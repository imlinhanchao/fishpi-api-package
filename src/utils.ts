import axios from 'axios';
import * as https from 'https';
import { 
    Metal
} from './typing';

const domain = 'fishpi.cn/'

async function request(opt:any) {
    let {
        url,
        method = 'get',
        headers = {},
        data
    } = opt;

    if (!isBrowse) {
        headers['User-Agent'] = `Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36`;
        headers['Referer'] = `https://${domain}`;
    }

    let options = {
        method, headers,
        httpsAgent: new https.Agent({
            keepAlive: true,
            rejectUnauthorized: false,
        }),
        data
    };

    let rsp:any;
    try {
        rsp = await axios(`https://${domain}${url}`, options);
        return rsp;
    } catch (err) {
        if ((err as any).response.status === 401) { return (err as any).response; }
        throw(err);
    }
}

function toMetal(sysMetal:string):Metal {
    try {
        let metal: { list: Array<any> } = JSON.parse(sysMetal);
        metal.list.forEach((m, i, list) => {
            let attr = m.attr.split('&')
            m.attr = { };
            attr.forEach((a:string) => m.attr[a.split('=')[0]] = a.split('=')[1] )
            list[i] = m;
        })
        return metal;
    } catch (error) {
        return {
            list: []
        }        
    }
}

const isBrowse = typeof window !== 'undefined';

export {
    request, domain, toMetal, isBrowse
}