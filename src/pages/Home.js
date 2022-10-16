import React from 'react';
import { Image, Header, Card, Icon } from 'semantic-ui-react';
import vaish from '../images/vaishna.jpg';

function Home(props) {
	return (
		<div
			style={{
				height: '100vh',
				backgroundColor: '#FFCB38',
				width: '100vw',
				paddingTop: '5%',
			}}
		>
			<Card raised centered>
				<Image src={vaish} wrapped ui={false} />
				<Card.Content>
					<Card.Header>Vaishnavi Nikam</Card.Header>
					<Card.Meta style={{ marginTop: 4 }}>
						<span>Taken Since September 10, 2022</span>
					</Card.Meta>
					<Card.Description>Back off, she's mine, bitch.</Card.Description>
					<Card.Description style={{ paddingTop: 4 }}>
						~ Sameer Ingavale
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name="user" />1 Babu
					</a>
				</Card.Content>
			</Card>
		</div>
	);
}

export default Home;
