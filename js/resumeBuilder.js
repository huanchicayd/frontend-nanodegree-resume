/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name: 'Daniel Huanchicay',
  role: 'Designer/Front-End',
  contacts: {
      mobile: '97918-0893',
      email: 'daniel@danielhuanchicay.com',
      github: 'huanchicayd',
      twitter: '@huanchicay',
      location: 'Rio de Janeiro'
  },
  welcomeMessage: 'Profissional encantado com o desenvolvimento front-end.',
  skills: [
      'HTML',
      'CSS/SASS',
      'JavaScript/Jquery',
      'Git',
      'User Interface',
      'User Experience',
      'Interaction Design'
  ],
  biopic: 'images/fry.jpg',
  display: function() {
      var formattedName = HTMLheaderName.replace('%data%', bio.name);
      var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
      var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
      var formattedImage = HTMLbioPic.replace('%data%', bio.biopic);
      var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
      var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
      var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
      var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

      $('#header').prepend(formattedRole)
          .prepend(formattedName)
          .append(formattedWelcome)
          .append(formattedImage)
          .append(HTMLskillsStart);

      $('#topContacts, #footerContacts').append(formattedMobile)
          .append(formattedEmail)
          .append(formattedTwitter)
          .append(formattedGithub)
          .append(formattedLocation);

      for (var skill = 0; skill < bio.skills.length; skill++) {
          var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
          $('#skills').append(formattedSkill);
      }
  }
};
bio.display();

var education = {
  schools: [{
          name: 'Escola Superior de Desenho Industrial, UERJ',
          location: 'Rio de Janeiro',
          degree: 'Bacharelado',
          majors: ['Major A', ' Major B'],
          dates: '2015',
          url: 'http://www.esdi.uerj.br/'
      },
      {
          name: 'Instituto Infnet',
          location: 'Rio de Janeiro',
          degree: 'Formação Intensiva',
          majors: ['Major A', ' Major B'],
          dates: '2010',
          url: 'https://www.infnet.edu.br/training/'
      }
  ],
  onlineCourses: [{
          title: 'Javascript Ninja',
          school: 'Udemy',
          dates: '2017',
          url: 'https://www.udemy.com/'
      },
      {
          title: 'Desenvolvedor Front-End',
          school: 'Alura',
          dates: '2017',
          url: 'https://www.alura.com.br/'
      },
      {
          title: 'UX para webdesigners',
          school: 'UX Academy',
          dates: '2017',
          url: 'http://www.uxacademy.com.br/'
      }
  ],
  display: function() {
      $('#education').append(HTMLschoolStart);
      education.schools.forEach(function(school) {
          var formattedName = HTMLschoolName.replace('%data%', school.name);
          var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
          var formattedNameDegree = formattedName + formattedDegree;
          $('.education-entry:last').append(formattedNameDegree);

          var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
          $('.education-entry:last').append(formattedDates);

          var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
          $('.education-entry:last').append(formattedLocation);

          var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
          $('.education-entry:last').append(formattedMajor);
      });

      $('#education').append(HTMLonlineClasses);
      $('#education').append(HTMLschoolStart);

      education.onlineCourses.forEach(function(j) {
          var formattedTitle = HTMLonlineTitle.replace('%data%', j.title);
          var formattedSchool = HTMLonlineSchool.replace('%data%', j.school);
          var formattedTitleSchool = formattedTitle + formattedSchool;
          $('.education-entry:last').append(formattedTitleSchool);

          var formattedDates = HTMLonlineDates.replace('%data%', j.dates);
          $('.education-entry:last').append(formattedDates);

          var formattedURL = HTMLonlineURL.replace('%data%', j.url);
          $('.education-entry:last').append(formattedURL);
      });
  }
};
education.display();

var work = {
  jobs: [{
          employer: 'Natio Criativo',
          title: 'Designer/Front-End',
          location: 'Rio de Janeiro, RJ',
          dates: 'Março 2015 - Agosto 2017',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
      },
      {
          employer: 'Laboratório de Tecnologia da Informação e Comunicação',
          title: 'Designer Estagiário',
          location: 'Rio de Janeiro, RJ',
          dates: 'Abril 2013 - Julho 2013',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
      },
      {
          employer: 'Empresa 3',
          title: 'Front-End',
          location: 'São Paulo, SP',
          dates: 'Abril 2011 - Julho 2012',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
      }
  ],
  display: function() {
      $('#workExperience').append(HTMLworkStart);

      for (var job = 0; job < work.jobs.length; job++) {
          var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
          var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;
          $('.work-entry:last').append(formattedEmployerTitle);

          var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
          $('.work-entry:last').append(formattedLocation);

          var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
          $('.work-entry:last').append(formattedDates);

          var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
          $('.work-entry:last').append(formattedDescription);
      }
  }
};
work.display();

var projects = {
  projects: [{
          title: 'Ipiranga (aplicativo mobile)',
          dates: '2016',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
          images: [
              'images/ipiranga.jpg',
              'images/ipiranga.jpg'
          ]
      },
      {
          title: 'Finxi (site)',
          dates: '2017',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
          images: [
              'images/finxi.jpg',
              'images/finxi.jpg'
          ]
      }
  ],
  display: function() {
      $('#projects').append(HTMLprojectStart);

      projects.projects.forEach(function(project) {
          var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
          $('.project-entry:last').append(formattedTitle);

          var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
          $('.project-entry:last').append(formattedDates);

          var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
          $('.project-entry:last').append(formattedDescription);

          project.images.forEach(function(image) {
              var formattedImage = HTMLprojectImage.replace('%data%', image);
              $('.project-entry:last').append(formattedImage);
          });
      });
  }
};
projects.display();

$('#mapDiv').append(googleMap);