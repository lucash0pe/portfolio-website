import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Markdown } from "@/components/Markdown";

import {
  DAMN_VULNERABLE_DEFI_CHALLENGES,
  getAllDamnVulnerableDeFiChallengeURLs,
} from "@/data/damn-vulnerable-defi";
import { ArrowLeft } from "lucide-react";


export default function DamnVulnerableDeFiChallengeReport() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [md, setMd] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const challenge = useMemo(() => {
    if (!slug) return null;

    const match = slug.match(/^(\d{1,2})-(.+)$/);
    if (!match) return null;

    const num = Number(match[1]);
    const path = match[2];

    if (!Number.isFinite(num)) return null;

    return DAMN_VULNERABLE_DEFI_CHALLENGES.find(
      (c) => c.number === num && c.path === path
    ) ?? null;

  }, [slug]);

  const [
    reportUrl, 
    challengeUrl, 
    contractsURL, 
    testSetupURL, 
    completionImageUrl
  ] = useMemo(() => {
    if (!challenge) return [null, null, null, null, null] as const;
    return getAllDamnVulnerableDeFiChallengeURLs(challenge);
  }, [challenge]);

  /*
   * Fetch the report markdown
   */
  useEffect(() => {
    if (!reportUrl) {
      setLoading(false)
      return
    }

    if (!challenge?.completed) {
      setLoading(false)
      return
    }

    let cancelled = false

    const run = async () => {
      setLoading(true)
      setErr(null)

      try {
        const res = await fetch(reportUrl)

        if (!res.ok) {
          throw new Error(`Failed to fetch markdown (${res.status})`)
        }

        const text = await res.text()

        if (!cancelled) {
          setMd(text)
        }
      } catch (e) {
        if (!cancelled) {
          const msg =
            e instanceof Error
              ? e.message
              : "Unknown error"

          setErr(msg)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [reportUrl, challenge?.completed])


  return (
    <div className="min-h-screen px-6 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto">

        { loading ? (
            <div className="p-6 text-muted-foreground">Loading…</div>
          ) : err ? (
            <div className="rounded-2xl border border-border p-6">
              <div className="text-red-500 font-light mb-2">Error: {err}</div>
              {reportUrl && (
                <div className="text-sm text-muted-foreground font-light">
                  Tried: <span className="font-mono">{reportUrl}</span>
                </div>
              )}
            </div>
          ) : (
            <>
            <div className="grid grid-cols-[44px_1fr_44px] items-center">
              <button
                onClick={() => navigate("/damn-vulnerable-defi#challenges-scroll")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/10 hover:bg-muted/25 transition"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <h1 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight truncate">
                {challenge ? challenge.name : "Unknown Challenge"}
              </h1>

              <div aria-hidden="true" className="h-20 w-11" />
            </div>

            {challenge ? (
              <>
                {/* Links row */}
                <nav className="mt-6" aria-label="Challenge links">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />

                    <div className="flex items-center gap-2">
                      {linkPill("Challenge", challengeUrl)}
                      {linkPill("Contracts", contractsURL)}
                      {linkPill("Test Setup", testSetupURL)}
                    </div>

                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                </nav>
                
                {!challenge.completed ? (
                  <div className="mt-14 flex justify-center">
                    <div className="w-full max-w-xl rounded-2xl border border-border bg-muted/10 p-8 text-center">
                      <div className="text-sm font-medium text-foreground/90 pb-4">
                        Report coming soon
                      </div>
                      <div className="mt-3 text-sm text-muted-foreground">
                        This challenge has been completed but the report isn’t published yet.
                      </div>
                      <div className="mt-3 text-sm text-muted-foreground">
                        Check back soon.
                      </div>
                      <div className="mx-auto mt-6  w-24 bg-border/60" />
                    </div>
                  </div>
                ) : (
                  <main className="mt-10 max-w-none">
                    <Markdown md={md} hideH1 />
                    <img
                      src={completionImageUrl}
                      alt="Test Passed"
                      className="h-18 w-full object-cover rounded-2xl object-contain object-left"
                    />
                  </main>
                )}
              </>
            ) : null}
            </>
          )}
      </div>
    </div>
  );
}


const linkPill = (label: string, url?: string | null) => {
  const disabled = !url;

  return (
    <a
      href={url || undefined}
      target="_blank"
      rel="noreferrer"
      aria-disabled={disabled}
      className={[
        "rounded-full px-3 py-1 text-sm transition",
        disabled
          ? "pointer-events-none text-white/30"
          : "text-white/70 hover:text-white",
        "hover:bg-white/5",
      ].join(" ")}
    >
      {label}
    </a>
  );
};

