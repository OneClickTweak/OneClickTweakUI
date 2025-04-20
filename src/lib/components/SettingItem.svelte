<script lang="ts">
  import { t } from 'svelte-i18n';
  import type { Setting } from '$lib/models/setting';

  export let item: Setting;
  const key = item.name.join('.');
</script>

<div class="p-2 border-b flex justify-between items-center h-10">
  <span class="text-sm truncate">{$t(key)}</span>
  <span class="text-xs text-gray-500 italic">{item.handler}</span>
</div>
