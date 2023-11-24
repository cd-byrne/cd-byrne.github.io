<template>
	<div class="menu-card">
		<h1 class="name">{{ name }}</h1>
		<h2 class="title">{{ title }}</h2>
		<ul class="menu">
			<li
				v-for="link in links"
				:key="link.id"
			>
				<a :href="link.href">{{ link.label }}</a>
			</li>
		</ul>
	</div>
</template>

<script setup>
const name = 'Chris Byrne';
const title = 'Product Lead';
const links = [
	{ id: 1, label: 'Home', href: '#home' },
	{ id: 2, label: 'About', href: '#about' },
	{ id: 3, label: 'Projects', href: '#projects' },
	{ id: 4, label: 'Contact', href: '#contact' },
];
</script>

<style scoped>
.menu-card {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: sticky;
	top: 0px;
	width: 50%;
	height: 100%;
	padding-top: 96px;
	padding-bottom: 96px;
}

.name {
	font-size: 2rem;
	margin-bottom: 0.5rem;
}

.title {
	font-size: 1.2rem;
	margin-bottom: 1rem;
}

.menu {
	list-style: none;
	padding: 0;
	margin: 0;
}

.menu li {
	display: inline-block;
	margin-right: 1rem;
	transition: all 300ms linear;
}

.menu li:last-child {
	margin-right: 0;
}
.menu a:hover {
	filter: drop-shadow(0 0 1em #f8f8f9aa);
	color: white;
}

.menu a {
	text-decoration: none;
	color: #333;
	font-weight: bold;
	transition: all 500ms linear;
}
</style>
