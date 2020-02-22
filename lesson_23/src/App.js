import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export class App extends React.Component {

	state = {
		isPlaying: false,
	}

	play = () => {
		console.log(this.audio)
		if (this.state.isPlaying) {
			this.setState({ isPlaying: false })
			this.audio.pause()
		} else {
			this.setState({ isPlaying: true })
			this.audio.play()
		}
	}
	
	render() {		
		return (
			<Card >
			  <div id="myDiv">
				<CardContent >
				  <Typography component="h5" variant="h5">
					Live From Space
				  </Typography>
				  <Typography variant="subtitle1" color="textSecondary">
					Mac Miller
				  </Typography>
				</CardContent>
				<div >
				  <IconButton aria-label="previous">
					{true ? <SkipNextIcon /> : <SkipPreviousIcon />}
				  </IconButton>
				  <IconButton aria-label="play/pause" onClick={this.play}> 
					{this.state.isPlaying ? <Pause /> : <PlayArrowIcon />}
				  </IconButton>
				  <IconButton aria-label="next">
					{true ? <SkipPreviousIcon /> : <SkipNextIcon />}
				  </IconButton>
				</div>
			  </div>
			  <CardMedia
				image="https://chordify.net/pages/wp-content/uploads/2019/08/random-chiasso-1024x683.png"
				title="Live from space album cover"
			  />
			  <Hidden>
				<audio
					ref={b => this.audio = b}
					src="http://d.topmusic.uz/new/singles/vol114/Alok_And_Sevenn_-_Symphonia_(TopMusic.uz).mp3"
					/>
				</Hidden>
			</Card>
		  );
	}
}
