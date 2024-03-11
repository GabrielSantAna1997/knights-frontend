<template>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  </template>
  
  <script>
  export default {
    name: 'KnightsActions',
    props: ['index', 'viewEdit', 'viewDelete'],
    data() {
      return {
        edit: "Editar",
        del: "Excluir"
      };
    }
  };
  </script>
  
  <style>
  .custom-edit {
    cursor: pointer;
  }
  .custom-icon {
    font-size: 18px !important;
  }
  </style>
  