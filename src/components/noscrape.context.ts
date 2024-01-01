import {EncryptionCharacterRange, Noscrape} from "@noscrape/noscrape";
import serverContext from "server-only-context";

export const [useNoscrape, setNoscrape] = serverContext(new Noscrape('public/example.ttf', {
    characterRange: EncryptionCharacterRange.HIRAGANA
}))