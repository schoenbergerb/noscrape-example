import { Noscrape } from "@noscrape/noscrape";
import serverContext from "server-only-context";

export const [useNoscrape] = serverContext(new Noscrape("public/example.ttf"));
