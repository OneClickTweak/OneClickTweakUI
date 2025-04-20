<script lang="ts">
  import { t } from 'svelte-i18n';
  import type { Setting } from '$lib/models/setting';
  import { SettingScope } from '$lib/models/setting';

  export let item: Setting;
  export let level: number = 0;
  export let SettingItem;

  let expanded = false;
  const key = item.name?.join('.') ?? 'unnamed';

  function toggleExpand() {
    expanded = !expanded;
  }

  const hasChildren = item.settings?.length;
</script>

<div
  class="flex items-center border-b p-2 cursor-pointer hover:bg-gray-100 transition"
  style="padding-left: {level * 1.5}rem;"
  on:click={toggleExpand}
>
  {#if hasChildren}
    <span class="w-4 mr-2">{expanded ? '▾' : '▸'}</span>
  {:else}
    <span class="w-4 mr-2"></span>
  {/if}
  <span class="flex-1 truncate text-sm">{$t(key)}</span>

  <!-- Scope Columns -->
  <div class="flex gap-3 ml-4">
    <label class="text-xs flex items-center gap-1">
      <input type="checkbox" checked={item.scope === SettingScope.Machine} disabled />
      Machine
    </label>
    <label class="text-xs flex items-center gap-1">
      <input type="checkbox" checked={item.scope === SettingScope.User} disabled />
      User
    </label>
  </div>
</div>

{#if expanded}
  {#each item.settings ?? [] as child}
    <svelte:component this={SettingItem} item={child} level={level + 1} />
  {/each}
{/if}
