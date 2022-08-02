import axios from 'axios';
import filenamifyUrl from 'filenamify-url';
import RSSParser, { Item } from 'rss-parser';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RSSParserFeed = { [key: string]: any } & RSSParser.Output<{ [key: string]: any }>;

export type FeedEntry = {
  id?: string,
  link?: string,
  title?: string,
  date?: string,
  content?: string,
  contentSnippet?: string,
};

class Feed {
  constructor(private url: string, private useCache :boolean = true) {
  }

  private static parseEntries(feed: RSSParserFeed, maxItem: number): FeedEntry[] {
    let items: FeedEntry[] = [];
    if (Array.isArray(feed.items)) {
      items = feed.items.slice(0, maxItem).map((item: Item) => ({
        id: item.guid,
        link: item.link,
        title: item.title,
        date: item.isoDate || item.pubDate,
        content: item.content,
      }));
    }
    return items;
  }

  private fetchFromCache(maxItem: number): Promise<FeedEntry[]> {
    const cacheJsonUrl = `/data/${filenamifyUrl(this.url)}.json`;
    return axios({
      url: cacheJsonUrl,
    }).then(({ data }) => Feed.parseEntries(data, maxItem));
  }

  private fetchFromOrigin(maxItem: number): Promise<FeedEntry[]> {
    const parser = new RSSParser();
    return parser.parseURL(this.url).then((feed) => Feed.parseEntries(feed, maxItem));
  }

  public fetch(maxItem = 10): Promise<FeedEntry[]> {
    if (this.useCache) {
      return this.fetchFromCache(maxItem);
    }
    return this.fetchFromOrigin(maxItem);
  }
}

export default Feed;
