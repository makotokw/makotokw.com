require './plugins/date'

module Jekyll

  class Post
    include Jekyll::Date

    # Convert this post into a Hash for use in Liquid templates.
    #
    # Returns <Hash>
    def to_liquid(attrs = ATTRIBUTES_FOR_LIQUID)
      date_format = self.site.config['date_format']
      self.data.merge({
                               'title' => self.data['title'] || self.slug.split('-').select { |w| w.capitalize! || w }.join(' '),
                               'url' => self.url,
                               'date' => self.date,
                               # Monkey patch
                               'date_formatted' => format_date(self.date, date_format),
                               'updated_formatted' => self.data.has_key?('updated') ? format_date(self.data['updated'], date_format) : nil,
                               'id' => self.id,
                               'categories' => self.categories,
                               'next' => self.next,
                               'previous' => self.previous,
                               'tags' => self.tags,
                               'content' => self.content,
                               'lang' => self.site.config['lang']
                           })
    end
  end
end
