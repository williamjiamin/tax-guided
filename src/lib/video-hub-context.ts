"use client";

import { createContext, useContext } from "react";

export interface VideoHubState {
  isOpen: boolean;
  activeTopicId: string | null;
  /** Increments each time openHub is called — forces panel to reset even if topicId is unchanged */
  openRevision: number;
  openHub: (topicId?: string) => void;
  closeHub: () => void;
}

export const VideoHubContext = createContext<VideoHubState>({
  isOpen: false,
  activeTopicId: null,
  openRevision: 0,
  openHub: () => {},
  closeHub: () => {},
});

export function useVideoHub(): VideoHubState {
  return useContext(VideoHubContext);
}
