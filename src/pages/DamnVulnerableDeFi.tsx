import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import {
  DAMN_VULNERABLE_DEFI_CHALLENGES,
  DAMN_VULNERABLE_DEFI_WEBSITE_URL,
  DAMN_VULNERABLE_DEFI_REPO_URL,
  getDamnVulnerableDeFiChallengeSlug,
} from "@/data/damn-vulnerable-defi";

export default function DamnVulnerableDeFi() {
  const cardClass =
    "group rounded-2xl border border-border bg-background/60 px-4 py-3 transition hover:bg-muted/30 hover:border-border/80";

  const navLinkClass =
    "text-sm font-light text-muted-foreground transition hover:text-foreground";

  const scrollToChallenges = () => {
    const el = document.getElementById("challenges-scroll");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // // Nudge up so it doesn't land so low / tight
    // setTimeout(() => {
    //   window.scrollBy({ top: -120, left: 0, behavior: "smooth" });
    // }, 250);
  };

  return (
    <>
      <SEOHead
        title="Damn Vulnerable DeFi"
        description="Damn Vulnerable DeFi v4.1.0 challenge reports"
      />

      <div className="min-h-screen">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 pt-14 md:pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
              Damn Vulnerable DeFi
            </h1>
            <div className="mt-10 flex items-center justify-center">
              <div className="flex w-full max-w-2xl items-center gap-8">
                <div className="h-[3px] flex-1 bg-foreground/25" />
                <div className="flex items-center gap-10 px-3">
                  <a
                    href={DAMN_VULNERABLE_DEFI_WEBSITE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-light tracking-wide text-muted-foreground transition hover:text-foreground"
                  >
                    Official Site
                  </a>
                  <a
                    href={DAMN_VULNERABLE_DEFI_REPO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-light tracking-wide text-muted-foreground transition hover:text-foreground"
                  >
                    GitHub Repo
                  </a>
                </div>
                <div className="h-[3px] flex-1 bg-foreground/25" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <p className="mt-4 text-left text-sm md:text-base font-light leading-7 text-muted-foreground">
              <span className="text-foreground">Damn Vulnerable DeFi</span> is a
              training ground for smart contract security. It contains
              challenges featuring flashloans, price oracles, governance, NFTs,
              DEXs, lending pools, smart contract wallets, timelocks, vaults,
              meta-transactions, token distributions, upgradeability, and more.
            </p>
            <p className="mt-4 text-left text-sm md:text-base font-light leading-7 text-muted-foreground">
              My security reports for{" "}
              <span className="text-foreground">
                version 4.1.0
              </span>{" "}
              challenges are available below.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-background/60 p-5">
              <h3 className="text-md font-bold tracking-wide text-foreground ">
                Rules
              </h3>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm font-normal leading-6 text-muted-foreground">
                <li>You must always use the player account.</li>
                <li>
                  You must not modify the challenges&apos; initial nor final
                  conditions.
                </li>
                <li>You can code and deploy your own smart contracts.</li>
                <li>
                  You can use Foundry&apos;s cheatcodes to advance time when
                  necessary.
                </li>
                <li>
                  You can import external libraries that aren&apos;t installed,
                  although it shouldn&apos;t be necessary.
                </li>
              </ul>
            </div>

            {/* SCROLL (like hero) */}
            <div className="mt-10 flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={scrollToChallenges}
                className="group flex flex-col items-center gap-2 text-muted-foreground transition hover:text-foreground"
                aria-label="Scroll to challenges"
              >
                <span className="text-xs font-light tracking-[0.35em]">
                  CHALLENGE REPORTS
                </span>

                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-muted/10 transition group-hover:bg-muted/25 group-hover:translate-y-0.5">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </div>
          </motion.div>

          <div id="challenges-scroll" className="-mt-16 pt-24" />


          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-14 space-y-4"
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {DAMN_VULNERABLE_DEFI_CHALLENGES.map((c) => {
                const slug = getDamnVulnerableDeFiChallengeSlug(c);
                const disabled = !c.completed;

                const content = (
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 shrink-0 text-left text-sm font-light tabular-nums text-muted-foreground">
                        {c.number}
                      </span>

                      <span className="font-light tracking-wide">{c.name}</span>
                    </div>

                    <span className="text-xs font-light text-muted-foreground transition group-hover:text-foreground/80">
                      {disabled ? "Coming soon" : "View"}
                    </span>
                  </div>
                );

                if (disabled) {
                  return (
                    <div
                      key={slug}
                      className={`${cardClass} cursor-not-allowed opacity-50 hover:bg-background/60`}
                      aria-disabled="true"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <Link
                    key={slug}
                    to={`/damn-vulnerable-defi/${slug}`}
                    className={cardClass}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="h-12" />
      </div>
    </>
  );
}
