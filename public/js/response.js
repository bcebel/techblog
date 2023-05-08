const newFormHandler = async (event) => {
  event.preventDefault();

  const project_id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  console.log(id);
  console.log(name);
  console.log(description);

  if (project_id && name && description) {
    const response = await fetch(`/api/response`, {
      method: 'POST',
      body: JSON.stringify({ project_id, name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.reload();
    } else {
      location.reload();
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const project_id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/response/${project_id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.response-list')
  .addEventListener('click', delButtonHandler);
