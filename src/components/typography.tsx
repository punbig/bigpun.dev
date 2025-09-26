export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
      {children}
    </h1>
  );
}

export function SectionParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground text-sm md:text-base lg:text-lg xl:text-xl">
      {children}
    </p>
  );
}
