import React, { useState } from 'react';
import { Image, Button, Card, Icon, Header } from 'semantic-ui-react';
import vaish from '../images/vaishna.jpg';

function Home(props) {
	const [gif, setGif] = useState('');

	const onClick = (event, { name }) => {
		setGif(name);
	};
	return (
		<div
			style={{
				height: '100%',
				backgroundColor: '#FFCB38',
				width: '100vw',
				paddingTop: '5%',
				paddingBottom: '5%',
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
						<span>
							<Icon name="lock" size="small" style={{ paddingBottom: 0 }} />{' '}
							Taken Since September 10, 2022
						</span>
					</Card.Meta>
					<Card.Description style={{ paddingTop: 2 }}>
						वैष्णवी जैसी कोई नाही
					</Card.Description>
					<Card.Description style={{ paddingTop: 4 }}>
						~ Sameer Ingavale
					</Card.Description>
				</Card.Content>
				<Card.Content extra style={{ backgroundColor: '#FFF6D8' }}>
					<div>
						Made with{' '}
						<Icon
							name="heart"
							color="red"
							size="small"
							style={{ marginLeft: 2 }}
						/>
					</div>
				</Card.Content>
			</Card>
			<Card raised centered style={{ paddingTop: 12, paddingBottom: 16 }}>
				<div style={{ color: '#666666', marginBottom: 8 }}>
					Does Vaish love Sameer?{'  '} 🤔
				</div>

				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 4,
					}}
				>
					<Button
						name="https://media.tenor.com/EPB7uiDGlDwAAAAC/kbc-memes-7crore-meme.gif"
						content="Yes"
						color="green"
						onClick={onClick}
					/>

					<Button
						name="https://c.tenor.com/Bplyyy9lO7EAAAAC/chal-jhootha.gif"
						content="No"
						color="red"
						style={{ marginLeft: 5 }}
						onClick={onClick}
					/>
				</div>
				<Image
					src={gif}
					wrapped
					ui={false}
					style={{ marginTop: 12, paddingRight: 8, paddingLeft: 8 }}
				/>
			</Card>
		</div>
	);
}

export default Home;
