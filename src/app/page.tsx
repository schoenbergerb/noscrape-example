import Test from "@/test";
import Obfuscated from "@/components/Obfuscated";

export default function Home() {
  return (
    <main className="p-12">
      <Test />
      <Obfuscated label={"xyz1234"} />
      <p></p>
      <Obfuscated label={"fasöohuäeo4ohadyxvjcx9iypvilw,Re,fäsadCV:BX-X;VBCXVB;CXafds234525465647865798?/p9606ä"} />
    </main>
  )
}

