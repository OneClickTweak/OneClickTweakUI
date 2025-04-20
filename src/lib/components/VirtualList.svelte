<script lang="ts">
  export let items: any[] = [];
  export let rowHeight = 40;
  export let overscan = 5;

  let container: HTMLDivElement;
  let scrollTop = 0;
  let containerHeight = 0;

  function handleScroll() {
    scrollTop = container.scrollTop;
  }

  function handleResize() {
    if (container) containerHeight = container.clientHeight;
  }

  $: startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  $: visibleCount = Math.ceil(containerHeight / rowHeight) + overscan * 2;
  $: visibleItems = items.slice(startIndex, startIndex + visibleCount);
  $: offsetY = startIndex * rowHeight;

  // Reactively re-calculate when items change
  $: if (items && items.length) {
    containerHeight = container?.clientHeight ?? 0;
  }
</script>

<svelte:window on:resize={handleResize} />
<div bind:this={container} on:scroll={handleScroll} class="overflow-auto w-full h-full">
  <div style="height: {items.length * rowHeight}px; position: relative;">
    <div
      style="transform: translateY({offsetY}px);"
      class="absolute top-0 left-0 w-full"
    >
      {#each visibleItems as item (item.key || item.name?.join('-'))}
        <slot name="item" {item} />
      {/each}
    </div>
  </div>
</div>
