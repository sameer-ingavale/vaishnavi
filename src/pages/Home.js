import React, { useState } from 'react';
import { Image, Button, Card, Icon, Header } from 'semantic-ui-react';
import vaish from '../images/vaishna.jpg';
import useSound from 'use-sound';
import laila from '../sounds/laila.mp3';
import mhn from '../sounds/mainHoonNa.mp3';
import dhagala from '../sounds/dhagala.mp3';
import chill from '../sounds/chill.mp3';

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
	const [playChill, { pause: pauseChill }] = useSound(chill, {
		interrupt: true,
	});

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
					🎼 Listen when you're feeling..
				</div>

				<div
					style={{
						display: 'flex',
						/* justifyContent: 'center', */
						alignItems: 'center',
						marginTop: 4,
						/* backgroundColor: '#F0CE6D', */
						padding: 8,
						marginRight: 12,
						marginLeft: 12,
					}}
				>
					<Button
						compact
						icon="play"
						floated="left"
						/* content="Play" */
						color="green"
						style={{ opacity: 0.6 }}
						onClick={() => {
							pauseMhn();
							pauseDhagala();
							pauseChill();
							playLaila();
						}}
					/>

					{/* <Button
						icon="pause"
						floated="left"
						
						color="grey"
						style={{ opacity: 0.6, marginRight: 10, marginLeft: 5 }}
						onClick={() => pause()}
					/> */}
					<div style={{ color: '#555555', marginLeft: 6 }}>
						Nostalgic <span style={{ marginLeft: 3 }}> 💫</span>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						/* justifyContent: 'center', */
						alignItems: 'center',
						marginTop: 4,
						/* backgroundColor: '#F0CE6D', */
						padding: 8,
						marginRight: 12,
						marginLeft: 12,
					}}
				>
					<Button
						compact
						icon="play"
						floated="left"
						/* content="Play" */
						color="green"
						style={{ opacity: 0.6 }}
						onClick={() => {
							pauseLaila();
							pauseDhagala();
							pauseChill();
							playMhn();
						}}
					/>

					<div style={{ color: '#555555', marginLeft: 6 }}>
						Lonely <span style={{ marginLeft: 3 }}>🤗</span>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						/* justifyContent: 'center', */
						alignItems: 'center',
						marginTop: 4,
						/* backgroundColor: '#F0CE6D', */
						padding: 8,
						marginRight: 12,
						marginLeft: 12,
					}}
				>
					<Button
						compact
						icon="play"
						floated="left"
						/* content="Play" */
						color="green"
						style={{ opacity: 0.6 }}
						onClick={() => {
							pauseLaila();
							pauseMhn();
							pauseChill();
							playDhagala();
						}}
					/>

					<div style={{ color: '#555555', marginLeft: 6 }}>
						Horny <span style={{ marginLeft: 3 }}>💦</span>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						/* justifyContent: 'center', */
						alignItems: 'center',
						marginTop: 4,
						/* backgroundColor: '#F0CE6D', */
						padding: 8,
						marginRight: 12,
						marginLeft: 12,
					}}
				>
					<Button
						compact
						icon="play"
						floated="left"
						/* content="Play" */
						color="green"
						style={{ opacity: 0.6 }}
						onClick={() => {
							pauseLaila();
							pauseMhn();
							pauseDhagala();
							playChill();
						}}
					/>

					<div style={{ color: '#555555', marginLeft: 6 }}>
						Angry <span style={{ marginLeft: 3 }}>😇</span>
					</div>
				</div>
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
		</div>
	);
}

export default Home;
