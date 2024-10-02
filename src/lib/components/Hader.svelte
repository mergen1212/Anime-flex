<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="{base}/">Главная</a>
			</li>
			<li>
				<a href="{base}/about">Контакты</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		background-color: rgba(52, 58, 64, 255);

		color: white;
		padding: 6px;
	}

	ul {
		display: flex; /* Устанавливаем flex для ul */
		list-style-type: none; /* Убираем маркеры списка */
		padding: 0; /* Убираем отступы */
		margin: 0; /* Убираем отступы */
	}

	li {
		margin: 0 15px; /* Отступы между элементами списка */
	}
	nav {
		margin-top: 10px;
	}

	a {
		color: white;
		text-decoration: none;
		margin: 0 15px;
		transition: color 0.2s ease;
	}

	a:hover {
		color: rgba(255, 255, 255, 0.7);
	}
</style>
