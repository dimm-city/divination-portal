<script>
  import Container from "../components/Container.svelte";
  export let title;
</script>

<style>
  .page-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }
  h1 {
    z-index: 1;
  }
</style>

<video
  autoplay
  loop
  muted
  disablepictureinpicture
  playsinline
  class="background"
  ><source
    src="https://files.dimm.city/stories/intro/index.mp4"
    type="video/mp4" /></video>
<div class="page-container fade-in">
  <h1>{title}</h1>
  <Container>
    <slot />
  </Container>
</div>
