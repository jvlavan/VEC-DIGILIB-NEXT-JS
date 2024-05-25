export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#0f172a]">
      <div className="">{children}</div>
    </section>
  );
}
