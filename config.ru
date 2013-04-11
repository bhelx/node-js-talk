use Rack::Static, 
  :urls => ["/images", "core", "extensions"],
  :root => "public"

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/introduction/index.html', File::RDONLY)
  ]
}
