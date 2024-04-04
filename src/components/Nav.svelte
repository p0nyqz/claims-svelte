<script>
   import { Router, Route, Link } from 'svelte-routing'; // Импортируем  компоненты из библиотеки маршрутизации
  import Home from '../pages/Home.svelte'; // Импортируем компоненты страниц
  import MyCoverages from '../pages/MyCoverages.svelte';
  import MyClaims from '../pages/MyClaims.svelte';
  import ContactUs from '../pages/ContactUs.svelte';
  import FindAProvider from '../pages/FindAProvider.svelte';
  import FormsDocuments from '../pages/FormsDocuments.svelte';
  import DarkMode from './DarkMode.svelte';
  import { CropIcon } from 'svelte-feather-icons'
  // import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';

  export let url = "";
  // Определяем функцию для изменения состояния навигации
  let isNavigationOpen = true;
  let searchQuery = '';
  
  // Создаем массив элементов навигации с текстом и соответствующими иконками
  let navigationItems = [
    { text: 'Home', to: '/', icon: 'fas fa-home' },
    { text: 'My Coverage', to: '/my-coverages', icon: 'fas fa-file-alt' },
    { text: 'My Claims', to: '/my-claims', icon: 'fas fa-file-medical' },
    { text: 'Contact Us', to: '/contact-us', icon: 'fas fa-envelope' },
    { text: 'Find a Provider', to: '/find-provider', icon: 'fas fa-user-md' },
    { text: 'Forms & Documents', to: '/forms-and-documents', icon: 'fas fa-file' }
  ];

  function toggleNavigation() {
    isNavigationOpen = !isNavigationOpen;
  }

  let filteredNavigationItems = navigationItems; // Initialize with all items
  
  function filterNavigationItems() {
    const searchTerm = searchQuery.trim().toLowerCase();
    filteredNavigationItems = navigationItems.filter(item => item.text.toLowerCase().includes(searchTerm));
  }
  
  function updateNavigationItems(event) {
    searchQuery = event.target.value;
    filterNavigationItems(); // Update filtered items on each input change
  }

  // Функция для фильтрации элементов навигации
  // function filterNavigationItems() {
  //   const searchTerm = searchQuery.trim().toLowerCase();
  //   if (searchTerm === '') {
  //     return navigationItems;
  //   } else {
  //     return navigationItems.filter(item => item.text.toLowerCase().includes(searchTerm));
  //   }
  // }
  // Функция для обновления элементов навигации при вводе запроса поиска
  // function updateNavigationItems(event) {
  //   searchQuery = event.target.value;
  // }


  // function filterNavigationItems() {
  //   const searchTerm = searchQuery.trim().toLowerCase();
  //   if (searchTerm === '') {
  //     return navigationItems;
  //   } else {
  //     return navigationItems.filter(item => item.text.toLowerCase().includes(searchTerm));
  //   }
  // }
  
  // function updateNavigationItems(event) {
  //   searchQuery = event.target.value;
  // }

  // Функция для фильтрации элементов навигации
  // function filterNavigationItems() {
  //   const navigationItems = document.querySelectorAll('.navigation-item');
  //   const searchTerm = searchQuery.toLowerCase();
    
  //   navigationItems.forEach(item => {
  //     const textContent = item.textContent.toLowerCase();
  //     if (textContent.includes(searchTerm)) {
  //       item.style.display = 'block'; // Отображаем элемент, если он соответствует поисковому запросу
  //     } else {
  //       item.style.display = 'none'; // Скрываем элемент, если он не соответствует поисковому запросу
  //     }
  //   });
  // }
</script>

<style>
</style>

<Router {url}>  
  <div class="navigation {isNavigationOpen ? '' : 'collapsed'}">

    <button class="toggle-button" on:click={toggleNavigation}>
      <i class="fas fa-bars"></i> <!-- Иконка для кнопки минимизации -->
    </button>
    
    <nav class="navigation" style="{isNavigationOpen ? 'display: block;' : 'display: none;'}">

    <!-- Элемент поиска -->

    <input type="text" id="navsearch" name="navsearch" bind:value={searchQuery} on:input={updateNavigationItems} placeholder="Search...">


    <!-- Список элементов навигации -->
      <ul>
        {#each filteredNavigationItems as item}
          <li>
            <Link to={item.to} class="navigation-item">
              <i class={item.icon}></i> {item.text}
            </Link>
          </li>
        {/each}
      </ul>
    <DarkMode />
    </nav>
    </div>
    
  <div>
    <Route path="/" component={Home} />
    <Route path="/my-coverages" component={MyCoverages} />
    <Route path="/my-claims" component={MyClaims} />
    <Route path="/contact-us" component={ContactUs} />
    <Route path="/find-provider" component={FindAProvider} />
    <Route path="/forms-and-documents" component={FormsDocuments} />
  </div>
</Router>