"server-only";

import { useNoscrape } from "@/components/noscrape/noscrape.context";

const NoscrapeFont = async () => {
  const noscrape = useNoscrape();

  return (
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html: `                          
          @font-face {        
            font-family: 'noscrape-obfuscated';        
            src: url('data:font/truetype;charset=utf-8;base64,${noscrape
              .getFont()
              .toString("base64")}');    
          }
        
          .noscrape-obfuscated {
            font-family: noscrape-obfuscated;
          }
        `,
      }}
    ></style>
  );
};

export default NoscrapeFont;
