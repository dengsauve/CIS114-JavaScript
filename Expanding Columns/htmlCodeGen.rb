# Generate the HTML
require 'faker'

puts "<div class='row'>"

4.times do
    first = Faker::Name.first_name
    last = Faker::Name.last_name
    about = Faker::Lorem.paragraph(12)

    puts "  <div class='col-lg-3 col-md-6 col-xs-12 text-center'>",
    "       <img src='https://placehold.it/200x200&amp;text=#{first}' class='img-responsive'>",
    "       <h4>#{first} #{last}</h4>",
    "       <h5>Department + Position</h5>",
    "       <hr>",
    "       <div class='col_expand' data-link-text='About #{first}'>",
    "           <p class='text-left'>",
    "\t\t\t\t" + about,
    "           </p>",
    "       </div>",
    "   </div>\n"
end

puts "</div>\n\n"