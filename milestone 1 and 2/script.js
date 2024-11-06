var togglebutton = document.getElementById("toggle-Skills");
var Skills = document.getElementById('skills');
togglebutton.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
