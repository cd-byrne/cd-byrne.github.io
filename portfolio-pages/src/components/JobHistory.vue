<template>
	<div class="job-history-card">
		<v-card
			v-for="(item, index) in jsonData"
			:key="index"
		>
			<v-card-title>{{ item.title }}</v-card-title>
			<v-card-text>{{ item.description }}</v-card-text>
		</v-card>
	</div>
</template>

<script setup>
import jsonData from '../assets/jobHistory.json';
</script>

<style>
.job-history-card {
	display: flex-inline;
	flex-direction: column;
	align-items: flex-start;
	width: 50%;
	padding-top: 96px;
	padding-bottom: 96px;
	height: 200vh;
}
</style>
