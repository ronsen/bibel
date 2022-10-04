<script>
    import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

    import 'nprogress/nprogress.css';
    import "../app.css";

    NProgress.configure({ minimum: 0.16 });
    $: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<nav class="bg-white shadow px-3 py-2 font-bold">
    <div class="container mx-auto text-center">
        <a href="/" class="title text-2xl">Bibel</a>
    </div>
</nav>

<main class="w-full lg:w-3/5 mx-auto mt-3 mb-12 px-3">
    <slot />
</main>

<footer class="fixed left-0 bottom-0 w-full text-center text-xs p-2 bg-zinc-900 text-white">
    <a href="https://s.id/ronsen" target="_blank">Built with &hearts; by Ronald Nababan</a>
</footer>
