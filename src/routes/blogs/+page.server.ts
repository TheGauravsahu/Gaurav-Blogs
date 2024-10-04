import type { PageLoad } from './$types';
import { GITHUB_TOKEN } from '$env/static/private';

export const load: PageLoad = async ({ fetch, setHeaders }) => {
	const query = `{
		repository(name: "Gaurav-Blogs", owner: "TheGauravsahu") {
		  discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
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
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
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
