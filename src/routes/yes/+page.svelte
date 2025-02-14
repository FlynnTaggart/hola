<!-- src/routes/yes/+page.svelte -->
<script lang="ts">
	import { config } from "../../config";
</script>

<div class="container">
	<img src={config.yesPage.image} alt="Yes" class="cute-image" loading="lazy" />
	<div class="heading-with-images">
		<img
			src={config.yesPage.kiss}
			alt="kiss"
			class="side-image"
			loading="lazy"
		/>
		<p>{config.yesPage.message}</p>
		<img
			src={config.yesPage.happy_cat}
			alt="Happy_cat"
			class="side-image"
			loading="lazy"
		/>
	</div>

	<div class = "other-pic">
		<img
			src={config.yesPage.happy}
			alt="Greg"
			class="side-image"
			loading="lazy"
		/>
		<img
			src={config.yesPage.walk}
			alt="Greg"
			class="side-image"
			loading="lazy"
		/>
	</div>
</div>
