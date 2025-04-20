<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchSettings } from '$lib/api/settings';
  import { settings } from '$lib/stores/settings';
  import SettingsList from '$lib/components/SettingsList.svelte';

  onMount(async () => {
    const data = await fetchSettings('Windows', 'Browser');
    settings.set(data);
  });
</script>

<main class="grid grid-cols-3 h-screen">
  <aside class="col-span-1 border-r p-4">Filters</aside>
  <section class="col-span-2 overflow-auto p-4">
    <SettingsList {settings} />
  </section>
</main>