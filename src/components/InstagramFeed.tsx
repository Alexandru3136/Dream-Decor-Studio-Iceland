"use client";

import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

type BeholdPost = {
  id: string;
  permalink: string;
  mediaType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  prunedCaption?: string;
  sizes?: {
    small?: { mediaUrl?: string };
    medium?: { mediaUrl?: string };
  };
};

const MAX_POSTS = 8;

function imageFor(post: BeholdPost): string | undefined {
  // Prefer a resized thumbnail; fall back to the full media or a video poster.
  return (
    post.sizes?.medium?.mediaUrl ??
    post.sizes?.small?.mediaUrl ??
    (post.mediaType === "VIDEO" ? post.thumbnailUrl : post.mediaUrl) ??
    post.mediaUrl
  );
}

export function InstagramFeed({
  feedId,
  profileUrl,
  handle,
  follow
}: {
  feedId?: string;
  profileUrl: string;
  handle: string;
  follow: string;
}) {
  const [posts, setPosts] = useState<BeholdPost[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!feedId) {
      setFailed(true);
      return;
    }

    let active = true;
    fetch(`https://feeds.behold.so/${feedId}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Behold ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        const list: BeholdPost[] = Array.isArray(data) ? data : (data.posts ?? []);
        if (list.length === 0) {
          setFailed(true);
          return;
        }
        setPosts(list.slice(0, MAX_POSTS));
      })
      .catch(() => active && setFailed(true));

    return () => {
      active = false;
    };
  }, [feedId]);

  // Graceful fallback: a follow card when the feed is not configured or unavailable.
  if (failed || (posts && posts.length === 0)) {
    return (
      <div className="ig-fallback">
        <Instagram size={30} aria-hidden="true" />
        <a className="button primary" href={profileUrl} target="_blank" rel="noreferrer">
          {follow} {handle}
        </a>
      </div>
    );
  }

  if (!posts) {
    return (
      <div className="ig-grid" aria-hidden="true">
        {Array.from({ length: MAX_POSTS }).map((_, index) => (
          <div className="ig-item ig-skeleton" key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="ig-grid">
        {posts.map((post) => {
          const src = imageFor(post);
          if (!src) return null;
          return (
            <a
              className="ig-item"
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              aria-label={post.prunedCaption?.slice(0, 80) || "Instagram post"}
            >
              {/* Behold serves images from external CDNs, so a plain img avoids remote-domain config. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={post.prunedCaption?.slice(0, 120) || ""} loading="lazy" />
              <span className="ig-overlay">
                <Instagram size={20} aria-hidden="true" />
              </span>
            </a>
          );
        })}
      </div>
      <div className="ig-follow">
        <a className="button secondary" href={profileUrl} target="_blank" rel="noreferrer">
          <Instagram size={18} aria-hidden="true" />
          {follow} {handle}
        </a>
      </div>
    </>
  );
}
