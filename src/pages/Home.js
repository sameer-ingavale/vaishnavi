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
					<Card.Header>
						Vaishnavi Nikam, 23
						<Icon
							color="blue"
							name="check circle"
							size="small"
							style={{ marginLeft: 4 }}
						/>
					</Card.Header>
					<Card.Meta style={{ marginTop: 5 }}>
						<span>Taken Since September 10, 2022</span>
					</Card.Meta>
					<Card.Description style={{ paddingTop: 2 }}>
						वैष्णवी जैसी कोई नाही
					</Card.Description>
					<Card.Description style={{ paddingTop: 4 }}>
						~ Sameer Ingavale
					</Card.Description>
				</Card.Content>
				{/* <Card.Content extra style={{ backgroundColor: '#FFF6D8' }}>
					<div style={{ padding: 4, backgroundColor: '#FFCB38', width: '10%' }}>
						<Icon name="user" />1 Babu
					</div>
				</Card.Content> */}
			</Card>
		</div>
	);
}

export default Home;
