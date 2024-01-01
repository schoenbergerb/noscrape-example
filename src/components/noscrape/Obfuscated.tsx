"use server";

import { useNoscrape } from "@/components/noscrape/noscrape.context";

const Obfuscated = ({ label }: { label: string }) => {
  const noscrape = useNoscrape();

  return (
    <span className="noscrape-obfuscated">{noscrape.obfuscate(label)}</span>
  );
};

export default Obfuscated;
