export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
  borderColor: string;
  textColor: string;
}

export interface AuditLogItem {
  id: string;
  time: string;
  title: string;
  operator: string;
  description: string;
  dotColor: string;
  ringColor: string;
}

export interface PersonaItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface BenefitMetricItem {
  id: string;
  value: string;
  title: string;
  description: string;
  valueColorClass: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuickValueItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}
