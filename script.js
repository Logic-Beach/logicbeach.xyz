function showSection(sectionId) {
    // Get all the sections
    var sections = document.querySelectorAll('div[id^="section"]');
    console.log(sections.length);
    // Hide all the sections
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== sectionId) {
            sections[i].style.display = 'none';
        }
    }

    // Show the selected section
    document.getElementById("section-" + sectionId).style.display = 'block';
}
