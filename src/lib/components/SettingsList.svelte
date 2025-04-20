<script lang="ts">
  import VirtualList from './VirtualList.svelte';
  import SettingItem from './SettingItem.svelte';
  import type { Setting } from '$lib/models/setting';
  import { onMount } from 'svelte';

  let settings: Setting[] = [];

  onMount(async () => {
    const res = await fetch('/api/settings');
    settings = await res.json();
  });
</script>

<p class="text-sm italic">Loaded settings: {settings.length}</p>
<VirtualList items={settings} rowHeight={40}>
  <svelte:fragment slot="item" let:item>
    <SettingItem {item} />
  </svelte:fragment>
</VirtualList>
