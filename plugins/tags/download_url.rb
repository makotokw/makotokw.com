module Jekyll
  module Tags
    class DownloadUrl < Liquid::Tag

      def initialize(tag_name, text, tokens)
        super
        @url = text.strip
      end

      def render(context)
        site = context.registers[:site]
        "#{site.config['download_url']}#{@url}"
      end
    end
  end
end

Liquid::Template.register_tag('download_url', Jekyll::Tags::DownloadUrl)
