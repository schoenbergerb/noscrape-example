'use server';

import {useNoscrape} from "@/components/noscrape.context";

const Obfuscated = ({ label }: { label: string }) => {
    const noscrape = useNoscrape();

    return (
        <span style={{ fontFamily: 'noscrape-obfuscated' }}>{noscrape.obfuscate(label)}</span>
    )
}

export default Obfuscated;