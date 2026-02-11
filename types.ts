import React from 'react';

export type UserRole = 'Student' | 'Business' | 'University';

export interface FormData {
  name: string;
  email: string;
  role: UserRole;
  organization: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}