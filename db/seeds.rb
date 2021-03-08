# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Illness.destroy_all
Symptom.destroy_all
User.destroy_all

@gigi = User.create!(username: "gigi", email:"gigi@email.com", password: "123456")

puts "#{User.count} users created"

@COVID19 = Illness.create!(name: 'Covid-19', description: 'COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans. Because it is a new virus, scientists are learning more each day. Although most people who have COVID-19 have mild symptoms, COVID-19 can also cause severe illness and even death. Some groups, including older adults and people who have certain underlying medical conditions, are at increased risk of severe illness.', image: 'https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-1600x900.jpg')
@diabetes1 = Illness.create!(name: 'Type 1 Diabetes', description: 'Type 1 diabetes, once known as juvenile diabetes or insulin-dependent diabetes, is a chronic condition in which the pancreas produces little or no insulin. Insulin is a hormone needed to allow sugar (glucose) to enter cells to produce energy.

Different factors, including genetics and some viruses, may contribute to type 1 diabetes. Although type 1 diabetes usually appears during childhood or adolescence, it can develop in adults.', image: 'https://cdn.diabetesselfmanagement.com/2020/01/dsm-what-is-type-1-diabetes-shutterstock_274849448.jpg' )
@diabetes2 = Illness.create!(name: 'Type 2 Diabetes', description:'Type 2 diabetes is an impairment in the way the body regulates and uses sugar (glucose) as a fuel. This long-term (chronic) condition results in too much sugar circulating in the bloodstream. Eventually, high blood sugar levels can lead to disorders of the circulatory, nervous and immune systems.', image: 'https://media.healthdirect.org.au/images/inline/original/type-2-diabetes-49a3ee.jpg')
@asthma = Illness.create!(name: 'Asthma', description: 'Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath.

For some people, asthma is a minor nuisance. For others, it can be a major problem that interferes with daily activities and may lead to a life-threatening asthma attack.', image: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210126070646/ri/673/picture/2021/1/shutterstock_1112294717.jpg')
@allergies = Illness.create!(name: 'Allergies', description: "Allergies occur when your immune system reacts to a foreign substance — such as pollen, bee venom or pet dander — or a food that doesn't cause a reaction in most people.

Your immune system produces substances known as antibodies. When you have allergies, your immune system makes antibodies that identify a particular allergen as harmful, even though it isn't. When you come into contact with the allergen, your immune system's reaction can inflame your skin, sinuses, airways or digestive system.", image: 'https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')

puts "#{Illness.count} illnesses created"

Symptom.create!(description: 'runny nose', user: @gigi, illness: @allergies)

Symptom.create!(description: 'difficult breathing', user: @gigi, illness: @asthma)


puts "#{Symptom.count} symptoms created"
