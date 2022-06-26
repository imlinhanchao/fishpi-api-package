import axios from 'axios';
import * as https from 'https';
import { 
    Metal,
    MetalList
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

function analyzeMetalAttr(m:any): Metal {
    if (!m) return m;
    if (typeof m.attr != 'string') return m;
    let attr = m.attr.split('&');
    m.attr = { };
    attr.forEach((a:string) => m.attr[a.split('=')[0]] = a.split('=')[1])
    m.url = `https://fishpi.cn/gen?txt=${m.description}&${m.attr.url}`;
    m.icon = `https://fishpi.cn/gen?txt=&${m.attr.url}`;
    return m;
}

function toMetal(sysMetal:string):MetalList {
    try {
        let metal: { list: Array<any> } = JSON.parse(sysMetal);
        metal.list.forEach((m, i, list) => {
            list[i] = analyzeMetalAttr(m);
        })
        return metal.list;
    } catch (error) {
        return []
    }
}

const isBrowse = typeof window !== 'undefined';

export {
    request, domain, toMetal, analyzeMetalAttr, isBrowse
}