<script setup>
import HelloWorld from './components/HelloWorld.vue';
import MenuCard from './components/MenuCard.vue';
import JobHistory from './components/JobHistory.vue';
</script>

<template>
	<div
		:class="{
			'sm-card': $vuetify.display.sm,
			'md-card':
				$vuetify.display.md || $vuetify.display.lg || $vuetify.display.xl,
		}"
	>
		<MenuCard />
		<JobHistory />
	</div>
	<div>
		<a
			href="https://vitejs.dev"
			target="_blank"
		>
			<img
				src="/vite.svg"
				class="logo"
				alt="Vite logo"
			/>
		</a>
		<a
			href="https://vuejs.org/"
			target="_blank"
		>
			<img
				src="./assets/vue.svg"
				class="logo vue"
				alt="Vue logo"
			/>
		</a>
	</div>
	<HelloWorld msg="Hello Maddie" />
</template>

<style scoped>
.sm-card {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100vw;
}
.md-card {
	display: flex;
	flex-direction: row;
	width: 100vw;
	max-width: 1280px;
	padding-left: 96px;
	padding-right: 96px;
}

.sm-card {
	display: flex;
	flex-direction: column;
}
.logo {
	height: 10em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
