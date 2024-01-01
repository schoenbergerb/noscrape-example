'use server';

import {useNoscrape} from "@/app/layout";

const Obfuscated = ({ label }: { label: string }) => {
    const noscrape = useNoscrape();

    return (
        <span style={{ fontFamily: 'noscrape-obfuscated' }}>{noscrape.obfuscate(label)}</span>
    )
}

export default Obfuscated;