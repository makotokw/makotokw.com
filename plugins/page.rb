require './plugins/date'

module Jekyll

  class Page
    include Jekyll::Date

    # Initialize a new Page.
    #
    # site - The Site object.
    # base - The String path to the source.
    # dir  - The String path between the source and the file.
    # name - The String filename of the file.
    def initialize(site, base, dir, name)
      @site = site
      @base = base
      @dir = dir
      @name = name

      self.process(name)
      self.read_yaml(File.join(base, dir), name)

      # Monkey patch
      self.fix_data
    end

    def fix_data
      date_format = self.site.config['date_format']
      self.data['date_formatted'] = format_date(self.data['date'], date_format) if self.data.has_key?('date')
      self.data['updated_formatted'] = format_date(self.data['updated'], date_format) if self.data.has_key?('updated')
      self.data['lang'] ||= self.site.config['lang']
    end

  end
end
