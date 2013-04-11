puts 'Reading hosts...'
results = IO.read('/usr/share/dict/words')
puts "Length: #{results.length}"
puts 'Done'
