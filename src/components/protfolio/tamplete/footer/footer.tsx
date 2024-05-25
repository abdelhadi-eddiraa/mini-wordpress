import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="sticky bottom-0 flex flex-col justify-between gap-12 px-4 py-7 md:flex-col md:gap-x-12 md:px-10 lg:flex-row">
  <div className="flex flex-col items-start gap-4 md:w-full lg:w-fit">
    <a href="/">
      <img
        alt="Skiff Logo"
        className="h-11 ls-is-cached lazyloaded"
        data-nimg="1"
        data-src="https://cdn.sanity.io/images/sdd9dua4/production/07da4f72b24a1e98db8ac9ab6b04e090bc585f8f-163x64.svg?fit=max&auto=format"
        decoding="async"
        height="44"
        loading="lazy"
        src="https://cdn.sanity.io/images/sdd9dua4/production/07da4f72b24a1e98db8ac9ab6b04e090bc585f8f-163x64.svg?fit=max&auto=format"
        srcSet="https://cdn.sanity.io/images/sdd9dua4/production/07da4f72b24a1e98db8ac9ab6b04e090bc585f8f-163x64.svg?fit=max&auto=format 1x, https://cdn.sanity.io/images/sdd9dua4/production/07da4f72b24a1e98db8ac9ab6b04e090bc585f8f-163x64.svg?fit=max&auto=format 2x"
        style={{
          color: 'transparent'
        }}
        width="116"
      />
    </a>
    <div className="flex flex-row gap-2 md:gap-0" />
    <span className="font-sans text-base font-normal text-gray-400">
      © 2024. All rights reserved.
    </span>
  </div>
  <div className="flex h-fit flex-row flex-wrap gap-x-4 gap-y-12 overflow-hidden pb-10">
    <div className="flex w-40 flex-col gap-2">
      <span className="font-mono text-xs font-normal uppercase text-gray-500">
        Products
      </span>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/mail"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Mail
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/pages"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Pages
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/drive"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Drive
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/calendar"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Calendar
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/download"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Download
        </span>
      </a>
    </div>
    <div className="flex w-40 flex-col gap-2">
      <span className="font-mono text-xs font-normal uppercase text-gray-500">
        Resources
      </span>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/data-migration"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Help
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="https://skiff.com/changelog"
        rel="noreferrer, noopener"
        target="_blank"
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Changelog
        </span>
      </a>
    </div>
    <div className="flex w-40 flex-col gap-2">
      <span className="font-mono text-xs font-normal uppercase text-gray-500">
        Developer
      </span>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="https://github.com/skiff-org"
        rel="noreferrer, noopener"
        target="_blank"
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          GitHub
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/open-source"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Libraries
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="https://skiff.com/skiff-crypto"
        rel="noreferrer, noopener"
        target="_blank"
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Skiff Crypto docs
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="https://skiff.com/ui"
        rel="noreferrer, noopener"
        target="_blank"
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Skiff UI docs
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/security-model"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Whitepaper
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/report"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Report an issue
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="https://status.skiff.com/"
        rel="noreferrer, noopener"
        target="_blank"
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Status
        </span>
      </a>
    </div>
    <div className="flex w-40 flex-col gap-2">
      <span className="font-mono text-xs font-normal uppercase text-gray-500">
        Legal
      </span>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="/annotated-privacy-policy"
        rel="noreferrer, noopener"
        target=""
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Privacy policy
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="https://app.skiff.com/docs/8e50d705-8d48-4434-922e-bdad09d0e4be#TmfvNJY4Wel9br9jd3Tl3raiiQcsWYcXCe76ToaAsyw="
        rel="noreferrer, noopener"
        target="_blank"
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Terms of service
        </span>
      </a>
      <a
        className="outline-blue-400 focus:border-blue-400 focus:ring-blue-400"
        href="https://app.skiff.com/docs/c682c6a4-4fde-4e98-95b2-6a85085fdbde#uceeiqhn1+oMDjoItzLjhXwy4Rk7YVaFd1heNKuhDSo="
        rel="noreferrer, noopener"
        target="_blank"
      >
        <span className="font-sans text-base font-normal text-gray-800 hover:opacity-80">
          Acceptable use policy
        </span>
      </a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Footer