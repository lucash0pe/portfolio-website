import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "prismjs/themes/prism-twilight.css";

const mdComponents: Components = {
  h1: (props) => (
    <h1 className="mt-0 mb-4 text-3xl font-semibold tracking-tight" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-10 mb-3 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-2 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="my-4 leading-7 text-foreground/90" {...props} />,
  a: (props) => (
    <a
      className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-4 ml-6 list-disc space-y-2" {...props} />,
  ol: (props) => <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />,
  li: (props) => <li className="leading-7 text-foreground/90" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-6 border-l-2 border-border pl-4 text-foreground/80" {...props} />
  ),

  code: ({ className, children, ...props }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="rounded-md border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[0.92em] text-foreground/90"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },

  pre: (props) => (
    <pre
      className="
        my-6 overflow-x-auto rounded-2xl
        border border-border
        bg-muted/30
        p-5 text-sm leading-6
        shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.45)]
      "
      style={{ tabSize: 4 }}
      {...props}
    />
  ),

  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-muted/40" {...props} />,
  th: (props) => <th className="px-3 py-2 text-left font-medium" {...props} />,
  td: (props) => <td className="px-3 py-2 align-top" {...props} />,

  img: (props) => (
    <img
      className="my-6 max-h-[520px] w-auto max-w-full rounded-xl border border-border mx-auto"
      loading="lazy"
      {...props}
    />
  ),

  hr: (props) => <hr className="my-10 border-border" {...props} />,
};

export function Markdown({
  md,
  hideH1 = false,
}: {
  md: string;
  hideH1?: boolean;
}) {
  const components: Components = {
    ...mdComponents,
    h1: hideH1
      ? () => null
      : (props) => (
          <h1
            className="mt-0 mb-4 text-3xl font-semibold tracking-tight"
            {...props}
          />
        ),
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypePrism]}
      components={components}
    >
      {md}
    </ReactMarkdown>
  );
}

