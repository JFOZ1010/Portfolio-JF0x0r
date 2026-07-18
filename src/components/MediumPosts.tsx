"use client";
import React, { useEffect, useState } from "react";

interface MediumItem {
  title: string;
  link: string;
  description: string;
}
// @JF0x0r -> Que carajos escucho mientras tiro codigo? 50 Cent - What Up Gangsta. 
export function MediumPosts() {
  const staticPosts = [
    {
      title: "My NASA Recognition Letter: What's Behind the Achievement",
      description: "The real story behind receiving an official Letter of Appreciation from NASA's VDP - the research process, responsible disclosure, and what it means in practice.",
      tag: "Bug Bounty",
      tagClass: "text-green-400 bg-green-400/10",
      url: "https://medium.com/@juanfelipeoz.rar/mi-carta-de-reconocimiento-por-la-nasa-lo-que-no-se-ve-detr%C3%A1s-del-logro-59c6cb59671c"
    },
    {
      // Placholder for dynamic
    },
    {
      title: "How I Passed the eWPTX - And What Actually Matters",
      description: "A straightforward breakdown of the eWPTXv3 exam: what to study, what to skip, and the techniques that made the real difference on exam day.",
      tag: "Certification",
      tagClass: "text-blue-400 bg-blue-400/10",
      url: "https://medium.com/@juanfelipeoz.rar/how-i-passed-the-ewptx-and-what-actually-matters-c4d6ad439c90"
    },
    {
      title: "Keccak States & SHA-3: The Power Behind Modern Cryptography",
      description: "How the sponge construction and Keccak permutation work under the hood - from state matrix to the foundation of SHA-3.",
      tag: "Cryptography",
      tagClass: "text-purple-400 bg-purple-400/10",
      url: "https://medium.com/@juanfelipeoz.rar/la-fuerza-detr%C3%A1s-de-la-criptograf%C3%ADa-moderna-los-estados-keccak-y-la-construcci%C3%B3n-esponja-en-sha-3-3a1094b3a014"
    }
  ];

  const fallbackDynamic = {
    title: "CVE-2025-29927: Next.js Middleware Authentication Bypass",
    description: "Deep dive into a critical vulnerability that allowed bypassing authentication middleware in Next.js applications via header manipulation.",
    tag: "CVE / Research",
    tagClass: "text-red-400 bg-red-400/10",
    url: "https://medium.com/@juanfelipeoz.rar/cve-2025-29927-bypass-de-middleware-en-next-js-80e900285cf5"
  };

  const [dynamicPost, setDynamicPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();

        if (data.status === "ok" && data.items && data.items.length > 0) {
          const excludeStrings = [
            "mi-carta-de-reconocimiento-por-la-nasa",
            "bscp",
            "how-i-passed-the-ewptx",
            "keccak"
          ];

          const newPostItem = data.items.find((item: MediumItem) => {
            const lowerLink = item.link.toLowerCase();
            return !excludeStrings.some(ex => lowerLink.includes(ex));
          });

          if (newPostItem) {
            let pTitle = newPostItem.title.toLowerCase();
            let pUrl = newPostItem.link.toLowerCase();
            let tag = "Hacking";
            let tagClass = "text-orange-400 bg-orange-400/10";
            let desc = "Hands-on security research, exploitation techniques, and practical offensive security insights.";

            const toCheck = pTitle + " " + pUrl;

            if (toCheck.includes("nasa") || toCheck.includes("bugbounty") || toCheck.includes("bug-bounty")) {
              tag = "Bug Bounty";
              tagClass = "text-green-400 bg-green-400/10";
              desc = "Vulnerability research and responsible disclosure findings from public bug bounty programs.";
            } else if (toCheck.includes("cve")) {
              tag = "CVE / Research";
              tagClass = "text-red-400 bg-red-400/10";
              desc = "Technical deep dive into a discovered vulnerability, covering exploitation and responsible disclosure.";
            } else if (toCheck.includes("bscp") || toCheck.includes("cert")) {
              tag = "Certification";
              tagClass = "text-blue-400 bg-blue-400/10";
              desc = "Personal experience and study breakdown for an offensive security certification.";
            } else if (toCheck.includes("keccak") || toCheck.includes("crypto")) {
              tag = "Cryptography";
              tagClass = "text-purple-400 bg-purple-400/10";
              desc = "Exploring cryptographic concepts and their practical implications in modern security.";
            }

            setDynamicPost({
              title: newPostItem.title,
              description: desc,
              tag: tag,
              tagClass: tagClass,
              url: newPostItem.link
            });
          } else {
            setDynamicPost(fallbackDynamic);
          }
        } else {
          setDynamicPost(fallbackDynamic);
        }
      } catch (err) {
        setDynamicPost(fallbackDynamic);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const renderPostCard = (post: any) => (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="block border border-neutral-800 bg-neutral-900/40 rounded-lg p-4 hover:border-green-500/40 hover:bg-neutral-900/70 transition-all duration-300">
      <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
      <p className="text-sm text-neutral-400 mb-3 line-clamp-2">{post.description}</p>
      <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${post.tagClass}`}>{post.tag}</span>
    </a>
  );

  return (
    <div className="flex flex-col gap-4">
      {renderPostCard(staticPosts[0])}

      {loading ? (
        <div className="block border border-neutral-800 bg-neutral-900/40 rounded-lg p-4 h-[130px] animate-pulse">
          <div className="h-6 bg-neutral-800 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-neutral-800 rounded w-full mb-1"></div>
          <div className="h-4 bg-neutral-800 rounded w-5/6 mb-3"></div>
          <div className="h-5 bg-neutral-800 rounded w-24"></div>
        </div>
      ) : (
        renderPostCard(dynamicPost)
      )}

      {renderPostCard(staticPosts[2])}
      {renderPostCard(staticPosts[3])}

      <a href="https://medium.com/@juanfelipeoz.rar" target="_blank" rel="noopener noreferrer" className="mt-4 text-neutral-500 hover:text-white text-sm transition-colors border-none bg-transparent text-left w-fit block decoration-transparent leading-none h-auto">
        Read all posts on Medium →
      </a>
    </div>
  );
}
