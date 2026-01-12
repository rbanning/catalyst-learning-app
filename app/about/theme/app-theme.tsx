import { AySection } from "@/ui/base-ui/server";

export function AppTheme() {
return (
<div>
<details className="my-12 view-area"><summary className="cursor-pointer font-bold text-xl">Colors</summary><div className="my-4 pl-4 border-l-8 border-slate-300">
  <details className="my-6">
    <summary className="cursor-pointer text-lg font-bold text-hallpass-neutral">Neutral</summary>
    <div className="p-8 border">
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-neutral-light">
        <span className="font-thin">light sm thin</span>
        <span className="font-light">light sm light</span>
        <span className="font-normal">light sm normal</span>
        <span className="font-semibold">light sm semibold</span>
        <span className="font-bold">light sm bold</span>
        <span className="font-black">light sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-neutral-light">
        <span className="font-thin">light base thin</span>
        <span className="font-light">light base light</span>
        <span className="font-normal">light base normal</span>
        <span className="font-semibold">light base semibold</span>
        <span className="font-bold">light base bold</span>
        <span className="font-black">light base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-neutral-light">
        <span className="font-thin">light lg thin</span>
        <span className="font-light">light lg light</span>
        <span className="font-normal">light lg normal</span>
        <span className="font-semibold">light lg semibold</span>
        <span className="font-bold">light lg bold</span>
        <span className="font-black">light lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-neutral-light">
        <span className="font-thin">light xl thin</span>
        <span className="font-light">light xl light</span>
        <span className="font-normal">light xl normal</span>
        <span className="font-semibold">light xl semibold</span>
        <span className="font-bold">light xl bold</span>
        <span className="font-black">light xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-neutral">
        <span className="font-thin">Default sm thin</span>
        <span className="font-light">Default sm light</span>
        <span className="font-normal">Default sm normal</span>
        <span className="font-semibold">Default sm semibold</span>
        <span className="font-bold">Default sm bold</span>
        <span className="font-black">Default sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-neutral">
        <span className="font-thin">Default base thin</span>
        <span className="font-light">Default base light</span>
        <span className="font-normal">Default base normal</span>
        <span className="font-semibold">Default base semibold</span>
        <span className="font-bold">Default base bold</span>
        <span className="font-black">Default base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-neutral">
        <span className="font-thin">Default lg thin</span>
        <span className="font-light">Default lg light</span>
        <span className="font-normal">Default lg normal</span>
        <span className="font-semibold">Default lg semibold</span>
        <span className="font-bold">Default lg bold</span>
        <span className="font-black">Default lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-neutral">
        <span className="font-thin">Default xl thin</span>
        <span className="font-light">Default xl light</span>
        <span className="font-normal">Default xl normal</span>
        <span className="font-semibold">Default xl semibold</span>
        <span className="font-bold">Default xl bold</span>
        <span className="font-black">Default xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-neutral-dark">
        <span className="font-thin">dark sm thin</span>
        <span className="font-light">dark sm light</span>
        <span className="font-normal">dark sm normal</span>
        <span className="font-semibold">dark sm semibold</span>
        <span className="font-bold">dark sm bold</span>
        <span className="font-black">dark sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-neutral-dark">
        <span className="font-thin">dark base thin</span>
        <span className="font-light">dark base light</span>
        <span className="font-normal">dark base normal</span>
        <span className="font-semibold">dark base semibold</span>
        <span className="font-bold">dark base bold</span>
        <span className="font-black">dark base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-neutral-dark">
        <span className="font-thin">dark lg thin</span>
        <span className="font-light">dark lg light</span>
        <span className="font-normal">dark lg normal</span>
        <span className="font-semibold">dark lg semibold</span>
        <span className="font-bold">dark lg bold</span>
        <span className="font-black">dark lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-neutral-dark">
        <span className="font-thin">dark xl thin</span>
        <span className="font-light">dark xl light</span>
        <span className="font-normal">dark xl normal</span>
        <span className="font-semibold">dark xl semibold</span>
        <span className="font-bold">dark xl bold</span>
        <span className="font-black">dark xl black</span>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-surface-light">
        <div className="text-lg font-bold text-black">light Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-neutral-light">neutral light sm</span>
<span className="text-base text-hallpass-neutral-light">neutral light base</span>
<span className="text-lg text-hallpass-neutral-light">neutral light lg</span>
<span className="text-xl text-hallpass-neutral-light">neutral light xl</span>
<span className="text-sm text-hallpass-neutral">neutral Default sm</span>
<span className="text-base text-hallpass-neutral">neutral Default base</span>
<span className="text-lg text-hallpass-neutral">neutral Default lg</span>
<span className="text-xl text-hallpass-neutral">neutral Default xl</span>
<span className="text-sm text-hallpass-neutral-dark">neutral dark sm</span>
<span className="text-base text-hallpass-neutral-dark">neutral dark base</span>
<span className="text-lg text-hallpass-neutral-dark">neutral dark lg</span>
<span className="text-xl text-hallpass-neutral-dark">neutral dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface">
        <div className="text-lg font-bold text-black">Default Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-neutral-light">neutral light sm</span>
<span className="text-base text-hallpass-neutral-light">neutral light base</span>
<span className="text-lg text-hallpass-neutral-light">neutral light lg</span>
<span className="text-xl text-hallpass-neutral-light">neutral light xl</span>
<span className="text-sm text-hallpass-neutral">neutral Default sm</span>
<span className="text-base text-hallpass-neutral">neutral Default base</span>
<span className="text-lg text-hallpass-neutral">neutral Default lg</span>
<span className="text-xl text-hallpass-neutral">neutral Default xl</span>
<span className="text-sm text-hallpass-neutral-dark">neutral dark sm</span>
<span className="text-base text-hallpass-neutral-dark">neutral dark base</span>
<span className="text-lg text-hallpass-neutral-dark">neutral dark lg</span>
<span className="text-xl text-hallpass-neutral-dark">neutral dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface-dark">
        <div className="text-lg font-bold text-black">dark Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-neutral-light">neutral light sm</span>
<span className="text-base text-hallpass-neutral-light">neutral light base</span>
<span className="text-lg text-hallpass-neutral-light">neutral light lg</span>
<span className="text-xl text-hallpass-neutral-light">neutral light xl</span>
<span className="text-sm text-hallpass-neutral">neutral Default sm</span>
<span className="text-base text-hallpass-neutral">neutral Default base</span>
<span className="text-lg text-hallpass-neutral">neutral Default lg</span>
<span className="text-xl text-hallpass-neutral">neutral Default xl</span>
<span className="text-sm text-hallpass-neutral-dark">neutral dark sm</span>
<span className="text-base text-hallpass-neutral-dark">neutral dark base</span>
<span className="text-lg text-hallpass-neutral-dark">neutral dark lg</span>
<span className="text-xl text-hallpass-neutral-dark">neutral dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-neutral-light">
        <div className="text-lg font-bold text-white">light neutral</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-neutral-light">neutral light sm</span>
<span className="text-base text-hallpass-on-neutral-light">neutral light base</span>
<span className="text-lg text-hallpass-on-neutral-light">neutral light lg</span>
<span className="text-xl text-hallpass-on-neutral-light">neutral light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-neutral">
        <div className="text-lg font-bold text-white">Default neutral</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-neutral">neutral Default sm</span>
<span className="text-base text-hallpass-on-neutral">neutral Default base</span>
<span className="text-lg text-hallpass-on-neutral">neutral Default lg</span>
<span className="text-xl text-hallpass-on-neutral">neutral Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-neutral-dark">
        <div className="text-lg font-bold text-white">dark neutral</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-neutral-dark">neutral dark sm</span>
<span className="text-base text-hallpass-on-neutral-dark">neutral dark base</span>
<span className="text-lg text-hallpass-on-neutral-dark">neutral dark lg</span>
<span className="text-xl text-hallpass-on-neutral-dark">neutral dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-neutral-light/10">
        <div className="text-lg font-bold text-black">light neutral</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-neutral-light">neutral light sm</span>
<span className="text-base font-medium text-hallpass-neutral-light">neutral light base</span>
<span className="text-lg font-medium text-hallpass-neutral-light">neutral light lg</span>
<span className="text-xl font-medium text-hallpass-neutral-light">neutral light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-neutral/10">
        <div className="text-lg font-bold text-black">Default neutral</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-neutral">neutral Default sm</span>
<span className="text-base font-medium text-hallpass-neutral">neutral Default base</span>
<span className="text-lg font-medium text-hallpass-neutral">neutral Default lg</span>
<span className="text-xl font-medium text-hallpass-neutral">neutral Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-neutral-dark/10">
        <div className="text-lg font-bold text-black">dark neutral</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-neutral-dark">neutral dark sm</span>
<span className="text-base font-medium text-hallpass-neutral-dark">neutral dark base</span>
<span className="text-lg font-medium text-hallpass-neutral-dark">neutral dark lg</span>
<span className="text-xl font-medium text-hallpass-neutral-dark">neutral dark xl</span>
        </div>
        </div>
      </div>
  </div></details>
  <details className="my-6">
    <summary className="cursor-pointer text-lg font-bold text-hallpass-primary">Primary</summary>
    <div className="p-8 border">
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-primary-light">
        <span className="font-thin">light sm thin</span>
        <span className="font-light">light sm light</span>
        <span className="font-normal">light sm normal</span>
        <span className="font-semibold">light sm semibold</span>
        <span className="font-bold">light sm bold</span>
        <span className="font-black">light sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-primary-light">
        <span className="font-thin">light base thin</span>
        <span className="font-light">light base light</span>
        <span className="font-normal">light base normal</span>
        <span className="font-semibold">light base semibold</span>
        <span className="font-bold">light base bold</span>
        <span className="font-black">light base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-primary-light">
        <span className="font-thin">light lg thin</span>
        <span className="font-light">light lg light</span>
        <span className="font-normal">light lg normal</span>
        <span className="font-semibold">light lg semibold</span>
        <span className="font-bold">light lg bold</span>
        <span className="font-black">light lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-primary-light">
        <span className="font-thin">light xl thin</span>
        <span className="font-light">light xl light</span>
        <span className="font-normal">light xl normal</span>
        <span className="font-semibold">light xl semibold</span>
        <span className="font-bold">light xl bold</span>
        <span className="font-black">light xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-primary">
        <span className="font-thin">Default sm thin</span>
        <span className="font-light">Default sm light</span>
        <span className="font-normal">Default sm normal</span>
        <span className="font-semibold">Default sm semibold</span>
        <span className="font-bold">Default sm bold</span>
        <span className="font-black">Default sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-primary">
        <span className="font-thin">Default base thin</span>
        <span className="font-light">Default base light</span>
        <span className="font-normal">Default base normal</span>
        <span className="font-semibold">Default base semibold</span>
        <span className="font-bold">Default base bold</span>
        <span className="font-black">Default base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-primary">
        <span className="font-thin">Default lg thin</span>
        <span className="font-light">Default lg light</span>
        <span className="font-normal">Default lg normal</span>
        <span className="font-semibold">Default lg semibold</span>
        <span className="font-bold">Default lg bold</span>
        <span className="font-black">Default lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-primary">
        <span className="font-thin">Default xl thin</span>
        <span className="font-light">Default xl light</span>
        <span className="font-normal">Default xl normal</span>
        <span className="font-semibold">Default xl semibold</span>
        <span className="font-bold">Default xl bold</span>
        <span className="font-black">Default xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-primary-dark">
        <span className="font-thin">dark sm thin</span>
        <span className="font-light">dark sm light</span>
        <span className="font-normal">dark sm normal</span>
        <span className="font-semibold">dark sm semibold</span>
        <span className="font-bold">dark sm bold</span>
        <span className="font-black">dark sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-primary-dark">
        <span className="font-thin">dark base thin</span>
        <span className="font-light">dark base light</span>
        <span className="font-normal">dark base normal</span>
        <span className="font-semibold">dark base semibold</span>
        <span className="font-bold">dark base bold</span>
        <span className="font-black">dark base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-primary-dark">
        <span className="font-thin">dark lg thin</span>
        <span className="font-light">dark lg light</span>
        <span className="font-normal">dark lg normal</span>
        <span className="font-semibold">dark lg semibold</span>
        <span className="font-bold">dark lg bold</span>
        <span className="font-black">dark lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-primary-dark">
        <span className="font-thin">dark xl thin</span>
        <span className="font-light">dark xl light</span>
        <span className="font-normal">dark xl normal</span>
        <span className="font-semibold">dark xl semibold</span>
        <span className="font-bold">dark xl bold</span>
        <span className="font-black">dark xl black</span>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-surface-light">
        <div className="text-lg font-bold text-black">light Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-primary-light">primary light sm</span>
<span className="text-base text-hallpass-primary-light">primary light base</span>
<span className="text-lg text-hallpass-primary-light">primary light lg</span>
<span className="text-xl text-hallpass-primary-light">primary light xl</span>
<span className="text-sm text-hallpass-primary">primary Default sm</span>
<span className="text-base text-hallpass-primary">primary Default base</span>
<span className="text-lg text-hallpass-primary">primary Default lg</span>
<span className="text-xl text-hallpass-primary">primary Default xl</span>
<span className="text-sm text-hallpass-primary-dark">primary dark sm</span>
<span className="text-base text-hallpass-primary-dark">primary dark base</span>
<span className="text-lg text-hallpass-primary-dark">primary dark lg</span>
<span className="text-xl text-hallpass-primary-dark">primary dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface">
        <div className="text-lg font-bold text-black">Default Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-primary-light">primary light sm</span>
<span className="text-base text-hallpass-primary-light">primary light base</span>
<span className="text-lg text-hallpass-primary-light">primary light lg</span>
<span className="text-xl text-hallpass-primary-light">primary light xl</span>
<span className="text-sm text-hallpass-primary">primary Default sm</span>
<span className="text-base text-hallpass-primary">primary Default base</span>
<span className="text-lg text-hallpass-primary">primary Default lg</span>
<span className="text-xl text-hallpass-primary">primary Default xl</span>
<span className="text-sm text-hallpass-primary-dark">primary dark sm</span>
<span className="text-base text-hallpass-primary-dark">primary dark base</span>
<span className="text-lg text-hallpass-primary-dark">primary dark lg</span>
<span className="text-xl text-hallpass-primary-dark">primary dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface-dark">
        <div className="text-lg font-bold text-black">dark Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-primary-light">primary light sm</span>
<span className="text-base text-hallpass-primary-light">primary light base</span>
<span className="text-lg text-hallpass-primary-light">primary light lg</span>
<span className="text-xl text-hallpass-primary-light">primary light xl</span>
<span className="text-sm text-hallpass-primary">primary Default sm</span>
<span className="text-base text-hallpass-primary">primary Default base</span>
<span className="text-lg text-hallpass-primary">primary Default lg</span>
<span className="text-xl text-hallpass-primary">primary Default xl</span>
<span className="text-sm text-hallpass-primary-dark">primary dark sm</span>
<span className="text-base text-hallpass-primary-dark">primary dark base</span>
<span className="text-lg text-hallpass-primary-dark">primary dark lg</span>
<span className="text-xl text-hallpass-primary-dark">primary dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-primary-light">
        <div className="text-lg font-bold text-white">light primary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-primary-light">primary light sm</span>
<span className="text-base text-hallpass-on-primary-light">primary light base</span>
<span className="text-lg text-hallpass-on-primary-light">primary light lg</span>
<span className="text-xl text-hallpass-on-primary-light">primary light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-primary">
        <div className="text-lg font-bold text-white">Default primary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-primary">primary Default sm</span>
<span className="text-base text-hallpass-on-primary">primary Default base</span>
<span className="text-lg text-hallpass-on-primary">primary Default lg</span>
<span className="text-xl text-hallpass-on-primary">primary Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-primary-dark">
        <div className="text-lg font-bold text-white">dark primary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-primary-dark">primary dark sm</span>
<span className="text-base text-hallpass-on-primary-dark">primary dark base</span>
<span className="text-lg text-hallpass-on-primary-dark">primary dark lg</span>
<span className="text-xl text-hallpass-on-primary-dark">primary dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-primary-light/10">
        <div className="text-lg font-bold text-black">light primary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-primary-light">primary light sm</span>
<span className="text-base font-medium text-hallpass-primary-light">primary light base</span>
<span className="text-lg font-medium text-hallpass-primary-light">primary light lg</span>
<span className="text-xl font-medium text-hallpass-primary-light">primary light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-primary/10">
        <div className="text-lg font-bold text-black">Default primary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-primary">primary Default sm</span>
<span className="text-base font-medium text-hallpass-primary">primary Default base</span>
<span className="text-lg font-medium text-hallpass-primary">primary Default lg</span>
<span className="text-xl font-medium text-hallpass-primary">primary Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-primary-dark/10">
        <div className="text-lg font-bold text-black">dark primary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-primary-dark">primary dark sm</span>
<span className="text-base font-medium text-hallpass-primary-dark">primary dark base</span>
<span className="text-lg font-medium text-hallpass-primary-dark">primary dark lg</span>
<span className="text-xl font-medium text-hallpass-primary-dark">primary dark xl</span>
        </div>
        </div>
      </div>
  </div></details>
  <details className="my-6">
    <summary className="cursor-pointer text-lg font-bold text-hallpass-secondary">Secondary</summary>
    <div className="p-8 border">
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-secondary-light">
        <span className="font-thin">light sm thin</span>
        <span className="font-light">light sm light</span>
        <span className="font-normal">light sm normal</span>
        <span className="font-semibold">light sm semibold</span>
        <span className="font-bold">light sm bold</span>
        <span className="font-black">light sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-secondary-light">
        <span className="font-thin">light base thin</span>
        <span className="font-light">light base light</span>
        <span className="font-normal">light base normal</span>
        <span className="font-semibold">light base semibold</span>
        <span className="font-bold">light base bold</span>
        <span className="font-black">light base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-secondary-light">
        <span className="font-thin">light lg thin</span>
        <span className="font-light">light lg light</span>
        <span className="font-normal">light lg normal</span>
        <span className="font-semibold">light lg semibold</span>
        <span className="font-bold">light lg bold</span>
        <span className="font-black">light lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-secondary-light">
        <span className="font-thin">light xl thin</span>
        <span className="font-light">light xl light</span>
        <span className="font-normal">light xl normal</span>
        <span className="font-semibold">light xl semibold</span>
        <span className="font-bold">light xl bold</span>
        <span className="font-black">light xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-secondary">
        <span className="font-thin">Default sm thin</span>
        <span className="font-light">Default sm light</span>
        <span className="font-normal">Default sm normal</span>
        <span className="font-semibold">Default sm semibold</span>
        <span className="font-bold">Default sm bold</span>
        <span className="font-black">Default sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-secondary">
        <span className="font-thin">Default base thin</span>
        <span className="font-light">Default base light</span>
        <span className="font-normal">Default base normal</span>
        <span className="font-semibold">Default base semibold</span>
        <span className="font-bold">Default base bold</span>
        <span className="font-black">Default base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-secondary">
        <span className="font-thin">Default lg thin</span>
        <span className="font-light">Default lg light</span>
        <span className="font-normal">Default lg normal</span>
        <span className="font-semibold">Default lg semibold</span>
        <span className="font-bold">Default lg bold</span>
        <span className="font-black">Default lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-secondary">
        <span className="font-thin">Default xl thin</span>
        <span className="font-light">Default xl light</span>
        <span className="font-normal">Default xl normal</span>
        <span className="font-semibold">Default xl semibold</span>
        <span className="font-bold">Default xl bold</span>
        <span className="font-black">Default xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-secondary-dark">
        <span className="font-thin">dark sm thin</span>
        <span className="font-light">dark sm light</span>
        <span className="font-normal">dark sm normal</span>
        <span className="font-semibold">dark sm semibold</span>
        <span className="font-bold">dark sm bold</span>
        <span className="font-black">dark sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-secondary-dark">
        <span className="font-thin">dark base thin</span>
        <span className="font-light">dark base light</span>
        <span className="font-normal">dark base normal</span>
        <span className="font-semibold">dark base semibold</span>
        <span className="font-bold">dark base bold</span>
        <span className="font-black">dark base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-secondary-dark">
        <span className="font-thin">dark lg thin</span>
        <span className="font-light">dark lg light</span>
        <span className="font-normal">dark lg normal</span>
        <span className="font-semibold">dark lg semibold</span>
        <span className="font-bold">dark lg bold</span>
        <span className="font-black">dark lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-secondary-dark">
        <span className="font-thin">dark xl thin</span>
        <span className="font-light">dark xl light</span>
        <span className="font-normal">dark xl normal</span>
        <span className="font-semibold">dark xl semibold</span>
        <span className="font-bold">dark xl bold</span>
        <span className="font-black">dark xl black</span>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-surface-light">
        <div className="text-lg font-bold text-black">light Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-secondary-light">secondary light sm</span>
<span className="text-base text-hallpass-secondary-light">secondary light base</span>
<span className="text-lg text-hallpass-secondary-light">secondary light lg</span>
<span className="text-xl text-hallpass-secondary-light">secondary light xl</span>
<span className="text-sm text-hallpass-secondary">secondary Default sm</span>
<span className="text-base text-hallpass-secondary">secondary Default base</span>
<span className="text-lg text-hallpass-secondary">secondary Default lg</span>
<span className="text-xl text-hallpass-secondary">secondary Default xl</span>
<span className="text-sm text-hallpass-secondary-dark">secondary dark sm</span>
<span className="text-base text-hallpass-secondary-dark">secondary dark base</span>
<span className="text-lg text-hallpass-secondary-dark">secondary dark lg</span>
<span className="text-xl text-hallpass-secondary-dark">secondary dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface">
        <div className="text-lg font-bold text-black">Default Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-secondary-light">secondary light sm</span>
<span className="text-base text-hallpass-secondary-light">secondary light base</span>
<span className="text-lg text-hallpass-secondary-light">secondary light lg</span>
<span className="text-xl text-hallpass-secondary-light">secondary light xl</span>
<span className="text-sm text-hallpass-secondary">secondary Default sm</span>
<span className="text-base text-hallpass-secondary">secondary Default base</span>
<span className="text-lg text-hallpass-secondary">secondary Default lg</span>
<span className="text-xl text-hallpass-secondary">secondary Default xl</span>
<span className="text-sm text-hallpass-secondary-dark">secondary dark sm</span>
<span className="text-base text-hallpass-secondary-dark">secondary dark base</span>
<span className="text-lg text-hallpass-secondary-dark">secondary dark lg</span>
<span className="text-xl text-hallpass-secondary-dark">secondary dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface-dark">
        <div className="text-lg font-bold text-black">dark Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-secondary-light">secondary light sm</span>
<span className="text-base text-hallpass-secondary-light">secondary light base</span>
<span className="text-lg text-hallpass-secondary-light">secondary light lg</span>
<span className="text-xl text-hallpass-secondary-light">secondary light xl</span>
<span className="text-sm text-hallpass-secondary">secondary Default sm</span>
<span className="text-base text-hallpass-secondary">secondary Default base</span>
<span className="text-lg text-hallpass-secondary">secondary Default lg</span>
<span className="text-xl text-hallpass-secondary">secondary Default xl</span>
<span className="text-sm text-hallpass-secondary-dark">secondary dark sm</span>
<span className="text-base text-hallpass-secondary-dark">secondary dark base</span>
<span className="text-lg text-hallpass-secondary-dark">secondary dark lg</span>
<span className="text-xl text-hallpass-secondary-dark">secondary dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-secondary-light">
        <div className="text-lg font-bold text-white">light secondary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-secondary-light">secondary light sm</span>
<span className="text-base text-hallpass-on-secondary-light">secondary light base</span>
<span className="text-lg text-hallpass-on-secondary-light">secondary light lg</span>
<span className="text-xl text-hallpass-on-secondary-light">secondary light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-secondary">
        <div className="text-lg font-bold text-white">Default secondary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-secondary">secondary Default sm</span>
<span className="text-base text-hallpass-on-secondary">secondary Default base</span>
<span className="text-lg text-hallpass-on-secondary">secondary Default lg</span>
<span className="text-xl text-hallpass-on-secondary">secondary Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-secondary-dark">
        <div className="text-lg font-bold text-white">dark secondary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-secondary-dark">secondary dark sm</span>
<span className="text-base text-hallpass-on-secondary-dark">secondary dark base</span>
<span className="text-lg text-hallpass-on-secondary-dark">secondary dark lg</span>
<span className="text-xl text-hallpass-on-secondary-dark">secondary dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-secondary-light/10">
        <div className="text-lg font-bold text-black">light secondary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-secondary-light">secondary light sm</span>
<span className="text-base font-medium text-hallpass-secondary-light">secondary light base</span>
<span className="text-lg font-medium text-hallpass-secondary-light">secondary light lg</span>
<span className="text-xl font-medium text-hallpass-secondary-light">secondary light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-secondary/10">
        <div className="text-lg font-bold text-black">Default secondary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-secondary">secondary Default sm</span>
<span className="text-base font-medium text-hallpass-secondary">secondary Default base</span>
<span className="text-lg font-medium text-hallpass-secondary">secondary Default lg</span>
<span className="text-xl font-medium text-hallpass-secondary">secondary Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-secondary-dark/10">
        <div className="text-lg font-bold text-black">dark secondary</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-secondary-dark">secondary dark sm</span>
<span className="text-base font-medium text-hallpass-secondary-dark">secondary dark base</span>
<span className="text-lg font-medium text-hallpass-secondary-dark">secondary dark lg</span>
<span className="text-xl font-medium text-hallpass-secondary-dark">secondary dark xl</span>
        </div>
        </div>
      </div>
  </div></details>
  <details className="my-6">
    <summary className="cursor-pointer text-lg font-bold text-hallpass-error">Error</summary>
    <div className="p-8 border">
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-error-light">
        <span className="font-thin">light sm thin</span>
        <span className="font-light">light sm light</span>
        <span className="font-normal">light sm normal</span>
        <span className="font-semibold">light sm semibold</span>
        <span className="font-bold">light sm bold</span>
        <span className="font-black">light sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-error-light">
        <span className="font-thin">light base thin</span>
        <span className="font-light">light base light</span>
        <span className="font-normal">light base normal</span>
        <span className="font-semibold">light base semibold</span>
        <span className="font-bold">light base bold</span>
        <span className="font-black">light base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-error-light">
        <span className="font-thin">light lg thin</span>
        <span className="font-light">light lg light</span>
        <span className="font-normal">light lg normal</span>
        <span className="font-semibold">light lg semibold</span>
        <span className="font-bold">light lg bold</span>
        <span className="font-black">light lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-error-light">
        <span className="font-thin">light xl thin</span>
        <span className="font-light">light xl light</span>
        <span className="font-normal">light xl normal</span>
        <span className="font-semibold">light xl semibold</span>
        <span className="font-bold">light xl bold</span>
        <span className="font-black">light xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-error">
        <span className="font-thin">Default sm thin</span>
        <span className="font-light">Default sm light</span>
        <span className="font-normal">Default sm normal</span>
        <span className="font-semibold">Default sm semibold</span>
        <span className="font-bold">Default sm bold</span>
        <span className="font-black">Default sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-error">
        <span className="font-thin">Default base thin</span>
        <span className="font-light">Default base light</span>
        <span className="font-normal">Default base normal</span>
        <span className="font-semibold">Default base semibold</span>
        <span className="font-bold">Default base bold</span>
        <span className="font-black">Default base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-error">
        <span className="font-thin">Default lg thin</span>
        <span className="font-light">Default lg light</span>
        <span className="font-normal">Default lg normal</span>
        <span className="font-semibold">Default lg semibold</span>
        <span className="font-bold">Default lg bold</span>
        <span className="font-black">Default lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-error">
        <span className="font-thin">Default xl thin</span>
        <span className="font-light">Default xl light</span>
        <span className="font-normal">Default xl normal</span>
        <span className="font-semibold">Default xl semibold</span>
        <span className="font-bold">Default xl bold</span>
        <span className="font-black">Default xl black</span>
      </div>
    <div className="my-2 w-full h-1 bg-slate-500"></div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-hallpass-error-dark">
        <span className="font-thin">dark sm thin</span>
        <span className="font-light">dark sm light</span>
        <span className="font-normal">dark sm normal</span>
        <span className="font-semibold">dark sm semibold</span>
        <span className="font-bold">dark sm bold</span>
        <span className="font-black">dark sm black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-base text-hallpass-error-dark">
        <span className="font-thin">dark base thin</span>
        <span className="font-light">dark base light</span>
        <span className="font-normal">dark base normal</span>
        <span className="font-semibold">dark base semibold</span>
        <span className="font-bold">dark base bold</span>
        <span className="font-black">dark base black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-lg text-hallpass-error-dark">
        <span className="font-thin">dark lg thin</span>
        <span className="font-light">dark lg light</span>
        <span className="font-normal">dark lg normal</span>
        <span className="font-semibold">dark lg semibold</span>
        <span className="font-bold">dark lg bold</span>
        <span className="font-black">dark lg black</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 text-xl text-hallpass-error-dark">
        <span className="font-thin">dark xl thin</span>
        <span className="font-light">dark xl light</span>
        <span className="font-normal">dark xl normal</span>
        <span className="font-semibold">dark xl semibold</span>
        <span className="font-bold">dark xl bold</span>
        <span className="font-black">dark xl black</span>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-surface-light">
        <div className="text-lg font-bold text-black">light Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-error-light">error light sm</span>
<span className="text-base text-hallpass-error-light">error light base</span>
<span className="text-lg text-hallpass-error-light">error light lg</span>
<span className="text-xl text-hallpass-error-light">error light xl</span>
<span className="text-sm text-hallpass-error">error Default sm</span>
<span className="text-base text-hallpass-error">error Default base</span>
<span className="text-lg text-hallpass-error">error Default lg</span>
<span className="text-xl text-hallpass-error">error Default xl</span>
<span className="text-sm text-hallpass-error-dark">error dark sm</span>
<span className="text-base text-hallpass-error-dark">error dark base</span>
<span className="text-lg text-hallpass-error-dark">error dark lg</span>
<span className="text-xl text-hallpass-error-dark">error dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface">
        <div className="text-lg font-bold text-black">Default Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-error-light">error light sm</span>
<span className="text-base text-hallpass-error-light">error light base</span>
<span className="text-lg text-hallpass-error-light">error light lg</span>
<span className="text-xl text-hallpass-error-light">error light xl</span>
<span className="text-sm text-hallpass-error">error Default sm</span>
<span className="text-base text-hallpass-error">error Default base</span>
<span className="text-lg text-hallpass-error">error Default lg</span>
<span className="text-xl text-hallpass-error">error Default xl</span>
<span className="text-sm text-hallpass-error-dark">error dark sm</span>
<span className="text-base text-hallpass-error-dark">error dark base</span>
<span className="text-lg text-hallpass-error-dark">error dark lg</span>
<span className="text-xl text-hallpass-error-dark">error dark xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-surface-dark">
        <div className="text-lg font-bold text-black">dark Surface</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-error-light">error light sm</span>
<span className="text-base text-hallpass-error-light">error light base</span>
<span className="text-lg text-hallpass-error-light">error light lg</span>
<span className="text-xl text-hallpass-error-light">error light xl</span>
<span className="text-sm text-hallpass-error">error Default sm</span>
<span className="text-base text-hallpass-error">error Default base</span>
<span className="text-lg text-hallpass-error">error Default lg</span>
<span className="text-xl text-hallpass-error">error Default xl</span>
<span className="text-sm text-hallpass-error-dark">error dark sm</span>
<span className="text-base text-hallpass-error-dark">error dark base</span>
<span className="text-lg text-hallpass-error-dark">error dark lg</span>
<span className="text-xl text-hallpass-error-dark">error dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-error-light">
        <div className="text-lg font-bold text-white">light error</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-error-light">error light sm</span>
<span className="text-base text-hallpass-on-error-light">error light base</span>
<span className="text-lg text-hallpass-on-error-light">error light lg</span>
<span className="text-xl text-hallpass-on-error-light">error light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-error">
        <div className="text-lg font-bold text-white">Default error</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-error">error Default sm</span>
<span className="text-base text-hallpass-on-error">error Default base</span>
<span className="text-lg text-hallpass-on-error">error Default lg</span>
<span className="text-xl text-hallpass-on-error">error Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-error-dark">
        <div className="text-lg font-bold text-white">dark error</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm text-hallpass-on-error-dark">error dark sm</span>
<span className="text-base text-hallpass-on-error-dark">error dark base</span>
<span className="text-lg text-hallpass-on-error-dark">error dark lg</span>
<span className="text-xl text-hallpass-on-error-dark">error dark xl</span>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="p-4 bg-hallpass-error-light/10">
        <div className="text-lg font-bold text-black">light error</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-error-light">error light sm</span>
<span className="text-base font-medium text-hallpass-error-light">error light base</span>
<span className="text-lg font-medium text-hallpass-error-light">error light lg</span>
<span className="text-xl font-medium text-hallpass-error-light">error light xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-error/10">
        <div className="text-lg font-bold text-black">Default error</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-error">error Default sm</span>
<span className="text-base font-medium text-hallpass-error">error Default base</span>
<span className="text-lg font-medium text-hallpass-error">error Default lg</span>
<span className="text-xl font-medium text-hallpass-error">error Default xl</span>
        </div>
        </div>
        <div className="p-4 bg-hallpass-error-dark/10">
        <div className="text-lg font-bold text-black">dark error</div>
        <div className="flex flex-wrap items-center gap-x-4">
<span className="text-sm font-medium text-hallpass-error-dark">error dark sm</span>
<span className="text-base font-medium text-hallpass-error-dark">error dark base</span>
<span className="text-lg font-medium text-hallpass-error-dark">error dark lg</span>
<span className="text-xl font-medium text-hallpass-error-dark">error dark xl</span>
        </div>
        </div>
      </div>
  </div></details>
</div></details>
<details className="my-12 view-area"><summary className="cursor-pointer font-bold text-xl">Fonts</summary><div className="my-4 pl-4 border-l-8 border-slate-300">
  <details className="my-6">
        <summary className="cursor-pointer text-lg font-bold">Typography Plugin <code>prose</code></summary>
        <div className="p-8 border">
<p className="mb-4 prose-sm"><strong>prose-sm</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
<p className="mb-4 prose"><strong>prose</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
<p className="mb-4 prose-lg"><strong>prose-lg</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
<p className="mb-4 prose-xl"><strong>prose-xl</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>
</div></details>
  <details className="my-6">
        <summary className="cursor-pointer text-lg font-bold">Sans</summary>
        <div className="p-8 border font-sans">
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
</div></details>
  <details className="my-6">
        <summary className="cursor-pointer text-lg font-bold">Serif</summary>
        <div className="p-8 border font-serif">
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
</div></details>
  <details className="my-6">
        <summary className="cursor-pointer text-lg font-bold">Mono</summary>
        <div className="p-8 border font-mono">
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
</div></details>
  <details className="my-6">
        <summary className="cursor-pointer text-lg font-bold">Brand</summary>
        <div className="p-8 border font-brand">
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
</div></details>
</div></details>
<details className="my-12 view-area"><summary className="cursor-pointer font-bold text-xl">UI Elements</summary><div className="my-4 pl-4 border-l-8 border-slate-300">
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
</div></details>
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
);
}