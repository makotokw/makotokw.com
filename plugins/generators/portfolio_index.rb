module Jekyll

  class PortfolioIndex < Page

    def initialize(site, base, portfolios, dir, lang)
      @site = site
      @base = base
      @dir  = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'portfolio_index.html')
      self.data['lang'] = lang

      # override {attribute}.ja to {attribute}
      list = []
      portfolios.each do |portfolio|
        item = portfolio.clone
        item.each do |key, value|
          if /^([\w_-]+)\.(#{lang})$/ === key.to_s
            item[$~[1]] = value
          end
        end
        list << item
      end
      self.data['portfolios'] = list.reverse
    end

    def index?
      true
    end

  end

  class PortfolioIndexPageGenerator < Generator
    safe true

    attr_accessor :portfolios

    def generate(site)

      unless site.portfolio_tags then
        portfolio_tags = YAML.load_file(File.join(site.source, '_fixtures', 'portfolio_tag.yml'))
        portfolio_tags.each do |t|
          if !t.has_key?('slug') then
            slug = t['name'].to_s.downcase.gsub(/(\s|[^\w])/, '')
            t['slug'] = slug
          end
        end
        site.portfolio_tags = portfolio_tags
      end

      portfolios = YAML.load_file(File.join(site.source, '_fixtures', 'portfolio.yml'))
      portfolios.sort_by! { |p| p['copyright_year'] ? p['copyright_year'] : 2000 }

      # add PortfolioIndex page via locale
      site.pages << PortfolioIndex.new(site, site.source, portfolios, '/portfolio/', 'en')
      site.pages << PortfolioIndex.new(site, site.source, portfolios, '/ja/portfolio/', 'ja')

    end
  end

end