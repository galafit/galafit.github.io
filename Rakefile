
desc "Push to GitHub"
task :push => :clean do
   comment = ""
   comment = "no comment" unless ARGV[1]
   ARGV[1..ARGV.length - 1].each { |v| comment += " #{v}" }
   comment.strip!

  sh "git add ."
  sh "git commit -m \'#{comment}\'"
  puts "\n\n Committed \'#{comment}\' \n\n"
  puts "pushing...\n\n"
  sh "git push"
end




desc 'Delete generated _site files'
task :clean do
    system "rm -fR _site"
    puts "\n\n _site was deleted \n\n"
end

desc "Jekyll Build"
task :build => :clean do
  sh "jekyll build"
  puts "\n\n _site was built \n\n"
end


desc "Jekyll server"
task :server => :clean do
  puts "\n\n _site is building and will be available at  http://localhost:4000/ \n\n"
  sh "jekyll serve --watch"
end

task :default => :server


task :new do
  title = ""
  title = "no-title" unless ARGV[1]
  ARGV[1..ARGV.length - 1].each { |v| title += " #{v}" }
  title.strip!
  now = Time.now
  path = "_posts/#{now.strftime('%F')}-#{title.downcase.gsub(/[\s\.]/, '-').gsub(/[^\w\d\-]/, '')}.markdown"

  File.open(path, "w") do |f|
    f.puts "---"
    f.puts "layout: post"
    f.puts ""
    f.puts "title: #{title}"
    f.puts ""
    f.puts "category: "
    f.puts ""
    f.puts "description: "
    f.puts ""
    f.puts "keywords: "
    f.puts ""
    f.puts "date: #{now.strftime('%F %T')}"
    f.puts ""
    f.puts "tags: []"
    f.puts ""
    f.puts "---"
    f.puts ""
    f.puts ""
  end

  `open -a Byword #{path}`
  exit
end




