interface PortfolioTag {
    id: string,
    name?: string,
    category: string
}

declare module '*/portfolio_tags.yaml' {
    const content: PortfolioTag[]
    export default content
}

declare module '*/portfolios.yaml' {
    interface Portfolio {
        name: string,
        "name.ja"?: string,
        categories: string[],
        tags: string[],
        url?: string,
        source_url?: string,
        copyright_year: number,
        last_updated_year: number,
        status: string,
        deprecated?: boolean,
    }
    const content: Portfolio[]
    export default content
}

declare module '*/site.yaml' {
    interface GoogleAnalytics {
        account: string,
        domain: string,
    }

    interface SiteAuthor {
        name: string,
        email: string,
        screen_name: string,
        gravator_hash: string,
        github: string,
        twitter: string,
        twitter_ja: string,
    }

    interface Site {
        lang: string,
        title: string,
        url: string,
        path: string,
        subscribe_url: string,
        blog_ja_url: string,
        github_url: string,
        qiita_url: string,
        twitter_url: string,
        twitter_ja_url: string,
        disqus_short_name: string,
        google_analytics: GoogleAnalytics,
        download_url: string,
        addthis_profile_id: string,
        author: SiteAuthor,
    }
    const content: Site
    export default content
}
