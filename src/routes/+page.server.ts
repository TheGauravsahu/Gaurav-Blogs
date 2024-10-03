import type { PageLoad } from './$types';
import { GITHUB_TOKEN } from '$env/static/private';

export const load: PageLoad = async ({ fetch }) => {
	const query = `{
		repository(name: "Gaurav-Blogs", owner: "TheGauravsahu") {
		  discussions(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
			nodes {
			  title
			  number
			  body
			  createdAt
			  author {
				login
				avatarUrl
			  }
			}
		  }
		}
	  }`;

	try {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${GITHUB_TOKEN}`
			},
			body: JSON.stringify({ query })
		});

		const {
			data: {
				repository: {
					discussions: { nodes }
				}
			}
		} = await res.json();
		return { nodes };
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};
