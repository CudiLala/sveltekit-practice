<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p>{JSON.stringify(data || {})}</p>
<h1>In the about page</h1>
<a href="/">Go to home</a>
