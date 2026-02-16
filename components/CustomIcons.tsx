import React from 'react';
import { Books, Briefcase, Building } from '@phosphor-icons/react';

export const SkillBridgeIcons = {
  // Three-way marketplace icon
  Ecosystem: () => (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Student circle */}
      <circle cx="100" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
      <foreignObject x="85" y="35" width="30" height="30">
        <Books className="w-full h-full" weight="fill" />
      </foreignObject>

      {/* Business circle */}
      <circle cx="155" cy="150" r="30" stroke="currentColor" strokeWidth="2" />
      <foreignObject x="140" y="135" width="30" height="30">
        <Briefcase className="w-full h-full" weight="fill" />
      </foreignObject>

      {/* University circle */}
      <circle cx="45" cy="150" r="30" stroke="currentColor" strokeWidth="2" />
      <foreignObject x="30" y="135" width="30" height="30">
        <Building className="w-full h-full" weight="fill" />
      </foreignObject>

      {/* Connecting lines with arrows */}
      <line
        x1="100"
        y1="80"
        x2="130"
        y2="120"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      <line
        x1="100"
        y1="80"
        x2="70"
        y2="120"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      <line
        x1="130"
        y1="120"
        x2="75"
        y2="135"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
    </svg>
  ),

  // Verified badge
  Verified: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),

  // Micro-credential
  Credential: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 11L11 14.5V6h2v6.5l3.5 2-1 1.5z" />
    </svg>
  ),

  // Growth arrow
  Growth: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18 9.41 12l4 4 6.3-6.29L21 12v-6z" />
    </svg>
  ),

  // Connection
  Connection: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  ),
};

// Batch of icons for feature sections
export const FeatureIcons = {
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Target: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export default SkillBridgeIcons;
