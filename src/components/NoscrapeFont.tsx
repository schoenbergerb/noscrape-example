'server-only';

import {useNoscrape} from "@/app/layout";

const NoscrapeFont = () => {
    const noscrape = useNoscrape();

    const fontString = noscrape.getFont();

    return (
        <style type="text/css"  dangerouslySetInnerHTML={{
            __html: `                          
                @font-face {        
                    font-family: 'noscrape-obfuscated';        
                    src: url('data:font/truetype;charset=utf-8;base64,${fontString.toString('base64')}');    
                }
            `
        }}>
        </style>
    )

}


export default NoscrapeFont;