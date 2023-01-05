<script>
  import Logo from "$lib/components/Logo.svelte";
  import ThemeToggleButton from "$lib/components/ThemeToggleButton.svelte";
  import FuriToggle from "$lib/components/FuriToggle.svelte";
  import NavItem from "$lib/components/NavItem.svelte";

  import {navItems} from '$lib/config';
</script>

<nav class="main-nav">
  <a href="/" class="logo"><Logo /></a>
  <ul class="nav-links">
    {#each navItems as nav }
      <li>
        <NavItem href={nav.route}>{nav.title}</NavItem>
      </li>
    {/each}
  </ul>

  <div class="toggles">
    <ThemeToggleButton />
    <FuriToggle />
  </div>
</nav>

<style>
  .main-nav {
    --nav-inline-padding: var(--size-8);
    display: grid;
    z-index: 999;
    gap: 0 1rem;
    grid-template-columns: repeat(6, minmax(40px, 1fr));
    grid-auto-rows: min-content;
    grid-template-areas:
      " ..... ..... logo  logo   .....  toggle"
      " ..... nlink nlink nlink  nlink  toggle";
    justify-content: center;
    align-items: center;
    background-color: var(--surface-2);
    position: sticky;
    top: 0;
    box-shadow: var(--shadow-2);
    padding-block: var(--size-2);
  }

  .logo {
    grid-area: logo;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    border-bottom: 0.25px solid var(--surface-3);
    position: relative;
    padding-block: var(--size-3);
  }

  .logo :global(*) {
    height: var(--size-6);
  }

  .nav-links {
    grid-area: nlink;
    display: flex;
    justify-content: space-evenly;
    gap: var(--size-4);
    align-items: center;
    justify-content: center;
  }

  .nav-links :global(.active) {
    color: var(--brand);
  }

  .nav-links :global(a) {
    text-decoration: none;
    color: var(--text-2);
    cursor: pointer;
    font-family: var(--font-sans);
  }

  .nav-links :global(a):hover {
    color: var(--brand-em);
  }

  .toggles {
    grid-area: toggle;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--size-2);
    justify-self: right;
    align-self: end;
    padding-right: var(--size-3);
    padding-block: var(--size-1);
  }

  /* iPad size devices */
  @media (min-width: 480px) {
    .main-nav {
      font-size: var(--font-size-3);
      grid-template-columns: 1fr repeat(6, 6rem) 1fr;
      grid-template-areas: "logo logo  nlink  nlink  nlink  nlink  toggle toggle";
      padding-block: var(--size-2);
    }

    .logo {
      border: none;
      justify-self: left;
      padding-left: var(--nav-inline-padding);
      padding-block: var(--size-1);
    }

    .logo :global(*) {
      height: var(--size-8);
    }
    .toggles {
      flex-direction: row;
      align-self: center;
      padding-right: var(--nav-inline-padding);
      padding-block: 0;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .main-nav {
      font-size: var(--font-size-5);
      grid-template-columns: 1fr repeat(6, var(--size-11)) 1fr;
    }
    .toggles {
      gap: var(--size-3);
    }
    .logo {
      padding-block: var(--size-2);
    }
    .logo :global(*) {
      height: var(--size-10);
    }
  }
</style>