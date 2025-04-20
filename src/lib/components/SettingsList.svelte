<script lang="ts">
  import VirtualList from './VirtualList.svelte';
  import SettingItem from './SettingItem.svelte';
  import type { Setting } from '$lib/models/setting';

  export let settings: Setting[] = [];
</script>

<VirtualList {settings} rowHeight={40}>
  <svelte:fragment slot="item" let:item>
    <SettingItem {item} />
  </svelte:fragment>
</VirtualList>
