<script>
   import { Router, Route, Link } from 'svelte-routing'; // Импортируем  компоненты из библиотеки маршрутизации
  // import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  import Home from '../pages/Home.svelte'; // Импортируем компоненты страниц
  import Coverages from '../pages/Coverages.svelte';
  import MyClaims from '../pages/MyClaims.svelte';
  import ContactUs from '../pages/ContactUs.svelte';
  import FindAProvider from '../pages/FindAProvider.svelte';
  import FormsDocuments from '../pages/FormsDocuments.svelte';
  import DarkMode from './DarkMode.svelte';
  import { CropIcon } from 'svelte-feather-icons'
  
  export let url = "";
  
  // Определяем функцию для изменения состояния навигации
  let isNavigationOpen = true;

  function toggleNavigation() {
    isNavigationOpen = !isNavigationOpen;
  }

  let searchQuery = '';
  
  // Функция для фильтрации элементов навигации
  function filterNavigationItems() {
    const navigationItems = document.querySelectorAll('.navigation-item');
    const searchTerm = searchQuery.toLowerCase();
    
    navigationItems.forEach(item => {
      const textContent = item.textContent.toLowerCase();
      if (textContent.includes(searchTerm)) {
        item.style.display = 'block'; // Отображаем элемент, если он соответствует поисковому запросу
      } else {
        item.style.display = 'none'; // Скрываем элемент, если он не соответствует поисковому запросу
      }
    });
  }
</script>

<style>
</style>

<Router {url}>
  <div class="navigation-container">
  
  <div class="navigation {isNavigationOpen ? '' : 'collapsed'}">
    <div class="toggle-button" on:click={toggleNavigation}>
      <i class="fas fa-bars"></i> <!-- Иконка для кнопки минимизации -->
    </div>
  <nav class="navigation" style="{isNavigationOpen ? 'display: block;' : 'display: none;'}">
    <!-- Элемент поиска -->
    <div class="search">
      <!-- <input type="text" placeholder="Search..."> -->
      <input type="text" bind:value={searchQuery} on:input={filterNavigationItems} placeholder="Search...">
      <!-- <button>Search</button> -->
    </div>
    <ul>
      <li>
        <Link to="/" class="navigation-item">
          <!-- <i class="fas fa-home"></i> -->
          Home
        </Link>
      </li>
      <li>
        <Link to="/my-coverages" class="navigation-item">
          <!-- <i class="material-icons">menu</i> -->
          My Coverage
        </Link>
      </li>
      <li>
        <Link to="/my-claims" class="navigation-item">
          <!-- <i class="material-icons"></i> -->
          My Claims
        </Link>
      </li>
      <li>
        <Link to="/contact-us" class="navigation-item">
          <!-- <i class="material-icons"></i> -->
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="/find-provider" class="navigation-item">
          <!-- <i class="material-icons">face</i> -->
          Find a Provider
        </Link>
      </li>
      <li>
        <Link to="/forms-and-documents" class="navigation-item">
          <!-- <CropIcon/> -->
          Forms & Documents
        </Link>
      </li>
    </ul>
    <DarkMode />
    </nav>
    </div>
  </div>
  <div>
    <Route path="/" component={Home} />
    <Route path="/my-coverages" component={Coverages} />
    <Route path="/my-claims" component={MyClaims} />
    <Route path="/contact-us" component={ContactUs} />
    <Route path="/find-provider" component={FindAProvider} />
    <Route path="/forms-and-documents" component={FormsDocuments} />
  </div>
</Router>


<!--<nav class="navigation" style="{isNavigationOpen ? 'display: block;' : 'display: none;'}">
    <Link to="/" on:click={handleNavigationClick}><i class="fas fa-home"></i>Home</Link>
    <Link to="/coverages" on:click={handleNavigationClick}><i class="fas fa-file-alt"></i>My Coverage</Link></li>
    <li><Link href="/my-claims" on:click={handleNavigationClick}><i class="fas fa-file-medical"></i>My Claims</Link></li>
    <li><Link href="/contact-us" on:click={handleNavigationClick}>Contact Us</Link></li>
    <li><Link href="/find-a-provider" on:click={handleNavigationClick}><i class="material-icons">face</i>Find a Provider</Link></li>
    <li><Link href="/forms-documents" on:click={handleNavigationClick}>Forms & Documents</Link></li>
-->