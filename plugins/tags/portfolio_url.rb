module Jekyll
  module Tags
    class PortfolioUrl < Liquid::Tag

      def initialize(tag_name, text, tokens)
        super
        portfolio = text.strip
        if portfolio =~ /([^\.]+)\.(ja)$/
          @lang = $2
          @url = "#{$2}/portfolio/#{$1}"
        else
          @lang = 'en'
          @rul = "portfolio/#{portfolio}"
        end
      end

      def render(context)
        site = context.registers[:site]
        "#{site.config['url']}/#{@url}"
      end
    end
  end
end

Liquid::Template.register_tag('portfolio_url', Jekyll::Tags::PortfolioUrl)
