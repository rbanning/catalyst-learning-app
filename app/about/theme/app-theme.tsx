
import { AySection } from "@/ui/base-ui/server";
import { ButtonBase, Button, ButtonSolid, ButtonOutline } from "@/ui/base-ui/client";

export function AppTheme() {
return (
<div>
<details className="view-area">
<summary className="cursor-pointer font-bold text-xl">Colors</summary>
<div className="my-4 pl-4 border-l-8 border-slate-300">

<details className="my-6">
<summary className="cursor-pointer font-bold text-lg text-hallpass-neutral">Neutral</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-neutral-light">
<span className="font-thin">SMthinLight</span>
<span className="font-light">SMlightLight</span>
<span className="font-normal">SMnormalLight</span>
<span className="font-semibold">SMsemiboldLight</span>
<span className="font-bold">SMboldLight</span>
<span className="font-black">SMblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-neutral-light">
<span className="font-thin">BASEthinLight</span>
<span className="font-light">BASElightLight</span>
<span className="font-normal">BASEnormalLight</span>
<span className="font-semibold">BASEsemiboldLight</span>
<span className="font-bold">BASEboldLight</span>
<span className="font-black">BASEblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-neutral-light">
<span className="font-thin">LGthinLight</span>
<span className="font-light">LGlightLight</span>
<span className="font-normal">LGnormalLight</span>
<span className="font-semibold">LGsemiboldLight</span>
<span className="font-bold">LGboldLight</span>
<span className="font-black">LGblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-neutral-light">
<span className="font-thin">XLthinLight</span>
<span className="font-light">XLlightLight</span>
<span className="font-normal">XLnormalLight</span>
<span className="font-semibold">XLsemiboldLight</span>
<span className="font-bold">XLboldLight</span>
<span className="font-black">XLblackLight</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-neutral">
<span className="font-thin">SMthinDefault</span>
<span className="font-light">SMlightDefault</span>
<span className="font-normal">SMnormalDefault</span>
<span className="font-semibold">SMsemiboldDefault</span>
<span className="font-bold">SMboldDefault</span>
<span className="font-black">SMblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-neutral">
<span className="font-thin">BASEthinDefault</span>
<span className="font-light">BASElightDefault</span>
<span className="font-normal">BASEnormalDefault</span>
<span className="font-semibold">BASEsemiboldDefault</span>
<span className="font-bold">BASEboldDefault</span>
<span className="font-black">BASEblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-neutral">
<span className="font-thin">LGthinDefault</span>
<span className="font-light">LGlightDefault</span>
<span className="font-normal">LGnormalDefault</span>
<span className="font-semibold">LGsemiboldDefault</span>
<span className="font-bold">LGboldDefault</span>
<span className="font-black">LGblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-neutral">
<span className="font-thin">XLthinDefault</span>
<span className="font-light">XLlightDefault</span>
<span className="font-normal">XLnormalDefault</span>
<span className="font-semibold">XLsemiboldDefault</span>
<span className="font-bold">XLboldDefault</span>
<span className="font-black">XLblackDefault</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-neutral-dark">
<span className="font-thin">SMthinDark</span>
<span className="font-light">SMlightDark</span>
<span className="font-normal">SMnormalDark</span>
<span className="font-semibold">SMsemiboldDark</span>
<span className="font-bold">SMboldDark</span>
<span className="font-black">SMblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-neutral-dark">
<span className="font-thin">BASEthinDark</span>
<span className="font-light">BASElightDark</span>
<span className="font-normal">BASEnormalDark</span>
<span className="font-semibold">BASEsemiboldDark</span>
<span className="font-bold">BASEboldDark</span>
<span className="font-black">BASEblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-neutral-dark">
<span className="font-thin">LGthinDark</span>
<span className="font-light">LGlightDark</span>
<span className="font-normal">LGnormalDark</span>
<span className="font-semibold">LGsemiboldDark</span>
<span className="font-bold">LGboldDark</span>
<span className="font-black">LGblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-neutral-dark">
<span className="font-thin">XLthinDark</span>
<span className="font-light">XLlightDark</span>
<span className="font-normal">XLnormalDark</span>
<span className="font-semibold">XLsemiboldDark</span>
<span className="font-bold">XLboldDark</span>
<span className="font-black">XLblackDark</span>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-surface-light">
<div className="text-lg font-bold text-black">Light Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-neutral-light">smNeutral-light</span>
<span className="text-base text-hallpass-neutral-light">baseNeutral-light</span>
<span className="text-lg text-hallpass-neutral-light">lgNeutral-light</span>
<span className="text-xl text-hallpass-neutral-light">xlNeutral-light</span>
<span className="text-sm text-hallpass-neutral">smNeutral</span>
<span className="text-base text-hallpass-neutral">baseNeutral</span>
<span className="text-lg text-hallpass-neutral">lgNeutral</span>
<span className="text-xl text-hallpass-neutral">xlNeutral</span>
<span className="text-sm text-hallpass-neutral-dark">smNeutral-dark</span>
<span className="text-base text-hallpass-neutral-dark">baseNeutral-dark</span>
<span className="text-lg text-hallpass-neutral-dark">lgNeutral-dark</span>
<span className="text-xl text-hallpass-neutral-dark">xlNeutral-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface">
<div className="text-lg font-bold text-black">Default Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-neutral-light">smNeutral-light</span>
<span className="text-base text-hallpass-neutral-light">baseNeutral-light</span>
<span className="text-lg text-hallpass-neutral-light">lgNeutral-light</span>
<span className="text-xl text-hallpass-neutral-light">xlNeutral-light</span>
<span className="text-sm text-hallpass-neutral">smNeutral</span>
<span className="text-base text-hallpass-neutral">baseNeutral</span>
<span className="text-lg text-hallpass-neutral">lgNeutral</span>
<span className="text-xl text-hallpass-neutral">xlNeutral</span>
<span className="text-sm text-hallpass-neutral-dark">smNeutral-dark</span>
<span className="text-base text-hallpass-neutral-dark">baseNeutral-dark</span>
<span className="text-lg text-hallpass-neutral-dark">lgNeutral-dark</span>
<span className="text-xl text-hallpass-neutral-dark">xlNeutral-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface-dark">
<div className="text-lg font-bold text-black">Dark Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-neutral-light">smNeutral-light</span>
<span className="text-base text-hallpass-neutral-light">baseNeutral-light</span>
<span className="text-lg text-hallpass-neutral-light">lgNeutral-light</span>
<span className="text-xl text-hallpass-neutral-light">xlNeutral-light</span>
<span className="text-sm text-hallpass-neutral">smNeutral</span>
<span className="text-base text-hallpass-neutral">baseNeutral</span>
<span className="text-lg text-hallpass-neutral">lgNeutral</span>
<span className="text-xl text-hallpass-neutral">xlNeutral</span>
<span className="text-sm text-hallpass-neutral-dark">smNeutral-dark</span>
<span className="text-base text-hallpass-neutral-dark">baseNeutral-dark</span>
<span className="text-lg text-hallpass-neutral-dark">lgNeutral-dark</span>
<span className="text-xl text-hallpass-neutral-dark">xlNeutral-dark</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-neutral-light">
<div className="text-lg font-bold text-white">Light Neutral</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-neutral-light">smNeutral</span>
<span className="text-base text-hallpass-on-neutral-light">baseNeutral</span>
<span className="text-lg text-hallpass-on-neutral-light">lgNeutral</span>
<span className="text-xl text-hallpass-on-neutral-light">xlNeutral</span>
</div>
</div>
<div className="p-4 bg-hallpass-neutral">
<div className="text-lg font-bold text-white">Default Neutral</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-neutral">smNeutral</span>
<span className="text-base text-hallpass-on-neutral">baseNeutral</span>
<span className="text-lg text-hallpass-on-neutral">lgNeutral</span>
<span className="text-xl text-hallpass-on-neutral">xlNeutral</span>
</div>
</div>
<div className="p-4 bg-hallpass-neutral-dark">
<div className="text-lg font-bold text-white">Dark Neutral</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-neutral-dark">smNeutral</span>
<span className="text-base text-hallpass-on-neutral-dark">baseNeutral</span>
<span className="text-lg text-hallpass-on-neutral-dark">lgNeutral</span>
<span className="text-xl text-hallpass-on-neutral-dark">xlNeutral</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-neutral-light/10">
<div className="text-lg font-bold text-black">Light Neutral (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-neutral/10">
<div className="text-lg font-bold text-black">Default Neutral (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-neutral-dark/10">
<div className="text-lg font-bold text-black">Dark Neutral (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg text-hallpass-primary">Primary</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-primary-light">
<span className="font-thin">SMthinLight</span>
<span className="font-light">SMlightLight</span>
<span className="font-normal">SMnormalLight</span>
<span className="font-semibold">SMsemiboldLight</span>
<span className="font-bold">SMboldLight</span>
<span className="font-black">SMblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-primary-light">
<span className="font-thin">BASEthinLight</span>
<span className="font-light">BASElightLight</span>
<span className="font-normal">BASEnormalLight</span>
<span className="font-semibold">BASEsemiboldLight</span>
<span className="font-bold">BASEboldLight</span>
<span className="font-black">BASEblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-primary-light">
<span className="font-thin">LGthinLight</span>
<span className="font-light">LGlightLight</span>
<span className="font-normal">LGnormalLight</span>
<span className="font-semibold">LGsemiboldLight</span>
<span className="font-bold">LGboldLight</span>
<span className="font-black">LGblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-primary-light">
<span className="font-thin">XLthinLight</span>
<span className="font-light">XLlightLight</span>
<span className="font-normal">XLnormalLight</span>
<span className="font-semibold">XLsemiboldLight</span>
<span className="font-bold">XLboldLight</span>
<span className="font-black">XLblackLight</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-primary">
<span className="font-thin">SMthinDefault</span>
<span className="font-light">SMlightDefault</span>
<span className="font-normal">SMnormalDefault</span>
<span className="font-semibold">SMsemiboldDefault</span>
<span className="font-bold">SMboldDefault</span>
<span className="font-black">SMblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-primary">
<span className="font-thin">BASEthinDefault</span>
<span className="font-light">BASElightDefault</span>
<span className="font-normal">BASEnormalDefault</span>
<span className="font-semibold">BASEsemiboldDefault</span>
<span className="font-bold">BASEboldDefault</span>
<span className="font-black">BASEblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-primary">
<span className="font-thin">LGthinDefault</span>
<span className="font-light">LGlightDefault</span>
<span className="font-normal">LGnormalDefault</span>
<span className="font-semibold">LGsemiboldDefault</span>
<span className="font-bold">LGboldDefault</span>
<span className="font-black">LGblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-primary">
<span className="font-thin">XLthinDefault</span>
<span className="font-light">XLlightDefault</span>
<span className="font-normal">XLnormalDefault</span>
<span className="font-semibold">XLsemiboldDefault</span>
<span className="font-bold">XLboldDefault</span>
<span className="font-black">XLblackDefault</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-primary-dark">
<span className="font-thin">SMthinDark</span>
<span className="font-light">SMlightDark</span>
<span className="font-normal">SMnormalDark</span>
<span className="font-semibold">SMsemiboldDark</span>
<span className="font-bold">SMboldDark</span>
<span className="font-black">SMblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-primary-dark">
<span className="font-thin">BASEthinDark</span>
<span className="font-light">BASElightDark</span>
<span className="font-normal">BASEnormalDark</span>
<span className="font-semibold">BASEsemiboldDark</span>
<span className="font-bold">BASEboldDark</span>
<span className="font-black">BASEblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-primary-dark">
<span className="font-thin">LGthinDark</span>
<span className="font-light">LGlightDark</span>
<span className="font-normal">LGnormalDark</span>
<span className="font-semibold">LGsemiboldDark</span>
<span className="font-bold">LGboldDark</span>
<span className="font-black">LGblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-primary-dark">
<span className="font-thin">XLthinDark</span>
<span className="font-light">XLlightDark</span>
<span className="font-normal">XLnormalDark</span>
<span className="font-semibold">XLsemiboldDark</span>
<span className="font-bold">XLboldDark</span>
<span className="font-black">XLblackDark</span>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-surface-light">
<div className="text-lg font-bold text-black">Light Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-primary-light">smPrimary-light</span>
<span className="text-base text-hallpass-primary-light">basePrimary-light</span>
<span className="text-lg text-hallpass-primary-light">lgPrimary-light</span>
<span className="text-xl text-hallpass-primary-light">xlPrimary-light</span>
<span className="text-sm text-hallpass-primary">smPrimary</span>
<span className="text-base text-hallpass-primary">basePrimary</span>
<span className="text-lg text-hallpass-primary">lgPrimary</span>
<span className="text-xl text-hallpass-primary">xlPrimary</span>
<span className="text-sm text-hallpass-primary-dark">smPrimary-dark</span>
<span className="text-base text-hallpass-primary-dark">basePrimary-dark</span>
<span className="text-lg text-hallpass-primary-dark">lgPrimary-dark</span>
<span className="text-xl text-hallpass-primary-dark">xlPrimary-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface">
<div className="text-lg font-bold text-black">Default Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-primary-light">smPrimary-light</span>
<span className="text-base text-hallpass-primary-light">basePrimary-light</span>
<span className="text-lg text-hallpass-primary-light">lgPrimary-light</span>
<span className="text-xl text-hallpass-primary-light">xlPrimary-light</span>
<span className="text-sm text-hallpass-primary">smPrimary</span>
<span className="text-base text-hallpass-primary">basePrimary</span>
<span className="text-lg text-hallpass-primary">lgPrimary</span>
<span className="text-xl text-hallpass-primary">xlPrimary</span>
<span className="text-sm text-hallpass-primary-dark">smPrimary-dark</span>
<span className="text-base text-hallpass-primary-dark">basePrimary-dark</span>
<span className="text-lg text-hallpass-primary-dark">lgPrimary-dark</span>
<span className="text-xl text-hallpass-primary-dark">xlPrimary-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface-dark">
<div className="text-lg font-bold text-black">Dark Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-primary-light">smPrimary-light</span>
<span className="text-base text-hallpass-primary-light">basePrimary-light</span>
<span className="text-lg text-hallpass-primary-light">lgPrimary-light</span>
<span className="text-xl text-hallpass-primary-light">xlPrimary-light</span>
<span className="text-sm text-hallpass-primary">smPrimary</span>
<span className="text-base text-hallpass-primary">basePrimary</span>
<span className="text-lg text-hallpass-primary">lgPrimary</span>
<span className="text-xl text-hallpass-primary">xlPrimary</span>
<span className="text-sm text-hallpass-primary-dark">smPrimary-dark</span>
<span className="text-base text-hallpass-primary-dark">basePrimary-dark</span>
<span className="text-lg text-hallpass-primary-dark">lgPrimary-dark</span>
<span className="text-xl text-hallpass-primary-dark">xlPrimary-dark</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-primary-light">
<div className="text-lg font-bold text-white">Light Primary</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-primary-light">smPrimary</span>
<span className="text-base text-hallpass-on-primary-light">basePrimary</span>
<span className="text-lg text-hallpass-on-primary-light">lgPrimary</span>
<span className="text-xl text-hallpass-on-primary-light">xlPrimary</span>
</div>
</div>
<div className="p-4 bg-hallpass-primary">
<div className="text-lg font-bold text-white">Default Primary</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-primary">smPrimary</span>
<span className="text-base text-hallpass-on-primary">basePrimary</span>
<span className="text-lg text-hallpass-on-primary">lgPrimary</span>
<span className="text-xl text-hallpass-on-primary">xlPrimary</span>
</div>
</div>
<div className="p-4 bg-hallpass-primary-dark">
<div className="text-lg font-bold text-white">Dark Primary</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-primary-dark">smPrimary</span>
<span className="text-base text-hallpass-on-primary-dark">basePrimary</span>
<span className="text-lg text-hallpass-on-primary-dark">lgPrimary</span>
<span className="text-xl text-hallpass-on-primary-dark">xlPrimary</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-primary-light/10">
<div className="text-lg font-bold text-black">Light Primary (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-primary/10">
<div className="text-lg font-bold text-black">Default Primary (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-primary-dark/10">
<div className="text-lg font-bold text-black">Dark Primary (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg text-hallpass-secondary">Secondary</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-secondary-light">
<span className="font-thin">SMthinLight</span>
<span className="font-light">SMlightLight</span>
<span className="font-normal">SMnormalLight</span>
<span className="font-semibold">SMsemiboldLight</span>
<span className="font-bold">SMboldLight</span>
<span className="font-black">SMblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-secondary-light">
<span className="font-thin">BASEthinLight</span>
<span className="font-light">BASElightLight</span>
<span className="font-normal">BASEnormalLight</span>
<span className="font-semibold">BASEsemiboldLight</span>
<span className="font-bold">BASEboldLight</span>
<span className="font-black">BASEblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-secondary-light">
<span className="font-thin">LGthinLight</span>
<span className="font-light">LGlightLight</span>
<span className="font-normal">LGnormalLight</span>
<span className="font-semibold">LGsemiboldLight</span>
<span className="font-bold">LGboldLight</span>
<span className="font-black">LGblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-secondary-light">
<span className="font-thin">XLthinLight</span>
<span className="font-light">XLlightLight</span>
<span className="font-normal">XLnormalLight</span>
<span className="font-semibold">XLsemiboldLight</span>
<span className="font-bold">XLboldLight</span>
<span className="font-black">XLblackLight</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-secondary">
<span className="font-thin">SMthinDefault</span>
<span className="font-light">SMlightDefault</span>
<span className="font-normal">SMnormalDefault</span>
<span className="font-semibold">SMsemiboldDefault</span>
<span className="font-bold">SMboldDefault</span>
<span className="font-black">SMblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-secondary">
<span className="font-thin">BASEthinDefault</span>
<span className="font-light">BASElightDefault</span>
<span className="font-normal">BASEnormalDefault</span>
<span className="font-semibold">BASEsemiboldDefault</span>
<span className="font-bold">BASEboldDefault</span>
<span className="font-black">BASEblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-secondary">
<span className="font-thin">LGthinDefault</span>
<span className="font-light">LGlightDefault</span>
<span className="font-normal">LGnormalDefault</span>
<span className="font-semibold">LGsemiboldDefault</span>
<span className="font-bold">LGboldDefault</span>
<span className="font-black">LGblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-secondary">
<span className="font-thin">XLthinDefault</span>
<span className="font-light">XLlightDefault</span>
<span className="font-normal">XLnormalDefault</span>
<span className="font-semibold">XLsemiboldDefault</span>
<span className="font-bold">XLboldDefault</span>
<span className="font-black">XLblackDefault</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-secondary-dark">
<span className="font-thin">SMthinDark</span>
<span className="font-light">SMlightDark</span>
<span className="font-normal">SMnormalDark</span>
<span className="font-semibold">SMsemiboldDark</span>
<span className="font-bold">SMboldDark</span>
<span className="font-black">SMblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-secondary-dark">
<span className="font-thin">BASEthinDark</span>
<span className="font-light">BASElightDark</span>
<span className="font-normal">BASEnormalDark</span>
<span className="font-semibold">BASEsemiboldDark</span>
<span className="font-bold">BASEboldDark</span>
<span className="font-black">BASEblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-secondary-dark">
<span className="font-thin">LGthinDark</span>
<span className="font-light">LGlightDark</span>
<span className="font-normal">LGnormalDark</span>
<span className="font-semibold">LGsemiboldDark</span>
<span className="font-bold">LGboldDark</span>
<span className="font-black">LGblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-secondary-dark">
<span className="font-thin">XLthinDark</span>
<span className="font-light">XLlightDark</span>
<span className="font-normal">XLnormalDark</span>
<span className="font-semibold">XLsemiboldDark</span>
<span className="font-bold">XLboldDark</span>
<span className="font-black">XLblackDark</span>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-surface-light">
<div className="text-lg font-bold text-black">Light Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-secondary-light">smSecondary-light</span>
<span className="text-base text-hallpass-secondary-light">baseSecondary-light</span>
<span className="text-lg text-hallpass-secondary-light">lgSecondary-light</span>
<span className="text-xl text-hallpass-secondary-light">xlSecondary-light</span>
<span className="text-sm text-hallpass-secondary">smSecondary</span>
<span className="text-base text-hallpass-secondary">baseSecondary</span>
<span className="text-lg text-hallpass-secondary">lgSecondary</span>
<span className="text-xl text-hallpass-secondary">xlSecondary</span>
<span className="text-sm text-hallpass-secondary-dark">smSecondary-dark</span>
<span className="text-base text-hallpass-secondary-dark">baseSecondary-dark</span>
<span className="text-lg text-hallpass-secondary-dark">lgSecondary-dark</span>
<span className="text-xl text-hallpass-secondary-dark">xlSecondary-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface">
<div className="text-lg font-bold text-black">Default Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-secondary-light">smSecondary-light</span>
<span className="text-base text-hallpass-secondary-light">baseSecondary-light</span>
<span className="text-lg text-hallpass-secondary-light">lgSecondary-light</span>
<span className="text-xl text-hallpass-secondary-light">xlSecondary-light</span>
<span className="text-sm text-hallpass-secondary">smSecondary</span>
<span className="text-base text-hallpass-secondary">baseSecondary</span>
<span className="text-lg text-hallpass-secondary">lgSecondary</span>
<span className="text-xl text-hallpass-secondary">xlSecondary</span>
<span className="text-sm text-hallpass-secondary-dark">smSecondary-dark</span>
<span className="text-base text-hallpass-secondary-dark">baseSecondary-dark</span>
<span className="text-lg text-hallpass-secondary-dark">lgSecondary-dark</span>
<span className="text-xl text-hallpass-secondary-dark">xlSecondary-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface-dark">
<div className="text-lg font-bold text-black">Dark Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-secondary-light">smSecondary-light</span>
<span className="text-base text-hallpass-secondary-light">baseSecondary-light</span>
<span className="text-lg text-hallpass-secondary-light">lgSecondary-light</span>
<span className="text-xl text-hallpass-secondary-light">xlSecondary-light</span>
<span className="text-sm text-hallpass-secondary">smSecondary</span>
<span className="text-base text-hallpass-secondary">baseSecondary</span>
<span className="text-lg text-hallpass-secondary">lgSecondary</span>
<span className="text-xl text-hallpass-secondary">xlSecondary</span>
<span className="text-sm text-hallpass-secondary-dark">smSecondary-dark</span>
<span className="text-base text-hallpass-secondary-dark">baseSecondary-dark</span>
<span className="text-lg text-hallpass-secondary-dark">lgSecondary-dark</span>
<span className="text-xl text-hallpass-secondary-dark">xlSecondary-dark</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-secondary-light">
<div className="text-lg font-bold text-white">Light Secondary</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-secondary-light">smSecondary</span>
<span className="text-base text-hallpass-on-secondary-light">baseSecondary</span>
<span className="text-lg text-hallpass-on-secondary-light">lgSecondary</span>
<span className="text-xl text-hallpass-on-secondary-light">xlSecondary</span>
</div>
</div>
<div className="p-4 bg-hallpass-secondary">
<div className="text-lg font-bold text-white">Default Secondary</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-secondary">smSecondary</span>
<span className="text-base text-hallpass-on-secondary">baseSecondary</span>
<span className="text-lg text-hallpass-on-secondary">lgSecondary</span>
<span className="text-xl text-hallpass-on-secondary">xlSecondary</span>
</div>
</div>
<div className="p-4 bg-hallpass-secondary-dark">
<div className="text-lg font-bold text-white">Dark Secondary</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-secondary-dark">smSecondary</span>
<span className="text-base text-hallpass-on-secondary-dark">baseSecondary</span>
<span className="text-lg text-hallpass-on-secondary-dark">lgSecondary</span>
<span className="text-xl text-hallpass-on-secondary-dark">xlSecondary</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-secondary-light/10">
<div className="text-lg font-bold text-black">Light Secondary (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-secondary/10">
<div className="text-lg font-bold text-black">Default Secondary (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-secondary-dark/10">
<div className="text-lg font-bold text-black">Dark Secondary (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg text-hallpass-error">Error</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-error-light">
<span className="font-thin">SMthinLight</span>
<span className="font-light">SMlightLight</span>
<span className="font-normal">SMnormalLight</span>
<span className="font-semibold">SMsemiboldLight</span>
<span className="font-bold">SMboldLight</span>
<span className="font-black">SMblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-error-light">
<span className="font-thin">BASEthinLight</span>
<span className="font-light">BASElightLight</span>
<span className="font-normal">BASEnormalLight</span>
<span className="font-semibold">BASEsemiboldLight</span>
<span className="font-bold">BASEboldLight</span>
<span className="font-black">BASEblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-error-light">
<span className="font-thin">LGthinLight</span>
<span className="font-light">LGlightLight</span>
<span className="font-normal">LGnormalLight</span>
<span className="font-semibold">LGsemiboldLight</span>
<span className="font-bold">LGboldLight</span>
<span className="font-black">LGblackLight</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-error-light">
<span className="font-thin">XLthinLight</span>
<span className="font-light">XLlightLight</span>
<span className="font-normal">XLnormalLight</span>
<span className="font-semibold">XLsemiboldLight</span>
<span className="font-bold">XLboldLight</span>
<span className="font-black">XLblackLight</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-error">
<span className="font-thin">SMthinDefault</span>
<span className="font-light">SMlightDefault</span>
<span className="font-normal">SMnormalDefault</span>
<span className="font-semibold">SMsemiboldDefault</span>
<span className="font-bold">SMboldDefault</span>
<span className="font-black">SMblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-error">
<span className="font-thin">BASEthinDefault</span>
<span className="font-light">BASElightDefault</span>
<span className="font-normal">BASEnormalDefault</span>
<span className="font-semibold">BASEsemiboldDefault</span>
<span className="font-bold">BASEboldDefault</span>
<span className="font-black">BASEblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-error">
<span className="font-thin">LGthinDefault</span>
<span className="font-light">LGlightDefault</span>
<span className="font-normal">LGnormalDefault</span>
<span className="font-semibold">LGsemiboldDefault</span>
<span className="font-bold">LGboldDefault</span>
<span className="font-black">LGblackDefault</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-error">
<span className="font-thin">XLthinDefault</span>
<span className="font-light">XLlightDefault</span>
<span className="font-normal">XLnormalDefault</span>
<span className="font-semibold">XLsemiboldDefault</span>
<span className="font-bold">XLboldDefault</span>
<span className="font-black">XLblackDefault</span>
</div>
<div className="my-2 w-full h-1 bg-slate-300"></div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-error-dark">
<span className="font-thin">SMthinDark</span>
<span className="font-light">SMlightDark</span>
<span className="font-normal">SMnormalDark</span>
<span className="font-semibold">SMsemiboldDark</span>
<span className="font-bold">SMboldDark</span>
<span className="font-black">SMblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-error-dark">
<span className="font-thin">BASEthinDark</span>
<span className="font-light">BASElightDark</span>
<span className="font-normal">BASEnormalDark</span>
<span className="font-semibold">BASEsemiboldDark</span>
<span className="font-bold">BASEboldDark</span>
<span className="font-black">BASEblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-error-dark">
<span className="font-thin">LGthinDark</span>
<span className="font-light">LGlightDark</span>
<span className="font-normal">LGnormalDark</span>
<span className="font-semibold">LGsemiboldDark</span>
<span className="font-bold">LGboldDark</span>
<span className="font-black">LGblackDark</span>
</div>
<div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-error-dark">
<span className="font-thin">XLthinDark</span>
<span className="font-light">XLlightDark</span>
<span className="font-normal">XLnormalDark</span>
<span className="font-semibold">XLsemiboldDark</span>
<span className="font-bold">XLboldDark</span>
<span className="font-black">XLblackDark</span>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-surface-light">
<div className="text-lg font-bold text-black">Light Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-error-light">smError-light</span>
<span className="text-base text-hallpass-error-light">baseError-light</span>
<span className="text-lg text-hallpass-error-light">lgError-light</span>
<span className="text-xl text-hallpass-error-light">xlError-light</span>
<span className="text-sm text-hallpass-error">smError</span>
<span className="text-base text-hallpass-error">baseError</span>
<span className="text-lg text-hallpass-error">lgError</span>
<span className="text-xl text-hallpass-error">xlError</span>
<span className="text-sm text-hallpass-error-dark">smError-dark</span>
<span className="text-base text-hallpass-error-dark">baseError-dark</span>
<span className="text-lg text-hallpass-error-dark">lgError-dark</span>
<span className="text-xl text-hallpass-error-dark">xlError-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface">
<div className="text-lg font-bold text-black">Default Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-error-light">smError-light</span>
<span className="text-base text-hallpass-error-light">baseError-light</span>
<span className="text-lg text-hallpass-error-light">lgError-light</span>
<span className="text-xl text-hallpass-error-light">xlError-light</span>
<span className="text-sm text-hallpass-error">smError</span>
<span className="text-base text-hallpass-error">baseError</span>
<span className="text-lg text-hallpass-error">lgError</span>
<span className="text-xl text-hallpass-error">xlError</span>
<span className="text-sm text-hallpass-error-dark">smError-dark</span>
<span className="text-base text-hallpass-error-dark">baseError-dark</span>
<span className="text-lg text-hallpass-error-dark">lgError-dark</span>
<span className="text-xl text-hallpass-error-dark">xlError-dark</span>
</div>
</div>
<div className="p-4 bg-hallpass-surface-dark">
<div className="text-lg font-bold text-black">Dark Surface</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-error-light">smError-light</span>
<span className="text-base text-hallpass-error-light">baseError-light</span>
<span className="text-lg text-hallpass-error-light">lgError-light</span>
<span className="text-xl text-hallpass-error-light">xlError-light</span>
<span className="text-sm text-hallpass-error">smError</span>
<span className="text-base text-hallpass-error">baseError</span>
<span className="text-lg text-hallpass-error">lgError</span>
<span className="text-xl text-hallpass-error">xlError</span>
<span className="text-sm text-hallpass-error-dark">smError-dark</span>
<span className="text-base text-hallpass-error-dark">baseError-dark</span>
<span className="text-lg text-hallpass-error-dark">lgError-dark</span>
<span className="text-xl text-hallpass-error-dark">xlError-dark</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-error-light">
<div className="text-lg font-bold text-white">Light Error</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-error-light">smError</span>
<span className="text-base text-hallpass-on-error-light">baseError</span>
<span className="text-lg text-hallpass-on-error-light">lgError</span>
<span className="text-xl text-hallpass-on-error-light">xlError</span>
</div>
</div>
<div className="p-4 bg-hallpass-error">
<div className="text-lg font-bold text-white">Default Error</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-error">smError</span>
<span className="text-base text-hallpass-on-error">baseError</span>
<span className="text-lg text-hallpass-on-error">lgError</span>
<span className="text-xl text-hallpass-on-error">xlError</span>
</div>
</div>
<div className="p-4 bg-hallpass-error-dark">
<div className="text-lg font-bold text-white">Dark Error</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-error-dark">smError</span>
<span className="text-base text-hallpass-on-error-dark">baseError</span>
<span className="text-lg text-hallpass-on-error-dark">lgError</span>
<span className="text-xl text-hallpass-on-error-dark">xlError</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-x-4">
<div className="p-4 bg-hallpass-error-light/10">
<div className="text-lg font-bold text-black">Light Error (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-error/10">
<div className="text-lg font-bold text-black">Default Error (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
<div className="p-4 bg-hallpass-error-dark/10">
<div className="text-lg font-bold text-black">Dark Error (opaque)</div>
<div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm">smRandomText</span>
<span className="text-base">baseRandomText</span>
<span className="text-lg">lgRandomText</span>
<span className="text-xl">xlRandomText</span>
</div>
</div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">All Color Combinations</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="flex flex-wrap gap-x-4 gap-y-2">
<span className="text-hallpass-black-light text-lg font-bold px-2 py-1">black-light</span>
<span className="bg-hallpass-black-light text-hallpass-on-black-light font-medium px-2 py-1">full text-hallpass-on-black-light</span>
<span className="bg-hallpass-black-light/75 text-hallpass-on-black-light font-medium px-2 py-1">mostly text-hallpass-on-black-light</span>
<span className="bg-hallpass-black-light/50 text-hallpass-black-light font-medium px-2 py-1">half text-hallpass-black-light</span>
<span className="bg-hallpass-black-light/25 text-hallpass-black-light font-medium px-2 py-1">quarter text-hallpass-black-light</span>
<span className="bg-hallpass-black-light/10 text-hallpass-black-light font-medium px-2 py-1">minimal text-hallpass-black-light</span>
<span className="text-hallpass-black text-lg font-bold px-2 py-1">black</span>
<span className="bg-hallpass-black text-hallpass-on-black font-medium px-2 py-1">full text-hallpass-on-black</span>
<span className="bg-hallpass-black/75 text-hallpass-on-black font-medium px-2 py-1">mostly text-hallpass-on-black</span>
<span className="bg-hallpass-black/50 text-hallpass-black font-medium px-2 py-1">half text-hallpass-black</span>
<span className="bg-hallpass-black/25 text-hallpass-black font-medium px-2 py-1">quarter text-hallpass-black</span>
<span className="bg-hallpass-black/10 text-hallpass-black font-medium px-2 py-1">minimal text-hallpass-black</span>
<span className="text-hallpass-black-dark text-lg font-bold px-2 py-1">black-dark</span>
<span className="bg-hallpass-black-dark text-hallpass-on-black-dark font-medium px-2 py-1">full text-hallpass-on-black-dark</span>
<span className="bg-hallpass-black-dark/75 text-hallpass-on-black-dark font-medium px-2 py-1">mostly text-hallpass-on-black-dark</span>
<span className="bg-hallpass-black-dark/50 text-hallpass-black-dark font-medium px-2 py-1">half text-hallpass-black-dark</span>
<span className="bg-hallpass-black-dark/25 text-hallpass-black-dark font-medium px-2 py-1">quarter text-hallpass-black-dark</span>
<span className="bg-hallpass-black-dark/10 text-hallpass-black-dark font-medium px-2 py-1">minimal text-hallpass-black-dark</span>
<span className="text-hallpass-white-light text-lg font-bold px-2 py-1">white-light</span>
<span className="bg-hallpass-white-light text-hallpass-on-white-light font-medium px-2 py-1">full text-hallpass-on-white-light</span>
<span className="bg-hallpass-white-light/75 text-hallpass-on-white-light font-medium px-2 py-1">mostly text-hallpass-on-white-light</span>
<span className="bg-hallpass-white-light/50 text-hallpass-white-light font-medium px-2 py-1">half text-hallpass-white-light</span>
<span className="bg-hallpass-white-light/25 text-hallpass-white-light font-medium px-2 py-1">quarter text-hallpass-white-light</span>
<span className="bg-hallpass-white-light/10 text-hallpass-white-light font-medium px-2 py-1">minimal text-hallpass-white-light</span>
<span className="text-hallpass-white text-lg font-bold px-2 py-1">white</span>
<span className="bg-hallpass-white text-hallpass-on-white font-medium px-2 py-1">full text-hallpass-on-white</span>
<span className="bg-hallpass-white/75 text-hallpass-on-white font-medium px-2 py-1">mostly text-hallpass-on-white</span>
<span className="bg-hallpass-white/50 text-hallpass-white font-medium px-2 py-1">half text-hallpass-white</span>
<span className="bg-hallpass-white/25 text-hallpass-white font-medium px-2 py-1">quarter text-hallpass-white</span>
<span className="bg-hallpass-white/10 text-hallpass-white font-medium px-2 py-1">minimal text-hallpass-white</span>
<span className="text-hallpass-white-dark text-lg font-bold px-2 py-1">white-dark</span>
<span className="bg-hallpass-white-dark text-hallpass-on-white-dark font-medium px-2 py-1">full text-hallpass-on-white-dark</span>
<span className="bg-hallpass-white-dark/75 text-hallpass-on-white-dark font-medium px-2 py-1">mostly text-hallpass-on-white-dark</span>
<span className="bg-hallpass-white-dark/50 text-hallpass-white-dark font-medium px-2 py-1">half text-hallpass-white-dark</span>
<span className="bg-hallpass-white-dark/25 text-hallpass-white-dark font-medium px-2 py-1">quarter text-hallpass-white-dark</span>
<span className="bg-hallpass-white-dark/10 text-hallpass-white-dark font-medium px-2 py-1">minimal text-hallpass-white-dark</span>
<span className="text-hallpass-neutral-light text-lg font-bold px-2 py-1">neutral-light</span>
<span className="bg-hallpass-neutral-light text-hallpass-on-neutral-light font-medium px-2 py-1">full text-hallpass-on-neutral-light</span>
<span className="bg-hallpass-neutral-light/75 text-hallpass-on-neutral-light font-medium px-2 py-1">mostly text-hallpass-on-neutral-light</span>
<span className="bg-hallpass-neutral-light/50 text-hallpass-neutral-light font-medium px-2 py-1">half text-hallpass-neutral-light</span>
<span className="bg-hallpass-neutral-light/25 text-hallpass-neutral-light font-medium px-2 py-1">quarter text-hallpass-neutral-light</span>
<span className="bg-hallpass-neutral-light/10 text-hallpass-neutral-light font-medium px-2 py-1">minimal text-hallpass-neutral-light</span>
<span className="text-hallpass-neutral text-lg font-bold px-2 py-1">neutral</span>
<span className="bg-hallpass-neutral text-hallpass-on-neutral font-medium px-2 py-1">full text-hallpass-on-neutral</span>
<span className="bg-hallpass-neutral/75 text-hallpass-on-neutral font-medium px-2 py-1">mostly text-hallpass-on-neutral</span>
<span className="bg-hallpass-neutral/50 text-hallpass-neutral font-medium px-2 py-1">half text-hallpass-neutral</span>
<span className="bg-hallpass-neutral/25 text-hallpass-neutral font-medium px-2 py-1">quarter text-hallpass-neutral</span>
<span className="bg-hallpass-neutral/10 text-hallpass-neutral font-medium px-2 py-1">minimal text-hallpass-neutral</span>
<span className="text-hallpass-neutral-dark text-lg font-bold px-2 py-1">neutral-dark</span>
<span className="bg-hallpass-neutral-dark text-hallpass-on-neutral-dark font-medium px-2 py-1">full text-hallpass-on-neutral-dark</span>
<span className="bg-hallpass-neutral-dark/75 text-hallpass-on-neutral-dark font-medium px-2 py-1">mostly text-hallpass-on-neutral-dark</span>
<span className="bg-hallpass-neutral-dark/50 text-hallpass-neutral-dark font-medium px-2 py-1">half text-hallpass-neutral-dark</span>
<span className="bg-hallpass-neutral-dark/25 text-hallpass-neutral-dark font-medium px-2 py-1">quarter text-hallpass-neutral-dark</span>
<span className="bg-hallpass-neutral-dark/10 text-hallpass-neutral-dark font-medium px-2 py-1">minimal text-hallpass-neutral-dark</span>
<span className="text-hallpass-primary-light text-lg font-bold px-2 py-1">primary-light</span>
<span className="bg-hallpass-primary-light text-hallpass-on-primary-light font-medium px-2 py-1">full text-hallpass-on-primary-light</span>
<span className="bg-hallpass-primary-light/75 text-hallpass-on-primary-light font-medium px-2 py-1">mostly text-hallpass-on-primary-light</span>
<span className="bg-hallpass-primary-light/50 text-hallpass-primary-light font-medium px-2 py-1">half text-hallpass-primary-light</span>
<span className="bg-hallpass-primary-light/25 text-hallpass-primary-light font-medium px-2 py-1">quarter text-hallpass-primary-light</span>
<span className="bg-hallpass-primary-light/10 text-hallpass-primary-light font-medium px-2 py-1">minimal text-hallpass-primary-light</span>
<span className="text-hallpass-primary text-lg font-bold px-2 py-1">primary</span>
<span className="bg-hallpass-primary text-hallpass-on-primary font-medium px-2 py-1">full text-hallpass-on-primary</span>
<span className="bg-hallpass-primary/75 text-hallpass-on-primary font-medium px-2 py-1">mostly text-hallpass-on-primary</span>
<span className="bg-hallpass-primary/50 text-hallpass-primary font-medium px-2 py-1">half text-hallpass-primary</span>
<span className="bg-hallpass-primary/25 text-hallpass-primary font-medium px-2 py-1">quarter text-hallpass-primary</span>
<span className="bg-hallpass-primary/10 text-hallpass-primary font-medium px-2 py-1">minimal text-hallpass-primary</span>
<span className="text-hallpass-primary-dark text-lg font-bold px-2 py-1">primary-dark</span>
<span className="bg-hallpass-primary-dark text-hallpass-on-primary-dark font-medium px-2 py-1">full text-hallpass-on-primary-dark</span>
<span className="bg-hallpass-primary-dark/75 text-hallpass-on-primary-dark font-medium px-2 py-1">mostly text-hallpass-on-primary-dark</span>
<span className="bg-hallpass-primary-dark/50 text-hallpass-primary-dark font-medium px-2 py-1">half text-hallpass-primary-dark</span>
<span className="bg-hallpass-primary-dark/25 text-hallpass-primary-dark font-medium px-2 py-1">quarter text-hallpass-primary-dark</span>
<span className="bg-hallpass-primary-dark/10 text-hallpass-primary-dark font-medium px-2 py-1">minimal text-hallpass-primary-dark</span>
<span className="text-hallpass-secondary-light text-lg font-bold px-2 py-1">secondary-light</span>
<span className="bg-hallpass-secondary-light text-hallpass-on-secondary-light font-medium px-2 py-1">full text-hallpass-on-secondary-light</span>
<span className="bg-hallpass-secondary-light/75 text-hallpass-on-secondary-light font-medium px-2 py-1">mostly text-hallpass-on-secondary-light</span>
<span className="bg-hallpass-secondary-light/50 text-hallpass-secondary-light font-medium px-2 py-1">half text-hallpass-secondary-light</span>
<span className="bg-hallpass-secondary-light/25 text-hallpass-secondary-light font-medium px-2 py-1">quarter text-hallpass-secondary-light</span>
<span className="bg-hallpass-secondary-light/10 text-hallpass-secondary-light font-medium px-2 py-1">minimal text-hallpass-secondary-light</span>
<span className="text-hallpass-secondary text-lg font-bold px-2 py-1">secondary</span>
<span className="bg-hallpass-secondary text-hallpass-on-secondary font-medium px-2 py-1">full text-hallpass-on-secondary</span>
<span className="bg-hallpass-secondary/75 text-hallpass-on-secondary font-medium px-2 py-1">mostly text-hallpass-on-secondary</span>
<span className="bg-hallpass-secondary/50 text-hallpass-secondary font-medium px-2 py-1">half text-hallpass-secondary</span>
<span className="bg-hallpass-secondary/25 text-hallpass-secondary font-medium px-2 py-1">quarter text-hallpass-secondary</span>
<span className="bg-hallpass-secondary/10 text-hallpass-secondary font-medium px-2 py-1">minimal text-hallpass-secondary</span>
<span className="text-hallpass-secondary-dark text-lg font-bold px-2 py-1">secondary-dark</span>
<span className="bg-hallpass-secondary-dark text-hallpass-on-secondary-dark font-medium px-2 py-1">full text-hallpass-on-secondary-dark</span>
<span className="bg-hallpass-secondary-dark/75 text-hallpass-on-secondary-dark font-medium px-2 py-1">mostly text-hallpass-on-secondary-dark</span>
<span className="bg-hallpass-secondary-dark/50 text-hallpass-secondary-dark font-medium px-2 py-1">half text-hallpass-secondary-dark</span>
<span className="bg-hallpass-secondary-dark/25 text-hallpass-secondary-dark font-medium px-2 py-1">quarter text-hallpass-secondary-dark</span>
<span className="bg-hallpass-secondary-dark/10 text-hallpass-secondary-dark font-medium px-2 py-1">minimal text-hallpass-secondary-dark</span>
<span className="text-hallpass-error-light text-lg font-bold px-2 py-1">error-light</span>
<span className="bg-hallpass-error-light text-hallpass-on-error-light font-medium px-2 py-1">full text-hallpass-on-error-light</span>
<span className="bg-hallpass-error-light/75 text-hallpass-on-error-light font-medium px-2 py-1">mostly text-hallpass-on-error-light</span>
<span className="bg-hallpass-error-light/50 text-hallpass-error-light font-medium px-2 py-1">half text-hallpass-error-light</span>
<span className="bg-hallpass-error-light/25 text-hallpass-error-light font-medium px-2 py-1">quarter text-hallpass-error-light</span>
<span className="bg-hallpass-error-light/10 text-hallpass-error-light font-medium px-2 py-1">minimal text-hallpass-error-light</span>
<span className="text-hallpass-error text-lg font-bold px-2 py-1">error</span>
<span className="bg-hallpass-error text-hallpass-on-error font-medium px-2 py-1">full text-hallpass-on-error</span>
<span className="bg-hallpass-error/75 text-hallpass-on-error font-medium px-2 py-1">mostly text-hallpass-on-error</span>
<span className="bg-hallpass-error/50 text-hallpass-error font-medium px-2 py-1">half text-hallpass-error</span>
<span className="bg-hallpass-error/25 text-hallpass-error font-medium px-2 py-1">quarter text-hallpass-error</span>
<span className="bg-hallpass-error/10 text-hallpass-error font-medium px-2 py-1">minimal text-hallpass-error</span>
<span className="text-hallpass-error-dark text-lg font-bold px-2 py-1">error-dark</span>
<span className="bg-hallpass-error-dark text-hallpass-on-error-dark font-medium px-2 py-1">full text-hallpass-on-error-dark</span>
<span className="bg-hallpass-error-dark/75 text-hallpass-on-error-dark font-medium px-2 py-1">mostly text-hallpass-on-error-dark</span>
<span className="bg-hallpass-error-dark/50 text-hallpass-error-dark font-medium px-2 py-1">half text-hallpass-error-dark</span>
<span className="bg-hallpass-error-dark/25 text-hallpass-error-dark font-medium px-2 py-1">quarter text-hallpass-error-dark</span>
<span className="bg-hallpass-error-dark/10 text-hallpass-error-dark font-medium px-2 py-1">minimal text-hallpass-error-dark</span>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">Feedback</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="grid grid-cols-3 gap-x-4">
<div>
<div className="text-lg font-bold text-hallpass-feedback-success">success</div>
<div className="my-2 flex items-center gap-4">
<span className="w-1 h-1 bg-hallpass-feedback-success"></span>
<span className="w-2 h-2 bg-hallpass-feedback-success"></span>
<span className="w-3 h-3 bg-hallpass-feedback-success"></span>
<span className="w-4 h-4 bg-hallpass-feedback-success"></span>
<span className="w-5 h-5 bg-hallpass-feedback-success"></span>
<span className="w-6 h-6 bg-hallpass-feedback-success"></span>
</div>
<div className="my-2 flex items-center gap-4">
<span className="text-xs px-2 py-1 bg-hallpass-feedback-success text-white">text-xs</span>
<span className="text-sm px-2 py-1 bg-hallpass-feedback-success text-white">text-sm</span>
<span className="text-base px-2 py-1 bg-hallpass-feedback-success text-white">text-base</span>
</div>
</div>
<div>
<div className="text-lg font-bold text-hallpass-feedback-warning">warning</div>
<div className="my-2 flex items-center gap-4">
<span className="w-1 h-1 bg-hallpass-feedback-warning"></span>
<span className="w-2 h-2 bg-hallpass-feedback-warning"></span>
<span className="w-3 h-3 bg-hallpass-feedback-warning"></span>
<span className="w-4 h-4 bg-hallpass-feedback-warning"></span>
<span className="w-5 h-5 bg-hallpass-feedback-warning"></span>
<span className="w-6 h-6 bg-hallpass-feedback-warning"></span>
</div>
<div className="my-2 flex items-center gap-4">
<span className="text-xs px-2 py-1 bg-hallpass-feedback-warning text-white">text-xs</span>
<span className="text-sm px-2 py-1 bg-hallpass-feedback-warning text-white">text-sm</span>
<span className="text-base px-2 py-1 bg-hallpass-feedback-warning text-white">text-base</span>
</div>
</div>
<div>
<div className="text-lg font-bold text-hallpass-feedback-invalid">invalid</div>
<div className="my-2 flex items-center gap-4">
<span className="w-1 h-1 bg-hallpass-feedback-invalid"></span>
<span className="w-2 h-2 bg-hallpass-feedback-invalid"></span>
<span className="w-3 h-3 bg-hallpass-feedback-invalid"></span>
<span className="w-4 h-4 bg-hallpass-feedback-invalid"></span>
<span className="w-5 h-5 bg-hallpass-feedback-invalid"></span>
<span className="w-6 h-6 bg-hallpass-feedback-invalid"></span>
</div>
<div className="my-2 flex items-center gap-4">
<span className="text-xs px-2 py-1 bg-hallpass-feedback-invalid text-white">text-xs</span>
<span className="text-sm px-2 py-1 bg-hallpass-feedback-invalid text-white">text-sm</span>
<span className="text-base px-2 py-1 bg-hallpass-feedback-invalid text-white">text-base</span>
</div>
</div>
</div>
</div>
</details>
</div>
</details>
<details className="view-area">
<summary className="cursor-pointer font-bold text-xl">Fonts</summary>
<div className="my-4 pl-4 border-l-8 border-slate-300">

<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">Typography (prose)</summary>
<div className="my-4 px-4 border border-slate-200">

<p className="mb-4 prose-sm"><strong>prose-sm</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
<p className="mb-4 prose"><strong>prose</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
<p className="mb-4 prose-lg"><strong>prose-lg</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
<p className="mb-4 prose-xl"><strong>prose-xl</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">sans</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="my-4 text-hallpass-neutral-light">
<div className="font-bold text-2xl">sans neutral-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral">
<div className="font-bold text-2xl">sans neutral</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral-dark">
<div className="font-bold text-2xl">sans neutral-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-light">
<div className="font-bold text-2xl">sans primary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary">
<div className="font-bold text-2xl">sans primary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-dark">
<div className="font-bold text-2xl">sans primary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-light">
<div className="font-bold text-2xl">sans secondary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary">
<div className="font-bold text-2xl">sans secondary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-dark">
<div className="font-bold text-2xl">sans secondary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-light">
<div className="font-bold text-2xl">sans error-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error">
<div className="font-bold text-2xl">sans error</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-dark">
<div className="font-bold text-2xl">sans error-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Sans Sm Thin</span>
<span className="font-light">Sans Sm Light</span>
<span className="font-normal">Sans Sm Normal</span>
<span className="font-semibold">Sans Sm Semibold</span>
<span className="font-bold">Sans Sm Bold</span>
<span className="font-black">Sans Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Sans Base Thin</span>
<span className="font-light">Sans Base Light</span>
<span className="font-normal">Sans Base Normal</span>
<span className="font-semibold">Sans Base Semibold</span>
<span className="font-bold">Sans Base Bold</span>
<span className="font-black">Sans Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Sans Lg Thin</span>
<span className="font-light">Sans Lg Light</span>
<span className="font-normal">Sans Lg Normal</span>
<span className="font-semibold">Sans Lg Semibold</span>
<span className="font-bold">Sans Lg Bold</span>
<span className="font-black">Sans Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Sans Xl Thin</span>
<span className="font-light">Sans Xl Light</span>
<span className="font-normal">Sans Xl Normal</span>
<span className="font-semibold">Sans Xl Semibold</span>
<span className="font-bold">Sans Xl Bold</span>
<span className="font-black">Sans Xl Black</span>
</div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">serif</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="my-4 text-hallpass-neutral-light">
<div className="font-bold text-2xl">serif neutral-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral">
<div className="font-bold text-2xl">serif neutral</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral-dark">
<div className="font-bold text-2xl">serif neutral-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-light">
<div className="font-bold text-2xl">serif primary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary">
<div className="font-bold text-2xl">serif primary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-dark">
<div className="font-bold text-2xl">serif primary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-light">
<div className="font-bold text-2xl">serif secondary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary">
<div className="font-bold text-2xl">serif secondary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-dark">
<div className="font-bold text-2xl">serif secondary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-light">
<div className="font-bold text-2xl">serif error-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error">
<div className="font-bold text-2xl">serif error</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-dark">
<div className="font-bold text-2xl">serif error-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Serif Sm Thin</span>
<span className="font-light">Serif Sm Light</span>
<span className="font-normal">Serif Sm Normal</span>
<span className="font-semibold">Serif Sm Semibold</span>
<span className="font-bold">Serif Sm Bold</span>
<span className="font-black">Serif Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Serif Base Thin</span>
<span className="font-light">Serif Base Light</span>
<span className="font-normal">Serif Base Normal</span>
<span className="font-semibold">Serif Base Semibold</span>
<span className="font-bold">Serif Base Bold</span>
<span className="font-black">Serif Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Serif Lg Thin</span>
<span className="font-light">Serif Lg Light</span>
<span className="font-normal">Serif Lg Normal</span>
<span className="font-semibold">Serif Lg Semibold</span>
<span className="font-bold">Serif Lg Bold</span>
<span className="font-black">Serif Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Serif Xl Thin</span>
<span className="font-light">Serif Xl Light</span>
<span className="font-normal">Serif Xl Normal</span>
<span className="font-semibold">Serif Xl Semibold</span>
<span className="font-bold">Serif Xl Bold</span>
<span className="font-black">Serif Xl Black</span>
</div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">mono</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="my-4 text-hallpass-neutral-light">
<div className="font-bold text-2xl">mono neutral-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral">
<div className="font-bold text-2xl">mono neutral</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral-dark">
<div className="font-bold text-2xl">mono neutral-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-light">
<div className="font-bold text-2xl">mono primary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary">
<div className="font-bold text-2xl">mono primary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-dark">
<div className="font-bold text-2xl">mono primary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-light">
<div className="font-bold text-2xl">mono secondary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary">
<div className="font-bold text-2xl">mono secondary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-dark">
<div className="font-bold text-2xl">mono secondary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-light">
<div className="font-bold text-2xl">mono error-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error">
<div className="font-bold text-2xl">mono error</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-dark">
<div className="font-bold text-2xl">mono error-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Mono Sm Thin</span>
<span className="font-light">Mono Sm Light</span>
<span className="font-normal">Mono Sm Normal</span>
<span className="font-semibold">Mono Sm Semibold</span>
<span className="font-bold">Mono Sm Bold</span>
<span className="font-black">Mono Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Mono Base Thin</span>
<span className="font-light">Mono Base Light</span>
<span className="font-normal">Mono Base Normal</span>
<span className="font-semibold">Mono Base Semibold</span>
<span className="font-bold">Mono Base Bold</span>
<span className="font-black">Mono Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Mono Lg Thin</span>
<span className="font-light">Mono Lg Light</span>
<span className="font-normal">Mono Lg Normal</span>
<span className="font-semibold">Mono Lg Semibold</span>
<span className="font-bold">Mono Lg Bold</span>
<span className="font-black">Mono Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Mono Xl Thin</span>
<span className="font-light">Mono Xl Light</span>
<span className="font-normal">Mono Xl Normal</span>
<span className="font-semibold">Mono Xl Semibold</span>
<span className="font-bold">Mono Xl Bold</span>
<span className="font-black">Mono Xl Black</span>
</div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">brand</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="my-4 text-hallpass-neutral-light">
<div className="font-bold text-2xl">brand neutral-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral">
<div className="font-bold text-2xl">brand neutral</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-neutral-dark">
<div className="font-bold text-2xl">brand neutral-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-light">
<div className="font-bold text-2xl">brand primary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary">
<div className="font-bold text-2xl">brand primary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-primary-dark">
<div className="font-bold text-2xl">brand primary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-light">
<div className="font-bold text-2xl">brand secondary-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary">
<div className="font-bold text-2xl">brand secondary</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-secondary-dark">
<div className="font-bold text-2xl">brand secondary-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-light">
<div className="font-bold text-2xl">brand error-light</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error">
<div className="font-bold text-2xl">brand error</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
<div className="my-4 text-hallpass-error-dark">
<div className="font-bold text-2xl">brand error-dark</div>
<div className="flex flex-wrap items-center gap-x-4 text-sm">
<span className="font-thin">Brand Sm Thin</span>
<span className="font-light">Brand Sm Light</span>
<span className="font-normal">Brand Sm Normal</span>
<span className="font-semibold">Brand Sm Semibold</span>
<span className="font-bold">Brand Sm Bold</span>
<span className="font-black">Brand Sm Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-base">
<span className="font-thin">Brand Base Thin</span>
<span className="font-light">Brand Base Light</span>
<span className="font-normal">Brand Base Normal</span>
<span className="font-semibold">Brand Base Semibold</span>
<span className="font-bold">Brand Base Bold</span>
<span className="font-black">Brand Base Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-lg">
<span className="font-thin">Brand Lg Thin</span>
<span className="font-light">Brand Lg Light</span>
<span className="font-normal">Brand Lg Normal</span>
<span className="font-semibold">Brand Lg Semibold</span>
<span className="font-bold">Brand Lg Bold</span>
<span className="font-black">Brand Lg Black</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 text-xl">
<span className="font-thin">Brand Xl Thin</span>
<span className="font-light">Brand Xl Light</span>
<span className="font-normal">Brand Xl Normal</span>
<span className="font-semibold">Brand Xl Semibold</span>
<span className="font-bold">Brand Xl Bold</span>
<span className="font-black">Brand Xl Black</span>
</div>
</div>
</div>
</details>
</div>
</details>
<details className="view-area">
<summary className="cursor-pointer font-bold text-xl">UI Elements</summary>
<div className="my-4 pl-4 border-l-8 border-slate-300">

<div className="text-xl font-bold">Headings</div>
<div className="text-lg font-medium">Without Margins</div>
<h1 className="no-margin">Heading - H1</h1>
<h2 className="no-margin">Heading - H2</h2>
<h3 className="no-margin">Heading - H3</h3>
<h4 className="no-margin">Heading - H4</h4>
<div className="text-lg font-medium">Without Margins (SMALL)</div>
<h1 className="no-margin small">Heading - H1</h1>
<h2 className="no-margin small">Heading - H2</h2>
<h3 className="no-margin small">Heading - H3</h3>
<h4 className="no-margin small">Heading - H4</h4>
<div className="text-lg font-medium mt-8">With Margins</div>
<h1>Heading - H1</h1>
<h2>Heading - H2</h2>
<h3>Heading - H3</h3>
<h4>Heading - H4</h4>
<div className="text-xl font-bold mt-12">Links</div>
<div className="text-lg font-medium">General</div>
<div className="my-1"><a href="#" className="neutral">Link NEUTRAL</a></div>
<div className="my-1"><a href="#" className="primary">Link PRIMARY</a></div>
<div className="my-1"><a href="#" className="secondary">Link SECONDARY</a></div>
<div className="my-1"><a href="#" className="error">Link ERROR</a></div>
</div>
</details>
<details className="">
<summary className="cursor-pointer font-bold text-xl">Sections</summary>
<div className="my-4">

<div className="mt-12 text-4xl font-medium text-center">Sections</div>
<AySection color="surface" intensity="light" >
  <div className="font-bold text-xl">SECTION - surface - light - full opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="surface"  >
  <div className="font-bold text-xl">SECTION - surface - Default - full opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="surface" intensity="dark" >
  <div className="font-bold text-xl">SECTION - surface - dark - full opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="neutral" intensity="light" opacity="minimal">
  <div className="font-bold text-xl">SECTION - neutral - light - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="neutral" intensity="light" opacity="quarter">
  <div className="font-bold text-xl">SECTION - neutral - light - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="neutral"  opacity="minimal">
  <div className="font-bold text-xl">SECTION - neutral - Default - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="neutral"  opacity="quarter">
  <div className="font-bold text-xl">SECTION - neutral - Default - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="neutral" intensity="dark" opacity="minimal">
  <div className="font-bold text-xl">SECTION - neutral - dark - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="neutral" intensity="dark" opacity="quarter">
  <div className="font-bold text-xl">SECTION - neutral - dark - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="primary" intensity="light" opacity="minimal">
  <div className="font-bold text-xl">SECTION - primary - light - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="primary" intensity="light" opacity="quarter">
  <div className="font-bold text-xl">SECTION - primary - light - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="primary"  opacity="minimal">
  <div className="font-bold text-xl">SECTION - primary - Default - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="primary"  opacity="quarter">
  <div className="font-bold text-xl">SECTION - primary - Default - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="primary" intensity="dark" opacity="minimal">
  <div className="font-bold text-xl">SECTION - primary - dark - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="primary" intensity="dark" opacity="quarter">
  <div className="font-bold text-xl">SECTION - primary - dark - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="secondary" intensity="light" opacity="minimal">
  <div className="font-bold text-xl">SECTION - secondary - light - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="secondary" intensity="light" opacity="quarter">
  <div className="font-bold text-xl">SECTION - secondary - light - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="secondary"  opacity="minimal">
  <div className="font-bold text-xl">SECTION - secondary - Default - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="secondary"  opacity="quarter">
  <div className="font-bold text-xl">SECTION - secondary - Default - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="secondary" intensity="dark" opacity="minimal">
  <div className="font-bold text-xl">SECTION - secondary - dark - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="secondary" intensity="dark" opacity="quarter">
  <div className="font-bold text-xl">SECTION - secondary - dark - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="error" intensity="light" opacity="minimal">
  <div className="font-bold text-xl">SECTION - error - light - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="error" intensity="light" opacity="quarter">
  <div className="font-bold text-xl">SECTION - error - light - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="error"  opacity="minimal">
  <div className="font-bold text-xl">SECTION - error - Default - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="error"  opacity="quarter">
  <div className="font-bold text-xl">SECTION - error - Default - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="error" intensity="dark" opacity="minimal">
  <div className="font-bold text-xl">SECTION - error - dark - minimal opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
<AySection color="error" intensity="dark" opacity="quarter">
  <div className="font-bold text-xl">SECTION - error - dark - quarter opacity</div>
  <div className="my-4 ">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>
</div>
</details>
<details className="view-area">
<summary className="cursor-pointer font-bold text-xl">Buttons</summary>
<div className="my-4 pl-4 border-l-8 border-slate-300">

<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">Button Base</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="grid grid-cols-4 gap-x-4">
<div className="text-center">
      <ButtonBase size="thin">btn-thin</ButtonBase>
    </div>
<div className="text-center">
      <ButtonBase size="sm">btn-sm</ButtonBase>
    </div>
<div className="text-center">
      <ButtonBase size="md">btn-md</ButtonBase>
    </div>
<div className="text-center">
      <ButtonBase size="lg">btn-lg</ButtonBase>
    </div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">Button</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="font-bold text-lg">Hover none</div>
<div className="mb-4 grid grid-cols-4 gap-x-4">
<div className="text-center">
        <Button size="thin" hover="none" color="neutral">btn-thin</Button>
      </div>
<div className="text-center">
        <Button size="sm" hover="none" color="primary">btn-sm</Button>
      </div>
<div className="text-center">
        <Button size="md" hover="none" color="secondary">btn-md</Button>
      </div>
<div className="text-center">
        <Button size="lg" hover="none" color="error">btn-lg</Button>
      </div>
</div>
<div className="font-bold text-lg">Hover bottom</div>
<div className="mb-4 grid grid-cols-4 gap-x-4">
<div className="text-center">
        <Button size="thin" hover="bottom" color="neutral">btn-thin</Button>
      </div>
<div className="text-center">
        <Button size="sm" hover="bottom" color="primary">btn-sm</Button>
      </div>
<div className="text-center">
        <Button size="md" hover="bottom" color="secondary">btn-md</Button>
      </div>
<div className="text-center">
        <Button size="lg" hover="bottom" color="error">btn-lg</Button>
      </div>
</div>
<div className="font-bold text-lg">Hover bg</div>
<div className="mb-4 grid grid-cols-4 gap-x-4">
<div className="text-center">
        <Button size="thin" hover="bg" color="neutral">btn-thin</Button>
      </div>
<div className="text-center">
        <Button size="sm" hover="bg" color="primary">btn-sm</Button>
      </div>
<div className="text-center">
        <Button size="md" hover="bg" color="secondary">btn-md</Button>
      </div>
<div className="text-center">
        <Button size="lg" hover="bg" color="error">btn-lg</Button>
      </div>
</div>
<div className="font-bold text-lg">Hover grow</div>
<div className="mb-4 grid grid-cols-4 gap-x-4">
<div className="text-center">
        <Button size="thin" hover="grow" color="neutral">btn-thin</Button>
      </div>
<div className="text-center">
        <Button size="sm" hover="grow" color="primary">btn-sm</Button>
      </div>
<div className="text-center">
        <Button size="md" hover="grow" color="secondary">btn-md</Button>
      </div>
<div className="text-center">
        <Button size="lg" hover="grow" color="error">btn-lg</Button>
      </div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">Button Solid</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="font-bold text-lg">BLACK</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonSolid size="thin" intensity="light" color="black">btn-thin-light</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="sm"  color="black">btn-sm-default</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="md" intensity="dark" color="black">btn-md-dark</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="lg" intensity="light" color="black">btn-lg-light</ButtonSolid>
      </div>
</div>
<div className="font-bold text-lg">NEUTRAL</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonSolid size="thin" intensity="light" color="neutral">btn-thin-light</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="sm"  color="neutral">btn-sm-default</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="md" intensity="dark" color="neutral">btn-md-dark</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="lg" intensity="light" color="neutral">btn-lg-light</ButtonSolid>
      </div>
</div>
<div className="font-bold text-lg">PRIMARY</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonSolid size="thin" intensity="light" color="primary">btn-thin-light</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="sm"  color="primary">btn-sm-default</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="md" intensity="dark" color="primary">btn-md-dark</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="lg" intensity="light" color="primary">btn-lg-light</ButtonSolid>
      </div>
</div>
<div className="font-bold text-lg">SECONDARY</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonSolid size="thin" intensity="light" color="secondary">btn-thin-light</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="sm"  color="secondary">btn-sm-default</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="md" intensity="dark" color="secondary">btn-md-dark</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="lg" intensity="light" color="secondary">btn-lg-light</ButtonSolid>
      </div>
</div>
<div className="font-bold text-lg">ERROR</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonSolid size="thin" intensity="light" color="error">btn-thin-light</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="sm"  color="error">btn-sm-default</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="md" intensity="dark" color="error">btn-md-dark</ButtonSolid>
      </div>
<div className="text-center">
        <ButtonSolid size="lg" intensity="light" color="error">btn-lg-light</ButtonSolid>
      </div>
</div>
</div>
</details>
<details className="my-6">
<summary className="cursor-pointer font-bold text-lg">Button Outline</summary>
<div className="my-4 px-4 border border-slate-200">

<div className="font-bold text-lg">BLACK</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonOutline size="thin" intensity="light" color="black" bg="transparent">btn-thin-light</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="sm"  color="black" bg="background">btn-sm-default</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="md" intensity="dark" color="black" bg="surface">btn-md-dark</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="lg" intensity="light" color="black" bg="transparent">btn-lg-light</ButtonOutline>
      </div>
</div>
<div className="font-bold text-lg">NEUTRAL</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonOutline size="thin" intensity="light" color="neutral" bg="transparent">btn-thin-light</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="sm"  color="neutral" bg="background">btn-sm-default</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="md" intensity="dark" color="neutral" bg="surface">btn-md-dark</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="lg" intensity="light" color="neutral" bg="transparent">btn-lg-light</ButtonOutline>
      </div>
</div>
<div className="font-bold text-lg">PRIMARY</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonOutline size="thin" intensity="light" color="primary" bg="transparent">btn-thin-light</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="sm"  color="primary" bg="background">btn-sm-default</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="md" intensity="dark" color="primary" bg="surface">btn-md-dark</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="lg" intensity="light" color="primary" bg="transparent">btn-lg-light</ButtonOutline>
      </div>
</div>
<div className="font-bold text-lg">SECONDARY</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonOutline size="thin" intensity="light" color="secondary" bg="transparent">btn-thin-light</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="sm"  color="secondary" bg="background">btn-sm-default</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="md" intensity="dark" color="secondary" bg="surface">btn-md-dark</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="lg" intensity="light" color="secondary" bg="transparent">btn-lg-light</ButtonOutline>
      </div>
</div>
<div className="font-bold text-lg">ERROR</div>
<div className="mb-4 grid grid-cols-5 gap-x-4">
<div className="text-center">
        <ButtonOutline size="thin" intensity="light" color="error" bg="transparent">btn-thin-light</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="sm"  color="error" bg="background">btn-sm-default</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="md" intensity="dark" color="error" bg="surface">btn-md-dark</ButtonOutline>
      </div>
<div className="text-center">
        <ButtonOutline size="lg" intensity="light" color="error" bg="transparent">btn-lg-light</ButtonOutline>
      </div>
</div>
</div>
</details>
</div>
</details>
</div>
);
}