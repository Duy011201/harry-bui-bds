import { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

export interface SpaceModuleProps {
  title: string;
  description: string;
  capacity: string;
  image: string;
  reversed?: boolean;
}

export interface PricingTierProps {
  name: string;
  price: string;
  features: string[];
  isPremium?: boolean;
}