// object literals

const blogs = [
  { title: 'what it is', likes: 30 },
  { title: 'what it does', likes: 50 },
];

// console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@newbie.com',
  location: 'Dallas',
  blogs: [
    { title: 'what it is', likes: 30 },
    { title: 'what it does', likes: 50 },
  ],
  login() {
    console.log('the user logged in');
  },
  logout() {
    console.log('the user logged out');
  },
  logBlogs() {
    console.log('this user has written the following blogs:');
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

user.login();
user.logout();
user.logBlogs();

// const key = 'location';
// console.log(user[key]);
