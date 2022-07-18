import portfolioTags from '@assets/fixtures/portfolio_tags.yaml';

export default function toTagName(value: string): string {
  const tag = portfolioTags.find((t: PortfolioTag) => t.id === value);
  return tag && tag.name ? tag.name : value;
}
