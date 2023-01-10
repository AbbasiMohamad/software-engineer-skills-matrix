const allSkills = ['reliable', 'troubleshooting', 'architecture', 'quality', 'craft',
  'facilitation', 'decision', 'growing', 'team',
  'communication', 'teamwork', 'community', 'recruitment',
  'sldc', 'accountable', 'planning', 'ambiguity',
  'critical', 'biz', 'product'];
const levels = ['junior', 'mid', 'senior', 'teamlead', 'em', 'vp'];

function changeSkill(selected) {
  allSkills.forEach(function(skill) {
    hide(skill);
  });
  show(selected);
  levels.forEach(function(level) {
    showElement(document.getElementById('show-' + level + '-all'));
    hideElement(document.getElementById('hide-' + level + '-all'));
  });
}

function showAll(level) {
  var skillLevel = document.getElementById(level + "-skills");
  if (skillLevel) {
    allSkills.forEach(function(skill) {
      var elements = skillLevel.getElementsByClassName(skill);
      if (elements) {
        [].forEach.call(elements, function(element) {
          showElement(element);
        });
      }
    });
    hideElement(document.getElementById('show-' + level + '-all'));
    showElement(document.getElementById('hide-' + level + '-all'));
  }
}

function hideAll(level) {
  var url = window.location.href;
  var selected = url.indexOf("#") === -1 ? selectedSkill(url) : url.substring(url.indexOf("#") + 1);
  var skillLevel = document.getElementById(level + "-skills");
  allSkills.forEach(function(skill) {
    var elements = skillLevel.getElementsByClassName(skill);
    if (elements) {
      [].forEach.call(elements, function(element) {
        hideElement(element);
      });
    }
  });
  showElement(document.getElementById('show-' + level + '-all'));
  hideElement(document.getElementById('hide-' + level + '-all'));
  show(selected);
}

function selectedSkill(url) {
  if (url.indexOf("strategy") != -1) {
    return 'critical';
  }
  if (url.indexOf("delivery") != -1) {
    return 'sldc';
  }
  if (url.indexOf("leadership") != -1) {
    return 'facilitation';
  }
  if (url.indexOf("communication") != -1) {
    return 'communication';
  }
  return 'reliable';
}

function hide(skill) {
  var header = document.getElementById(skill + "-header");
  if (header) {
    header.style.border = "solid 1px #808080";
  }
  var elements = document.getElementsByClassName(skill);
  [].forEach.call(elements, function(element) {
    hideElement(element);
  });
}

function show(skill) {
  var header = document.getElementById(skill + "-header");
  if (header) {
    header.style.border = "solid 3px #FFF";
  }
  var elements = document.getElementsByClassName(skill);
  if (elements) {
    [].forEach.call(elements, function(element) {
      showElement(element);
    });
  }
}

function hideExamples(level) {
  hideElement(document.getElementById(level + "-hide"));
  showElement(document.getElementById(level + "-show"));
  hideElement(document.getElementById(level + "-examples"));
}

function showExamples(level) {
  showElement(document.getElementById(level + "-hide"));
  hideElement(document.getElementById(level + "-show"));
  showElement(document.getElementById(level + "-examples"));
}

function hideElement(element) {
  if (element){
    element.style.display = "none"
  }
}

function showElement(element) {
  if (element) {
    element.style.display = "block";
  }
}