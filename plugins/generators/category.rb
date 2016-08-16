# encoding: utf-8
require 'stringex'

module Jekyll

  class CategoryIndex < Page

    def initialize(site, base, category_dir, category)
      @site = site
      @base = base
      @dir  = category_dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'archives_blog_category.html')
      self.data['category']    = category

      title_prefix             = site.config['category_title_prefix'] || 'Category: '
      self.data['title']       = "#{title_prefix}#{category}"
      meta_description_prefix  = site.config['category_meta_description_prefix'] || 'Category: '
      self.data['description'] = "#{meta_description_prefix}#{category}"
    end

  end

  class Site

    def write_category_index(category_dir, category)
      page = CategoryIndex.new(self, self.source, category_dir, category)
      page.render(self.layouts, site_payload)
      page.write(self.dest)
      self.pages << page
    end

    # Loops through the list of category pages and processes each one.
    def write_category_indexes
      if self.layouts.key? 'archives_blog_category'
        dir = self.config['category_dir'] || 'categories'
        self.categories.keys.each do |category|
          self.write_category_index(File.join(dir, category.to_url), category)
        end

      # Throw an exception if the layout couldn't be found.
      else
        raise <<-ERR

===============================================
Error for generators/category.rb plugin
-----------------------------------------------
No 'archives_blog_category.html' in source/_layouts/
Perhaps you haven't installed a theme yet.
===============================================

ERR
      end
    end

  end

  class GenerateCategories < Generator
    safe true
    priority :low

    def generate(site)
      site.write_category_indexes
    end

  end

  # Adds some extra filters used during the category creation process.
  module Filters

    def category_links(categories)
      categories = categories.sort!.map { |c| category_link c }

      case categories.length
      when 0
        ''
      when 1
        categories[0].to_s
      else
        "#{categories[0...-1].join(', ')}, #{categories[-1]}"
      end
    end

    def category_link(category)
      dir = @context.registers[:site].config['category_dir']
      "<a class='category' href='/#{dir}/#{category.to_url}/'>#{category}</a>"
    end

    def date_to_html_string(date)
      '<span class="month">' + date.strftime('%b').upcase + '</span> '
        + date.strftime('<span class="day">%d</span> ')
        + date.strftime('<span class="year">%Y</span> ')
    end

  end

end

