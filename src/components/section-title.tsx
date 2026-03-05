type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-copper">
          <span className="inline-block h-px w-6 bg-brand-copper" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-brand-green md:text-5xl">{title}</h2>
      {description ? <p className="mt-3 text-brand-green/70">{description}</p> : null}
    </div>
  );
}
