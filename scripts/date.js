// DATE & LAST MODIFIED LOGIC
const today = new Date();
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;
lastModified.textContent = "Last Modification: " + document.lastModified;

// COURSE FILTERING LOGIC
const courses = [
  { code: 'WDD 130', name: 'Web Fundamentals', type: 'WDD', completed: true, credits: 2 },
  { code: 'WDD 131', name: 'Responsive Design', type: 'WDD', completed: true, credits: 2 },
  { code: 'WDD 231', name: 'Frontend Development 1', type: 'WDD', completed: false, credits: 2 },
  { code: 'CSE 110', name: 'Programming Principles', type: 'CSE', completed: true, credits: 2 },
  { code: 'CSE 210', name: 'Data Structures', type: 'CSE', completed: false, credits: 2 },
];

document.addEventListener('DOMContentLoaded', () => {
  const courseContainer = document.getElementById('courseCards');
  const creditNote = document.getElementById('totalCredits');
  const filterButtons = document.querySelectorAll('.filters button');

  function renderCourses(filtered) {
    courseContainer.innerHTML = '';
    let totalCredits = 0;

    filtered.forEach(course => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.textContent = `${course.code} - ${course.name}`;

      if (course.completed) {
        div.style.borderLeft = '5px solid green';
        div.style.backgroundColor = '#e8f5e9';
      } else {
        div.style.borderLeft = '5px solid red';
        div.style.backgroundColor = '#fff3f3';
      }

      courseContainer.appendChild(div);

      if (course.completed) {
        totalCredits += course.credits;
      }
    });

    creditNote.textContent = totalCredits;
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      if (filter === 'all') {
        renderCourses(courses);
      } else {
        const filtered = courses.filter(course => course.type === filter);
        renderCourses(filtered);
      }
    });
  });

  // Initial render
  renderCourses(courses);
});
