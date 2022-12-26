# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "romance"
  spec.version       = "0.1.0"
  spec.authors       = ["seungsik"]
  spec.email         = ["hseungsik330@gmail.com"]

  spec.summary       = "This is an example!"
  spec.homepage      = "https://github.com/seungsikhong/seungsikhong.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
