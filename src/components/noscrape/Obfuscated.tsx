"use server";

import { useNoscrape } from "@/components/noscrape/noscrape.context";

type Props = {
  label: string,
  className?: string
}

const Obfuscated = ({ label, className }: Props) => {
  const noscrape = useNoscrape();

  return <span className={`noscrape-obfuscated ${className}`}>{noscrape.obfuscate(label)}</span>;
};

export default Obfuscated;
