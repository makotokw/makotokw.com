module Jekyll

  class PortfolioPage < Page

    attr_accessor :lang, :date, :slug, :published, :tags, :categories

    def initialize(site, base, dir, name)
      @site = site
      @base = base
      @dir = dir
      @name = name

      self.read_yaml(File.join(base, dir), name)

      @lang = (self.data['lang'] && self.data['lang'] != 'en') ? self.data['lang'] : ''
      @categories = if self.data['category']
                      self.data['category'].downcase.gsub(/\s/, '')
                    else
                      ''
                    end
      self.process(name)
    end

    # Extract information from the page filename.
    #
    # name - The String filename of the page file.
    #
    # Returns nothing.
    def process(name)
      # ignore directory
      name = File.basename(name)
      self.ext = File.extname(name)
      self.basename = name[0 .. -self.ext.length-1]
      self.basename.gsub!(/\.#{@lang}/, '') unless @lang.empty?
    end

    def is_page?
      true
    end

    # The template of the permalink.
    #
    # Returns the template String.
    def template
      '/:lang/portfolio/:categories/:basename/'
    end

    # The generated relative url of this page. e.g. /about.html.
    #
    # Returns the String url.
    def url
      return @url if @url

      url = permalink ?
          if site.config['relative_permalinks']
            File.join(@dir, permalink)
          else
            permalink
          end :
          {
              'lang' => self.lang,
              'categories' => self.categories,
              'basename' => self.basename,
          }.inject(template) { |result, token|
            result.gsub(/:#{token.first}/, token.last)
          }.gsub(/\/\//, '/')

      # sanitize url
      @url = url.split('/').reject { |part| part =~ /^\.+$/ }.join('/')
      @url += '/' if url =~ /\/$/
      @url.gsub!(/\A([^\/])/, '/\1')
      @url
    end

  end

  class PortfolioPageGenerator < Generator
    safe true

    attr_accessor :portfolios

    def generate(site)

      entries = site.reader.get_entries('/', '_portfolios')

      # first pass processes, but does not yet render post content
      entries.each do |f|
        puts f
        portfolio_path = /^([^\.]+)/.match(f).to_a[1]
        # val = portfolios.find{|p| p.url.find%2==0 }
        page = PortfolioPage.new(site, site.source, '/_portfolios/', f)
        site.pages << page
      end

    end
  end

end