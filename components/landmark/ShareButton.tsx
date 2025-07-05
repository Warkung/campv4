'use client';

import { Share2, Link as LinkIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * A client component that allows users to share the current page URL.
 * It uses the Web Share API if available, providing a native sharing experience.
 * If the Web Share API is not supported, it falls back to a "Copy Link"
 * functionality that copies the URL to the clipboard.
 */
function ShareButton() {
  const [isClient, setIsClient] = useState(false);
  const [feedbackText, setFeedbackText] = useState('Share');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const canShare = isClient && !!navigator.share;

  useEffect(() => {
    if (isClient) {
      setFeedbackText(canShare ? 'Share' : 'Copy Link');
    }
  }, [isClient, canShare]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = document.title;

    if (canShare) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Check out ${shareTitle}`,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Share action was cancelled or failed:', error);
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setFeedbackText('Copied!');
      setTimeout(() => setFeedbackText('Copy Link'), 2000);
    }
  };

  const Icon = canShare ? Share2 : LinkIcon;

  return (
    <button
      onClick={handleShare}
      disabled={!isClient}
      className="inline-flex items-center gap-2 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-transform duration-150 ease-in-out hover:bg-gray-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3"
      aria-label={feedbackText}
      title={feedbackText}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{feedbackText}</span>

    </button>
  );
}
export default ShareButton;