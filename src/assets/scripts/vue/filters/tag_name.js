import portfolioTags from '@assets/fixtures/portfolio_tags.yml';

/**
 * @param value
 * @returns {string}
 */
export default function toTagName(value) {
  /** @var {PortfolioTag} */
  const tag = portfolioTags.find((t) => t.id === value);
  return tag ? tag.name : value;
}
