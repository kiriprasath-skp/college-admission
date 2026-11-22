(function () {
  const departments = [
    { id: 'cse', name: 'Computer Science & Engineering', hod: 'Dr. Rhea Verma', established: 1998, students: 420, color: '#2F6FED', desc: 'Software engineering, AI/ML, and systems design with strong industry ties.' },
    { id: 'ece', name: 'Electronics & Communication', hod: 'Dr. Samuel Okafor', established: 2001, students: 310, color: '#7C3AED', desc: 'Embedded systems, VLSI design, and communication networks.' },
    { id: 'mech', name: 'Mechanical Engineering', hod: 'Dr. Lina Hartmann', established: 1995, students: 280, color: '#EA6A12', desc: 'Core mechanical design, thermodynamics, and robotics.' },
    { id: 'civil', name: 'Civil Engineering', hod: 'Dr. Arjun Deshmukh', established: 1995, students: 240, color: '#0E9594', desc: 'Structural, environmental, and geotechnical engineering.' },
    { id: 'ba', name: 'Business Administration', hod: 'Dr. Yuki Tanabe', established: 2008, students: 260, color: '#D6336C', desc: 'Management, finance, marketing, and entrepreneurship.' },
    { id: 'arts', name: 'Arts & Humanities', hod: 'Dr. Esinam Mensah', established: 2005, students: 150, color: '#4C9A2A', desc: 'Literature, history, psychology, and the social sciences.' }
  ];

  const courses = [
    { id: 'c1', deptId: 'cse', name: 'B.Tech Computer Science', duration: '4 years', seats: 120, fee: '$6,200/yr' },
    { id: 'c2', deptId: 'cse', name: 'M.Tech Artificial Intelligence', duration: '2 years', seats: 40, fee: '$7,800/yr' },
    { id: 'c3', deptId: 'ece', name: 'B.Tech Electronics & Communication', duration: '4 years', seats: 90, fee: '$5,900/yr' },
    { id: 'c4', deptId: 'mech', name: 'B.Tech Mechanical Engineering', duration: '4 years', seats: 80, fee: '$5,600/yr' },
    { id: 'c5', deptId: 'civil', name: 'B.Tech Civil Engineering', duration: '4 years', seats: 70, fee: '$5,400/yr' },
    { id: 'c6', deptId: 'ba', name: 'BBA', duration: '3 years', seats: 100, fee: '$4,800/yr' },
    { id: 'c7', deptId: 'ba', name: 'MBA', duration: '2 years', seats: 60, fee: '$8,500/yr' },
    { id: 'c8', deptId: 'arts', name: 'B.A. English Literature', duration: '3 years', seats: 50, fee: '$3,900/yr' }
  ];

  const faculty = [
    { id: 'f1', name: 'Dr. Rhea Verma', deptId: 'cse', designation: 'Professor & HOD', qualification: 'Ph.D. Computer Science', experience: 18, email: '[email protected]', initials: 'RV' },
    { id: 'f2', name: 'Prof. Daniel Kim', deptId: 'cse', designation: 'Associate Professor', qualification: 'Ph.D. AI & Robotics', experience: 10, email: '[email protected]', initials: 'DK' },
    { id: 'f3', name: 'Dr. Samuel Okafor', deptId: 'ece', designation: 'Professor & HOD', qualification: 'Ph.D. Electronics', experience: 16, email: '[email protected]', initials: 'SO' },
    { id: 'f4', name: 'Dr. Lina Hartmann', deptId: 'mech', designation: 'Professor & HOD', qualification: 'Ph.D. Mechanical Eng.', experience: 20, email: '[email protected]', initials: 'LH' },
    { id: 'f5', name: 'Dr. Arjun Deshmukh', deptId: 'civil', designation: 'Professor & HOD', qualification: 'Ph.D. Structural Eng.', experience: 14, email: '[email protected]', initials: 'AD' },
    { id: 'f6', name: 'Dr. Yuki Tanabe', deptId: 'ba', designation: 'Professor & HOD', qualification: 'Ph.D. Management', experience: 12, email: '[email protected]', initials: 'YT' }
  ];

  const students = [
    { id: 'st1', name: 'Maya Lindqvist', deptId: 'cse', year: '3rd Year', achievement: 'Winner, National AI Hackathon 2026', initials: 'ML' },
    { id: 'st2', name: 'Rohan Agarwal', deptId: 'ece', year: '4th Year', achievement: 'Published IEEE paper on low-power VLSI design', initials: 'RA' },
    { id: 'st3', name: 'Chidinma Okoro', deptId: 'mech', year: '2nd Year', achievement: 'Lead, solar car team — regional finals', initials: 'CO' },
    { id: 'st4', name: 'Elena Petrov', deptId: 'ba', year: '3rd Year', achievement: 'Founder, campus sustainability startup', initials: 'EP' },
    { id: 'st5', name: 'Kabir Chandra', deptId: 'civil', year: '4th Year', achievement: 'Best structural design, state-level competition', initials: 'KC' },
    { id: 'st6', name: 'Aisha Bello', deptId: 'arts', year: '2nd Year', achievement: 'Published poetry collection, university press', initials: 'AB' }
  ];

  const events = [
    { id: 'e1', name: 'TechFest 2027', category: 'Technical', date: '2027-02-14', venue: 'Main Auditorium', desc: 'Annual technical symposium with hackathons, robotics, and paper presentations.' },
    { id: 'e2', name: 'Cultural Night: Rhythms', category: 'Cultural', date: '2027-01-20', venue: 'Open Air Theatre', desc: 'Music, dance, and drama showcase from every department.' },
    { id: 'e3', name: 'Inter-College Sports Meet', category: 'Sports', date: '2027-03-05', venue: 'Sports Complex', desc: 'Athletics, football, and basketball tournaments.' },
    { id: 'e4', name: 'Alumni Homecoming', category: 'Networking', date: '2026-12-18', venue: 'Convention Hall', desc: 'Reconnect with alumni across batches and industries.' },
    { id: 'e5', name: 'Research Symposium', category: 'Academic', date: '2027-04-10', venue: 'Seminar Hall B', desc: 'Student and faculty research paper presentations.' }
  ];

  const announcements = [
    'Admissions for the 2027 batch are now open',
    'Mid-semester exams begin December 2nd',
    'Library extended hours during exam week',
    'TechFest registrations close February 1st'
  ];

  const categoryMeta = {
    Technical: { color: '#2F6FED', icon: '💻' },
    Cultural: { color: '#D6336C', icon: '🎭' },
    Sports: { color: '#4C9A2A', icon: '🏅' },
    Networking: { color: '#7C3AED', icon: '🤝' },
    Academic: { color: '#EA6A12', icon: '📖' }
  };

  const monthAbbr = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const deptName = id => (departments.find(d => d.id === id) || {}).name || id;

  let inquiries = [];
  try { inquiries = JSON.parse(localStorage.getItem('ashcombe-inquiries') || '[]'); } catch (e) { inquiries = []; }
  let registeredEvents = [];
  try { registeredEvents = JSON.parse(localStorage.getItem('ashcombe-registered') || '[]'); } catch (e) { registeredEvents = []; }

  function persist() {
    try {
      localStorage.setItem('ashcombe-inquiries', JSON.stringify(inquiries));
      localStorage.setItem('ashcombe-registered', JSON.stringify(registeredEvents));
    } catch (e) { /* storage unavailable, continue in-memory only */ }
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  // Scroll-reveal animation
  const revealIO = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealIO.unobserve(entry.target); } });
  }, { threshold: 0.12 }) : null;
  function revealObserve(container) {
    const items = container.querySelectorAll ? container.querySelectorAll('.reveal') : [];
    items.forEach(el => revealIO ? revealIO.observe(el) : el.classList.add('is-visible'));
  }

  // Department detail modal
  const deptModal = document.getElementById('deptModal');
  function openDeptModal(id) {
    const d = departments.find(x => x.id === id);
    if (!d) return;
    const deptFaculty = faculty.filter(f => f.deptId === id);
    const deptCourses = courses.filter(c => c.deptId === id);
    document.getElementById('modalBody').innerHTML = `
      <h2>${d.name}</h2>
      <p>${d.desc}</p>
      <div class="dept-stats"><div><strong>${d.students}</strong> students</div><div><strong>Est. ${d.established}</strong></div></div>
      <div class="modal-sub">Faculty in this department</div>
      <div class="modal-list">${deptFaculty.map(f => `<div class="modal-row">${f.name} — ${f.designation}</div>`).join('') || '<div class="modal-row">No faculty listed yet.</div>'}</div>
      <div class="modal-sub">Courses offered</div>
      <div class="modal-list">${deptCourses.map(c => `<div class="modal-row">${c.name} · ${c.duration} · ${c.fee}</div>`).join('') || '<div class="modal-row">No courses listed yet.</div>'}</div>
    `;
    deptModal.classList.add('show');
  }
  function closeModal() { deptModal.classList.remove('show'); }
  document.getElementById('modalClose').addEventListener('click', closeModal);
  deptModal.addEventListener('click', e => { if (e.target === deptModal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = (function () { try { return localStorage.getItem('ashcombe-theme'); } catch (e) { return null; } })();
  if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('ashcombe-theme', next); } catch (e) { /* ignore */ }
  });

  // Tabs
  function goTo(view) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + view));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => goTo(btn.dataset.view)));
  document.querySelectorAll('.quick-link').forEach(btn => btn.addEventListener('click', () => goTo(btn.dataset.goto)));

  // Ticker
  const track = document.getElementById('tickerTrack');
  track.innerHTML = announcements.map(a => `<span>${a}</span>`).join('');

  // Home stats (simple count-up animation)
  const totalStudents = departments.reduce((sum, d) => sum + d.students, 0);
  const statsData = [
    { label: 'Departments', value: departments.length, icon: '🏛️' },
    { label: 'Courses', value: courses.length, icon: '📚' },
    { label: 'Faculty', value: faculty.length, icon: '🧑‍🏫' },
    { label: 'Students enrolled', value: totalStudents, icon: '🎓' }
  ];
  const statsRow = document.getElementById('statsRow');
  statsData.forEach(s => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `<div class="stat-icon">${s.icon}</div><div class="stat-num" data-target="${s.value}">0</div><div class="stat-label">${s.label}</div>`;
    statsRow.appendChild(card);
  });
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  // Departments
  const deptGrid = document.getElementById('deptGrid');
  departments.forEach(d => {
    const card = document.createElement('div');
    card.className = 'card clickable reveal';
    card.style.borderLeftColor = d.color;
    card.innerHTML = `
      <div class="dept-name"><span class="dot" style="background:${d.color}"></span>${d.name}</div>
      <div class="dept-meta">Est. ${d.established} · Headed by ${d.hod}</div>
      <p class="dept-desc">${d.desc}</p>
      <div class="dept-stats"><div><strong>${d.students}</strong> students</div><div><strong>${courses.filter(c => c.deptId === d.id).length}</strong> programs</div></div>
    `;
    card.addEventListener('click', () => openDeptModal(d.id));
    deptGrid.appendChild(card);
  });
  revealObserve(deptGrid);

  // Dept filter dropdowns (shared population)
  function populateDeptSelect(select, includeAll) {
    if (includeAll) {
      const opt = document.createElement('option');
      opt.value = 'all'; opt.textContent = 'All departments';
      select.appendChild(opt);
    }
    departments.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id; opt.textContent = d.name;
      select.appendChild(opt);
    });
  }

  // Courses
  const courseDeptFilter = document.getElementById('courseDeptFilter');
  populateDeptSelect(courseDeptFilter, false);
  const courseSearch = document.getElementById('courseSearch');
  function renderCourses() {
    const list = document.getElementById('courseList');
    const q = courseSearch.value.trim().toLowerCase();
    const deptFilter = courseDeptFilter.value;
    list.innerHTML = '';
    courses
      .filter(c => deptFilter === 'all' || c.deptId === deptFilter)
      .filter(c => !q || c.name.toLowerCase().includes(q))
      .forEach(c => {
        const row = document.createElement('div');
        row.className = 'course-row';
        const dcolor = (departments.find(x => x.id === c.deptId) || {}).color || '#B98B22';
        row.innerHTML = `
          <div>
            <div class="course-name">${c.name}</div>
            <div class="course-dept" style="color:${dcolor}">${deptName(c.deptId)}</div>
          </div>
          <div class="course-right">
            <div class="course-fee">${c.fee}</div>
            <div class="course-sub">${c.duration} · ${c.seats} seats</div>
          </div>
        `;
        list.appendChild(row);
      });
    if (!list.children.length) list.innerHTML = '<p class="empty-note" style="padding:14px 0;">No courses match that search.</p>';
  }
  courseDeptFilter.addEventListener('change', renderCourses);
  courseSearch.addEventListener('input', renderCourses);
  renderCourses();

  // Faculty
  const facDeptFilter = document.getElementById('facDeptFilter');
  populateDeptSelect(facDeptFilter, false);
  const facSearch = document.getElementById('facSearch');
  function renderFaculty() {
    const grid = document.getElementById('facGrid');
    const q = facSearch.value.trim().toLowerCase();
    const deptFilter = facDeptFilter.value;
    grid.innerHTML = '';
    faculty
      .filter(f => deptFilter === 'all' || f.deptId === deptFilter)
      .filter(f => !q || f.name.toLowerCase().includes(q))
      .forEach(f => {
        const card = document.createElement('div');
        card.className = 'card reveal';
        const dcolor = (departments.find(x => x.id === f.deptId) || {}).color || '#B98B22';
        card.style.borderLeftColor = dcolor;
        card.innerHTML = `
          <div class="fac-top">
            <div class="avatar" style="background:${dcolor}">${f.initials}</div>
            <div>
              <div class="fac-name">${f.name}</div>
              <div class="fac-role" style="color:${dcolor}">${f.designation}</div>
            </div>
          </div>
          <div class="fac-meta">${f.qualification}</div>
          <div class="fac-meta">${deptName(f.deptId)} · ${f.experience} yrs experience</div>
          <div class="badge">${f.email}</div>
        `;
        grid.appendChild(card);
      });
    if (!grid.children.length) grid.innerHTML = '<p class="empty-note">No faculty match that search.</p>';
    revealObserve(grid);
  }
  facDeptFilter.addEventListener('change', renderFaculty);
  facSearch.addEventListener('input', renderFaculty);
  renderFaculty();

  // Students
  const stuDeptFilter = document.getElementById('stuDeptFilter');
  populateDeptSelect(stuDeptFilter, true);
  function renderStudents() {
    const grid = document.getElementById('stuGrid');
    const deptFilter = stuDeptFilter.value;
    grid.innerHTML = '';
    students.filter(s => deptFilter === 'all' || s.deptId === deptFilter).forEach(s => {
      const card = document.createElement('div');
      card.className = 'card reveal';
      const dcolor = (departments.find(x => x.id === s.deptId) || {}).color || '#B98B22';
      card.style.borderLeftColor = dcolor;
      card.innerHTML = `
        <div class="stu-top">
          <div class="avatar" style="background:${dcolor}">${s.initials}</div>
          <div>
            <div class="stu-name">${s.name}</div>
            <div class="stu-meta">${deptName(s.deptId)} · ${s.year}</div>
          </div>
        </div>
        <p class="dept-desc">${s.achievement}</p>
      `;
      grid.appendChild(card);
    });
    if (!grid.children.length) grid.innerHTML = '<p class="empty-note">No students in this department yet.</p>';
    revealObserve(grid);
  }
  stuDeptFilter.addEventListener('change', renderStudents);
  renderStudents();

  // Events
  const eventCatFilter = document.getElementById('eventCatFilter');
  [...new Set(events.map(e => e.category))].forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    eventCatFilter.appendChild(opt);
  });
  function renderEvents() {
    const list = document.getElementById('eventList');
    const catFilter = eventCatFilter.value;
    list.innerHTML = '';
    events
      .filter(e => catFilter === 'all' || e.category === catFilter)
      .sort((a, b) => a.date.localeCompare(b.date))
      .forEach(e => {
        const dateObj = new Date(e.date + 'T00:00:00');
        const isRegistered = registeredEvents.includes(e.id);
        const card = document.createElement('div');
        card.className = 'event-card reveal';
        const cmeta = categoryMeta[e.category] || { color: '#B98B22', icon: '📌' };
        card.style.borderLeft = `4px solid ${cmeta.color}`;
        card.innerHTML = `
          <div class="event-date" style="background:${cmeta.color}"><div class="d">${dateObj.getDate()}</div><div class="m">${monthAbbr[dateObj.getMonth()]}</div></div>
          <div>
            <div class="event-name">${e.name} <span class="badge badge-accent" style="color:${cmeta.color}">${cmeta.icon} ${e.category}</span></div>
            <div class="event-venue">${e.venue}</div>
            <div class="event-desc">${e.desc}</div>
          </div>
          <div class="event-actions">
            <button class="reg-btn${isRegistered ? ' done' : ''}" data-event="${e.id}" ${isRegistered ? 'disabled' : ''}>${isRegistered ? 'Registered ✓' : 'Register'}</button>
          </div>
        `;
        list.appendChild(card);
      });
    list.querySelectorAll('.reg-btn:not(.done)').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.event;
        if (!registeredEvents.includes(id)) registeredEvents.push(id);
        persist();
        const ev = events.find(e => e.id === id);
        showToast(`Registered for ${ev.name}`);
        renderEvents();
      });
    });
    revealObserve(list);
  }
  eventCatFilter.addEventListener('change', renderEvents);
  renderEvents();

  // Admissions form
  const admDept = document.getElementById('admDept');
  populateDeptSelect(admDept, false);
  const admForm = document.getElementById('admissionForm');
  const admSubmit = document.getElementById('admSubmit');
  function updateAdmSubmitState() {
    const ready = document.getElementById('admName').value.trim() &&
      document.getElementById('admPhone').value.trim() &&
      document.getElementById('admEmail').value.trim() &&
      admDept.value;
    admSubmit.disabled = !ready;
  }
  ['admName', 'admPhone', 'admEmail'].forEach(id => document.getElementById(id).addEventListener('input', updateAdmSubmitState));
  admDept.addEventListener('change', updateAdmSubmitState);

  function renderInquiries() {
    const list = document.getElementById('inquiryList');
    const empty = document.getElementById('inquiryEmpty');
    list.innerHTML = '';
    if (!inquiries.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';
    inquiries.forEach(i => {
      const item = document.createElement('div');
      item.className = 'inquiry-item';
      item.innerHTML = `<span>${i.name} · ${deptName(i.deptId)}</span><button data-id="${i.id}">Remove</button>`;
      list.appendChild(item);
    });
    list.querySelectorAll('button[data-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        inquiries = inquiries.filter(i => i.id !== btn.dataset.id);
        persist();
        renderInquiries();
      });
    });
  }

  admForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inquiry = {
      id: 'inq' + Date.now(),
      name: document.getElementById('admName').value.trim(),
      phone: document.getElementById('admPhone').value.trim(),
      email: document.getElementById('admEmail').value.trim(),
      deptId: admDept.value,
      message: document.getElementById('admMessage').value.trim()
    };
    inquiries.push(inquiry);
    persist();
    renderInquiries();
    showToast(`Inquiry submitted for ${deptName(inquiry.deptId)}`);
    admForm.reset();
    updateAdmSubmitState();
  });

  renderInquiries();

  // Global search
  const searchIndex = [
    ...departments.map(d => ({ type: 'Department', name: d.name, go: () => { goTo('departments'); openDeptModal(d.id); } })),
    ...courses.map(c => ({ type: 'Course', name: c.name, go: () => { goTo('courses'); courseSearch.value = c.name; renderCourses(); } })),
    ...faculty.map(f => ({ type: 'Faculty', name: f.name, go: () => { goTo('faculty'); facSearch.value = f.name; renderFaculty(); } })),
    ...events.map(e => ({ type: 'Event', name: e.name, go: () => goTo('events') }))
  ];
  const globalSearch = document.getElementById('globalSearch');
  const searchResults = document.getElementById('searchResults');
  globalSearch.addEventListener('input', () => {
    const q = globalSearch.value.trim().toLowerCase();
    if (!q) { searchResults.classList.remove('show'); return; }
    const matches = searchIndex.filter(item => item.name.toLowerCase().includes(q)).slice(0, 6);
    searchResults.innerHTML = matches.length
      ? matches.map((m, i) => `<div class="search-result-item" data-i="${i}"><span class="srt">${m.type}</span><span class="srn">${m.name}</span></div>`).join('')
      : '<div class="search-empty">No matches</div>';
    searchResults.classList.add('show');
    searchResults.querySelectorAll('.search-result-item').forEach((el, i) => {
      el.addEventListener('click', () => { matches[i].go(); searchResults.classList.remove('show'); globalSearch.value = ''; mainNav.classList.remove('open'); });
    });
  });
  document.addEventListener('click', e => { if (!e.target.closest('.search-box')) searchResults.classList.remove('show'); });
})();
