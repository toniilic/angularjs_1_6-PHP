var portfolioApp = angular.module('portfolioApp', ['ui.router']);


portfolioApp.config(function ($stateProvider,$urlRouterProvider) {

    var mainState = {
        name: 'main',
        url: '/',
        component : 'main'
    }

    var portfolioState = {
        name: 'portfolio',
        url: '/portfolio',
        component : 'portfolio'
    }
    var contactState = {
        name: 'contact',
        url: '/contact',
        component : 'contact'
    }


    var aboutState = {
        name: 'about',
        url: '/about',
        component : 'profile'
    }

    $stateProvider.state(mainState);
    $stateProvider.state(portfolioState);
    $stateProvider.state(contactState);
    $stateProvider.state(aboutState);
    $urlRouterProvider.otherwise('/');

})

.component('profile', {
  bindings: {

  },

  controller: function() {
  },
  template: `
    <h1>Profile</h1>
    I'm a web developer and entrepreneur with 3+ years of experience.
  `
})

.component('contact', {
  bindings: {

  },

  controller: function() {
      this.contactMe = function(){
          alert("Thanks!");
      }
  },
  template: `
    <h1>Contact</h1>
    <form ng-submit="$ctrl.contactMe()" >
    <div class="form-group">
        <label for="yourName">Your Name</label>
        <input type="text" class="form-control" id="yourName"  placeholder="Enter name">

        <label for="yourMessage">Your Message</label>
        <textarea style="height:100px;"  class="form-control" id="yourMessage"  placeholder="Enter message"></textarea>

        <label for="emailAddr">Your Email address</label>
        <input type="email" class="form-control" id="emailAddr" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `
})


.component('portfolio', {
        bindings: {

        },

        controller: function (PROJECTS) {

            //define component's behavior here by linking methods and variables to this.
            this.projects = PROJECTS;

            console.log(this.projects);
        },
        template: `
        <h1>Portfolio</h1>
        <div ng-repeat="project in $ctrl.projects"> 
            <h2>
            	{{ project.name }}
            </h2>
            <p>
				{{ project.description }}
            </p>
        </div>

    `
})

.component('main', {
  bindings: {

  },

  controller: function() {
  },
  template: `
    <h1>Welcome to my portfolio website!</h1>
    In this website you will find information about me and my projects
  `
});



portfolioApp.constant('PROJECTS',[

   {name:"Project 1" , description:"Project 1 description"},
   {name:"Project 2" , description:"Project 2 description"},

]);
