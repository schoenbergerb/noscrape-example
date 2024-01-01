# Noscrape Example

look at the [layout.tsx](src/app/layout.tsx)

There, we load the [&lt;NosrapeFontFace /&gt;](src/components/noscrape/NoscrapeFontFace.tsx) which initializes the
font loading logic ``@font-face`` and the noscrape-classname which is used in the 
[&lt;Obfuscated /&gt;](src/components/noscrape/Obfuscated.tsx) Tag. As because all children are rendered before the 
layout, we can use noscrape everywhere with the same instance provided by the [context](src/components/noscrape/noscrape.context.ts). 
