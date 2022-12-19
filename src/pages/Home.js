import React, { useState, useEffect } from 'react';
import { Image, Button, Card, Icon, Header } from 'semantic-ui-react';
import vaish from '../images/vaishna.jpg';
import useSound from 'use-sound';
import laila from '../sounds/laila.mp3';
import mhn from '../sounds/mainHoonNa.mp3';
import dhagala from '../sounds/dhagala.mp3';

function Home(props) {
	const [gif, setGif] = useState('');

	const onClick = (event, { name }) => {
		setGif(name);
	};

	const [playLaila, { pause: pauseLaila }] = useSound(laila, {
		interrupt: true,
	});

	const [playMhn, { pause: pauseMhn }] = useSound(mhn, { interrupt: true });

	const [playDhagala, { pause: pauseDhagala }] = useSound(dhagala, {
		interrupt: true,
	});

	const songs = [
		{ mood: 'Nostalgic', emoji: '💫', music: playLaila },
		{ mood: 'Lonely', emoji: '🤗', music: playMhn },
		{ mood: 'Horny', emoji: '💦', music: playDhagala },
	];

	return (
		<div
			style={{
				minHeight: '100vh',
				backgroundColor: '#FFCB38',
				width: '100vw',
				paddingTop: '5%',
				paddingBottom: '5%',
			}}
		>
			<Card raised centered>
				<Image src={vaish} wrapped ui={false} />
				{/* <pre>{JSON.stringify(demo, 2, 2)}</pre> */}
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
			{/* <Card raised centered style={{ paddingTop: 12, paddingBottom: 16 }}>
				<div style={{ color: '#666666', marginBottom: 8 }}>
					🎼 Listen when you're feeling..
				</div>
				{songs.map((song) => (
					<div
						style={{
							display: 'flex',
							
							alignItems: 'center',
							marginTop: 4,
							
							padding: 8,
							marginRight: 12,
							marginLeft: 12,
						}}
					>
						<Button
							compact
							icon="play"
							floated="left"
							
							color="green"
							style={{ opacity: 0.6 }}
							onClick={() => {
								song.music();
							}}
						/>

						<div style={{ color: '#555555', marginLeft: 6 }}>
							{song.mood} <span style={{ marginLeft: 3 }}> {song.emoji}</span>
						</div>
					</div>
				))}
			</Card> */}
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
						style={{ opacity: 0.9 }}
						onClick={onClick}
					/>
					<Button
						name="https://gifimage.net/wp-content/uploads/2018/11/devdas-gif-6.gif"
						content="Maybe"
						color="black"
						style={{ marginLeft: 5, opacity: 0.9 }}
						onClick={onClick}
					/>
					<Button
						name="https://c.tenor.com/Bplyyy9lO7EAAAAC/chal-jhootha.gif"
						content="No"
						color="red"
						style={{ marginLeft: 5, opacity: 0.9 }}
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
			{/* <div className="test" id="test">
				<iframe
					width="298"
					height="153"
					src="https://w2.countingdownto.com/4473674"
					frameborder="0"
				/>
			</div> */}
			<div>
				<Card raised centered style={{ paddingTop: 12, paddingBottom: 16 }}>
					<div>Istanbul 🇹🇷</div>
					<iframe
						width="298"
						height="100"
						src="https://embed-countdown.onlinealarmkur.com/en/#2023-02-14T00:00:00@Africa%2FDar_es_Salaam"
						frameborder="0"
					/>
					<div>February 14, 2023</div>
				</Card>
			</div>
		</div>
	);
}

export default Home;
