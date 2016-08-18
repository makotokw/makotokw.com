module Jekyll
  module PortfolioFilter
    def portfolio_tag_name(input)
      tag_name = input
      site = @context.registers[:site]
      site.data['portfolio_tags'].each do |t|
        if t['id'] == input then
          tag_name = t['name']
          break
        end
      end
      tag_name
    end
  end
end

Liquid::Template.register_filter(Jekyll::PortfolioFilter)