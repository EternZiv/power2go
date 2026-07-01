import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles, getAdjacentArticles } from "@/lib/blog";
import { Breadcrumb } from "@/components/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Power2Go Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const { prev, next } = getAdjacentArticles(slug);

  const contentHtml = article.content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      if (line.startsWith("## ")) return { type: "h2" as const, text: line.slice(3) };
      if (line.startsWith("### ")) return { type: "h3" as const, text: line.slice(4) };
      if (line.startsWith("**") && line.endsWith("**")) return { type: "bold" as const, text: line.slice(2, -2) };
      if (line.startsWith("|")) return { type: "table" as const, text: line };
      if (line.startsWith("- ")) return { type: "li" as const, text: line.slice(2) };
      if (/^\d+\.\s/.test(line)) return { type: "li" as const, text: line.replace(/^\d+\.\s/, "") };
      return { type: "p" as const, text: line };
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "Power2Go",
      logo: { "@type": "ImageObject", url: "https://power2go.energy/logo-light.png" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: article.title }]} className="[&_*]:text-white/60" />
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20">{article.category}</span>
              <span className="text-white/50 text-xs">{article.date}</span>
              <span className="text-white/50 text-xs">{article.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
            <p className="text-white/70 text-lg">{article.excerpt}</p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold">
                {article.author.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">{article.author}</p>
                <p className="text-white/50 text-xs">{article.date} · {article.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              {article.image && (
                <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-gray-100">
                  <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
                </div>
              )}

              <div className="prose prose-gray max-w-none">
                {contentHtml.map((block, i) => {
                  if (block.type === "h2") return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{block.text}</h2>;
                  if (block.type === "h3") return <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{block.text}</h3>;
                  if (block.type === "p") return <p key={i} className="text-gray-600 leading-relaxed mb-5">{block.text}</p>;
                  if (block.type === "bold") return <p key={i} className="font-bold text-gray-800 mb-3">{block.text}</p>;
                  if (block.type === "li") return <li key={i} className="text-gray-600 ml-6 mb-1.5 list-disc">{block.text}</li>;
                  if (block.type === "table") {
                    const cells = block.text.split("|").filter(Boolean).map((c) => c.trim());
                    if (cells.length <= 3) return null;
                    const isHeader = block.text.includes("---");
                    if (isHeader) return null;
                    const cols = 3;
                    const rows: string[][] = [];
                    for (let j = 0; j < cells.length; j += cols) {
                      rows.push(cells.slice(j, j + cols));
                    }
                    return (
                      <div key={i} className="overflow-x-auto my-6">
                        <table className="w-full text-sm border-collapse">
                          <tbody>
                            {rows.map((row, ri) => (
                              <tr key={ri} className={ri === 0 ? "bg-gray-50 font-semibold" : "border-t border-gray-100"}>
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-4 py-3 text-gray-700">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500">Share:</span>
                {[
                  { label: "Twitter", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://power2go.energy/blog/${article.slug}`)}` },
                  { label: "LinkedIn", href: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://power2go.energy/blog/${article.slug}`)}` },
                  { label: "Facebook", href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://power2go.energy/blog/${article.slug}`)}` },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>

              {(prev || next) && (
                <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-gray-100">
                  {prev ? (
                    <Link href={`/blog/${prev.slug}`} className="group p-4 rounded-xl border border-gray-200 hover:border-[#1447E6] hover:shadow-sm transition-all">
                      <span className="text-xs text-gray-400 font-medium">&larr; Previous</span>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#1447E6] transition-colors mt-1 line-clamp-2">{prev.title}</p>
                    </Link>
                  ) : <div />}
                  {next ? (
                    <Link href={`/blog/${next.slug}`} className="group p-4 rounded-xl border border-gray-200 hover:border-[#1447E6] hover:shadow-sm transition-all text-right">
                      <span className="text-xs text-gray-400 font-medium">Next &rarr;</span>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#1447E6] transition-colors mt-1 line-clamp-2">{next.title}</p>
                    </Link>
                  ) : <div />}
                </div>
              )}
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
                    {contentHtml.filter((b) => b.type === "h2").map((h, i) => (
                      <li key={i}>
                        <a href={`#section-${i}`} className="text-sm text-gray-500 hover:text-[#1447E6] transition-colors">{h.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {article.tags.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white rounded-lg text-xs font-medium text-gray-600 border border-gray-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-card group">
                  <div className="relative h-40 bg-gray-100 overflow-hidden">
                    <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-white bg-[#1447E6] mb-2">{r.category}</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#1447E6] transition-colors text-sm leading-snug line-clamp-2">{r.title}</h3>
                    <p className="text-xs text-gray-400 mt-2">{r.date} · {r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9] opacity-95" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on energy storage technology.
          </p>
          <Link href="/blog" className="group inline-flex items-center gap-2 px-8 py-3 max-sm:min-h-[44px] bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-200">
            Browse All Articles
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
