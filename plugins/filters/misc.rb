#custom filters for makotokw.com

require './plugins/date'

module Jekyll

  module MiscLiquidFilters
    include Jekyll::Date

    # Extracts raw content DIV from template, used for page description as {{ content }}
    # contains complete sub-template code on main page level
    def raw_content(input)
      /<div class="entry-content">(?<content>[\s\S]*?)<\/div>\s*<(footer|\/article)>/ =~ input
      (content.nil?) ? input : content
    end

    # Improved version of Liquid's truncate:
    # - Doesn't cut in the middle of a word.
    # - Uses typographically correct ellipsis (…) insted of '...'
    def truncate(input, length)
      if input.length > length && input[0..(length-1)] =~ /(.+)\b.+$/im
        $1.strip + ' &hellip;'
      else
        input
      end
    end

    # Condenses multiple spaces and tabs into a single space
    def condense_spaces(input)
      input.gsub(/\s{2,}/, ' ')
    end

    # Removes trailing forward slash from a string for easily appending url segments
    def strip_slash(input)
      if input =~ /(.+)\/$|^\/$/
        input = $1
      end
      input
    end
  end

end

Liquid::Template.register_filter(Jekyll::MiscLiquidFilters)
