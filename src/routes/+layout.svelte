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

<footer class="fixed left-0 bottom-0 w-full text-center text-xs px-4 py-2 bg-zinc-900 text-white">
    <div class="w-full lg:w-3/5 mx-auto">
        <div class="flex justify-between">
            <a href="/">Bibel <span class="invisible md:visible">- Alkitab bahasa Batak Toba</span></a>
            <div class="inline-flex gap-2">
                <a href="/privacy">Privasi</a>
                <a href="/about">Tentang</a>
                <a href="https://trakteer.id/ronaldnababan/tip?quantity=1" target="_blank">Donasi</a>
            </div>
        </div>
    </div>
</footer>
