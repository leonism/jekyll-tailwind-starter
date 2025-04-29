source "https://rubygems.org"

gem "jekyll", "~> 4.3"

# If you have any Jekyll plugins, add them here. For example:
# gem "jekyll-sitemap", "~> 1.4"
# gem "jekyll-feed", "~> 0.17"

group :jekyll_plugins do
  gem "jekyll-postcss"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-feed", "~> 0.17"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { Gem.win_platform? } do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
