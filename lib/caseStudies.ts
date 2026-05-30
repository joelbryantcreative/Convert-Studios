// Placeholder case studies — swap copy, images and metrics for real projects.
export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  outcome: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "harbourline",
    client: "Harbourline",
    category: "Hospitality",
    outcome: "3.2× increase in qualified booking enquiries",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "meridian-co",
    client: "Meridian Co.",
    category: "Professional services",
    outcome: "118 new leads in the first 90 days",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "field-and-fold",
    client: "Field & Fold",
    category: "Retail & e-commerce",
    outcome: "41% lift in return on ad spend",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "northbound",
    client: "Northbound",
    category: "Building & construction",
    outcome: "Pipeline booked out two quarters ahead",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "saltwater",
    client: "Saltwater",
    category: "Allied health",
    outcome: "Enquiries doubled within three months",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "atelier-9",
    client: "Atelier 9",
    category: "Design studio",
    outcome: "27% lower cost per qualified lead",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "brightwater",
    client: "Brightwater",
    category: "Fitness",
    outcome: "Sold out a new membership tier in 6 weeks",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "makers-row",
    client: "The Maker's Row",
    category: "Manufacturing",
    outcome: "5.4× video-driven website traffic",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "verge-studio",
    client: "Verge Studio",
    category: "Creative agency",
    outcome: "Booked 14 discovery calls from one campaign",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
