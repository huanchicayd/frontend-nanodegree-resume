/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  name: 'Daniel Huanchicay',
  role: 'Front-End Developer',
  contacts: {
    mobile: '97918-0893',
    email: 'daniel@danielhuanchicay.com',
    github: 'huanchicayd',
    twitter: '@huanchicay',
    location: 'Rio de Janeiro'
  },
  welcomeMessage: 'lorem',
  skills: [
    'HTML',
    'CSS/SASS',
    'JavaScript/Jquery',
    'Git'
  ],
  bioPic: 'images/fry.jpg',
};

var education = {
  schools: [
    {
      name: 'Escola Superior de Desenho Industrial, UERJ',
      location: 'Rio de Janeiro',
      degree: 'Lorem A',
      majors: 'Lorem B',
      dates: '2015',
      url: 'www.lorem.com'
    },
    {
      name: 'Instituto Infnet',
      location: 'Rio de Janeiro',
      degree: 'Lorem A',
      majors: 'Lorem B',
      dates: '2010',
      url: 'www.lorem.com'
    }
  ],
  onlineCourses: [
    {
      title: 'Javascript Crash Course',
      school: 'Udacity',
      dates: 2014,
      url: 'www.lorem.com'
    },
    {
      title: 'Javascript Crash Course',
      school: 'Udacity',
      dates: 2014,
      url: 'www.lorem.com'
    }
  ]
};

var work = {
  jobs: [
    {
      employer: 'Natio Criativo',
      title: 'Designer/Front-End',
      location: 'Rio de Janeiro, RJ',
      dates: 'Março 2015 - Agosto 2017',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
      employer: 'Laboratório de Tecnologia da Informação e Comunicação',
      title: 'Designer Intern',
      location: 'São Paulo, SP',
      dates: 'Abril 2013 - Julho 2013',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
      employer: 'Laboratório de Tecnologia da Informação e Comunicação',
      title: 'Designer Intern',
      location: 'Belo Horizonte, BH',
      dates: 'Abril 2013 - Julho 2013',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    }
  ]
};

var projects = {
  projects: [
    {
      title: 'Tophostels',
      dates: '2015-2016',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
      images: [
        'images/197x148.gif',
        'images/197x148.gif'
      ]
    },
    {
      title: 'Mobile Application',
      dates: '2017',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
      images: [
        'images/197x148.gif',
        'images/197x148.gif'
      ]
    }
  ]
}

bio.display = function(){
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  var formattedImage = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  $('#header').append(formattedWelcome);
  $('#header').append(formattedImage);

  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedTwitter);
  $('#topContacts').append(formattedGithub);
  $('#topContacts').append(formattedLocation);

  $('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
  $('#footerContacts').append(formattedTwitter);
  $('#footerContacts').append(formattedGithub);
  $('#footerContacts').append(formattedLocation);

  if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
    $('#skills').append(formattedSkill);

    var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
    $('#skills').append(formattedSkill);

    var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
    $('#skills').append(formattedSkill);

    var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
    $('#skills').append(formattedSkill);
  }
}
bio.display();

work.display = function(){
  for(job in work.jobs){
    $('#workExperience').append(HTMLworkStart);

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
work.display();

projects.display = function(){
  for(project in projects.projects){
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
    $('.project-entry:last').append(formattedDescription);

    if(projects.projects[project].images.length > 0){
      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
}
projects.display();

education.display = function(){
  for(school in education.schools){
    $('#education').append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $('.education-entry:last').append(formattedNameDegree);

    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    $('.education-entry:last').append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
    $('.education-entry:last').append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].location);
    $('.education-entry:last').append(formattedMajor);
  }

  $('#education').append(HTMLonlineClasses);

  for(online in education.onlineCourses){
    $('#education').append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[online].title);
    var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[online].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $('.education-entry:last').append(formattedTitleSchool);

    var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[online].dates);
    $('.education-entry:last').append(formattedDates);

    var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[online].url);
    $('.education-entry:last').append(formattedURL);
  }
}
education.display();

$('#mapDiv').append(googleMap);