// To run this file, execute manually (e.g. `npm run seed`)

const { green, red } = require('chalk');
const { db, User, Post } = require('./server/db');

const seedUsers = [{
  name: 'Bobson Dugnutt',
  email: 'bobson@dugnutt.com',
  birthday: new Date(1986, 2, 1),
}, {
  name:'Anatoli Smorin',
  email: 'anatoli@smorin.com',
  birthday: new Date(2002, 6, 15),
}, {
  name: 'Rey McSriff',
  email: 'rey@mcsriff.com',
  birthday: new Date(1993, 11, 23),
}];

const seedPosts = [{
  title: 'Tattoed seitan',
  content: 'Tattooed seitan food truck wayfarers tbh beard semiotics everyday carry hashtag mustache 90\'s microdosing. Coloring book cold-pressed marfa keytar disrupt, neutra mixtape hoodie gochujang flexitarian. Before they sold out affogato narwhal neutra bushwick enamel pin. Chicharrones hot chicken street art fam raclette next level.'
}, {
  title: '90\'s authentic',
  content: '90\'s authentic skateboard +1 VHS cronut four dollar toast. Typewriter small batch DIY squid, tacos jianbing schlitz helvetica ennui tattooed food truck. Kinfolk leggings salvia, fanny pack single-origin coffee locavore gastropub kombucha tattooed. Ramps snackwave knausgaard, fixie unicorn cray bicycle rights selvage williamsburg DIY. Chartreuse hashtag bicycle rights, four dollar toast pug street art neutra.'
}, {
  title: 'Chillwave la croix',
  content: 'Chillwave la croix marfa fashion axe austin cardigan. Microdosing intelligentsia gluten-free poutine, kinfolk four dollar toast dreamcatcher shaman taxidermy venmo. Banh mi celiac meditation vaporware bitters, kickstarter selfies. Selvage cray banh mi typewriter everyday carry, jianbing taiyaki mumblecore intelligentsia jean shorts chia williamsburg VHS marfa.'
}];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(seedUsers.map(element => {
      return User.create(element);
    }));

    await Promise.all(seedPosts.map(element => {
      return Post.create(element);
    }));

    /*
       Below I am making sure that each user has at least one
       post and each post has at least one author.
    */
    const userOne = await User.findByPk(1);
    const userTwo = await User.findByPk(2);
    const userThree = await User.findByPk(3);

    const onePost = await Post.findByPk(1);
    const anotherPost = await Post.findByPk(2);
    const finalPost = await Post.findByPk(3);

    
    await userOne.addPost(onePost);
    await userTwo.addPost(anotherPost);
    await userThree.addPost(finalPost);

    console.log('Seeding success!')
    db.close()

  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
