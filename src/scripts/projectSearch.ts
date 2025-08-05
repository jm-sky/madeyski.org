export function initializeProjectSearch() {
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('projectSearch') as HTMLInputElement;
    const projectList = document.getElementById('projectList');
    const noResults = document.getElementById('noResults');

    if (!searchInput || !projectList || !noResults) return;

    const projectItems = Array.from(projectList.querySelectorAll('li[data-project]'));

    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();

      if (searchTerm === '') {
        // Show all projects
        projectItems.forEach(item => {
          (item as HTMLElement).setAttribute('data-visible', 'true');
        });
        noResults.classList.add('hidden!');
        return;
      }

      let visibleCount = 0;

      projectItems.forEach(item => {
        const projectData = JSON.parse((item as HTMLElement).dataset.project ?? '{}');

        const searchableText = [
          projectData.name,
          projectData.description,
          projectData.company,
          projectData.myRole,
          ...(projectData.technologies ?? [])
        ].filter(Boolean).join(' ').toLowerCase();

        if (searchableText.includes(searchTerm)) {
          (item as HTMLElement).setAttribute('data-visible', 'true');
          visibleCount++;
        } else {
          (item as HTMLElement).setAttribute('data-visible', 'false');
        }
      });

      if (visibleCount === 0) {
        noResults.classList.remove('hidden!');
      } else {
        noResults.classList.add('hidden!');
      }
    });
  });
}
