module Jekyll
  module Tags
    class GitHubWidget < Liquid::Tag

      def initialize(tag_name, text, tokens)
        super
        @text = text.strip
      end

      def render(context)
        "<div class=\"github-widget\" data-repo=\"#{@text}\"></div>"
      end
    end
  end
end

Liquid::Template.register_tag('github', Jekyll::Tags::GitHubWidget)